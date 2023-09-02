import React from 'react';
import {SafeAreaView} from 'react-native';
import HeadingWithNavigation from 'src/components/HeadingWithNavigation';
import {Text, StyleSheet, View, Button, ActivityIndicator} from 'react-native';
import FormData from 'form-data';
import axios from 'axios';
import Mode from './components/Mode';
import TranscribedOutput from './components/TranscribedOutput';
import {request, PERMISSIONS, check, RESULTS} from 'react-native-permissions';
import {Platform} from 'react-native';

import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import AudioUtils from 'react-native-audio-recorder-player';

const audioRecorder = new AudioRecorderPlayer();
var RNFS = require('react-native-fs');

const Abilities = ({navigation, route}: {navigation: any; route: any}) => {
  const [recording, setRecording] = React.useState(false as any);
  const [recordings, setRecordings] = React.useState([]);
  const [message, setMessage] = React.useState('');
  const [transcribedData, setTranscribedData] = React.useState([] as any);
  const [interimTranscribedData] = React.useState('');
  const [isRecording, setIsRecording] = React.useState(false);
  const [isTranscribing, setIsTranscribing] = React.useState(false);
  const [selectedLanguage, setSelectedLanguage] = React.useState('english');
  const [selectedModel, setSelectedModel] = React.useState(1);
  const [transcribeTimeout, setTranscribeTimout] = React.useState(5);
  const [stopTranscriptionSession, setStopTranscriptionSession] =
    React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const intervalRef: any = React.useRef(null);

  const stopTranscriptionSessionRef = React.useRef(stopTranscriptionSession);
  stopTranscriptionSessionRef.current = stopTranscriptionSession;

  const selectedLangRef = React.useRef(selectedLanguage);
  selectedLangRef.current = selectedLanguage;

  const selectedModelRef = React.useRef(selectedModel);
  selectedModelRef.current = selectedModel;

  const supportedLanguages = [
    'english',
    'chinese',
    'german',
    'spanish',
    'russian',
    'korean',
    'french',
    'japanese',
    'portuguese',
    'turkish',
    'polish',
    'catalan',
    'dutch',
    'arabic',
    'swedish',
    'italian',
    'indonesian',
    'hindi',
    'finnish',
    'vietnamese',
    'hebrew',
    'ukrainian',
    'greek',
    'malay',
    'czech',
    'romanian',
    'danish',
    'hungarian',
    'tamil',
    'norwegian',
    'thai',
    'urdu',
    'croatian',
    'bulgarian',
    'lithuanian',
    'latin',
    'maori',
    'malayalam',
    'welsh',
    'slovak',
    'telugu',
    'persian',
    'latvian',
    'bengali',
    'serbian',
    'azerbaijani',
    'slovenian',
    'kannada',
    'estonian',
    'macedonian',
    'breton',
    'basque',
    'icelandic',
    'armenian',
    'nepali',
    'mongolian',
    'bosnian',
    'kazakh',
    'albanian',
    'swahili',
    'galician',
    'marathi',
    'punjabi',
    'sinhala',
    'khmer',
    'shona',
    'yoruba',
    'somali',
    'afrikaans',
    'occitan',
    'georgian',
    'belarusian',
    'tajik',
    'sindhi',
    'gujarati',
    'amharic',
    'yiddish',
    'lao',
    'uzbek',
    'faroese',
    'haitian creole',
    'pashto',
    'turkmen',
    'nynorsk',
    'maltese',
    'sanskrit',
    'luxembourgish',
    'myanmar',
    'tibetan',
    'tagalog',
    'malagasy',
    'assamese',
    'tatar',
    'hawaiian',
    'lingala',
    'hausa',
    'bashkir',
    'javanese',
    'sundanese',
  ];

  const modelOptions = ['tiny', 'base', 'small', 'medium', 'large'];

  React.useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  function handleTranscribeTimeoutChange(newTimeout: any) {
    setTranscribeTimout(newTimeout);
  }

  const audioSettings = {
    sampleRate: 44100,
    channels: 2,
    bitsPerSample: 16,
  };

  async function startRecording() {
    try {
      console.log('Requesting audio permissions...');

      const audioPermission =
        Platform.OS === 'android'
          ? PERMISSIONS.ANDROID.RECORD_AUDIO
          : PERMISSIONS.IOS.MICROPHONE;

      const permissionStatus = await check(audioPermission);

      if (permissionStatus === RESULTS.GRANTED) {
        // Get the document directory path using react-native-fs
        const path = RNFS.DocumentDirectoryPath + '/test.mp3';

        // Start recording
        const result = await audioRecorder.startRecorder(path);

        if (result === 'OK') {
          console.log('Recording started');
          // You can stop the recording later with audioRecorderPlayer.stopRecorder()
        } else {
          console.error('Failed to start recording:', result);
        }
      } else {
        const requestResult = await request(audioPermission);
        if (requestResult === RESULTS.GRANTED) {
          // Permission granted, you can now start recording
        } else {
          console.log('Permission denied');
        }
      }
    } catch (err) {
      console.error('Failed to start recording:', err);
    }
  }

  async function stopRecording() {
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    let updatedRecordings = [...recordings] as any;
    const {sound, status} = await recording.createNewLoadedSoundAsync();
    updatedRecordings.push({
      sound: sound,
      duration: getDurationFormatted(status.durationMillis),
      file: recording.getURI(),
    });
    setRecordings(updatedRecordings);
    console.log('Recording stopped and stored at', uri);
    // Fetch audio binary blob data

    clearInterval(intervalRef.current);
    setStopTranscriptionSession(true);
    setIsRecording(false);
    setIsTranscribing(false);
  }

  function getDurationFormatted(millis: any) {
    const minutes = millis / 1000 / 60;
    const minutesDisplay = Math.floor(minutes);
    const seconds = Math.round(minutes - minutesDisplay) * 60;
    const secondDisplay = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutesDisplay}:${secondDisplay}`;
  }

  function getRecordingLines() {
    return recordings.map((recordingLine: any, index) => {
      return (
        <View key={index} style={styles.row}>
          <Text style={styles.fill}>
            {' '}
            Recording {index + 1} - {recordingLine.duration}
          </Text>
          <Button
            onPress={() => recordingLine.sound.replayAsync()}
            title="Play"></Button>
        </View>
      );
    });
  }

  function transcribeInterim() {
    clearInterval(intervalRef.current);
    setIsRecording(false);
  }

  async function transcribeRecording() {
    const uri = recording.getURI();
    const filetype = uri.split('.').pop();
    const filename = uri.split('/').pop();
    setLoading(true);
    const formData: any = new FormData();
    formData.append('language', selectedLangRef.current);
    formData.append('model_size', modelOptions[selectedModelRef.current]);
    formData.append(
      'audio_data',
      {
        uri,
        type: `audio/${filetype}`,
        name: filename,
      },
      'temp_recording',
    );
    axios({
      url: 'https://2c75-197-210-53-169.eu.ngrok.io/transcribe',
      method: 'POST',
      data: formData,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(function (response) {
        console.log('response :', response);
        setTranscribedData((oldData: any) => [...oldData, response.data]);
        setLoading(false);
        setIsTranscribing(false);
        intervalRef.current = setInterval(
          transcribeInterim,
          transcribeTimeout * 1000,
        );
      })
      .catch(function (error) {
        console.log('error : error');
      });

    if (!stopTranscriptionSessionRef.current) {
      setIsRecording(true);
    }
  }

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <HeadingWithNavigation navigation={navigation}>
        {route.params}
      </HeadingWithNavigation>
      <View style={styles.root}>
        <View style={{flex: 1}}>
          <Text style={styles.title}>Speech to Text. </Text>
          <Text style={styles.title}>{message}</Text>
        </View>
        <View style={styles.settingsSection}>
          <Mode
            disabled={isTranscribing || isRecording}
            possibleLanguages={supportedLanguages}
            selectedLanguage={selectedLanguage}
            onLanguageChange={setSelectedLanguage}
            modelOptions={modelOptions}
            selectedModel={selectedModel}
            onModelChange={setSelectedModel}
            transcribeTimeout={transcribeTimeout}
            onTranscribeTiemoutChanged={handleTranscribeTimeoutChange}
          />
        </View>
        <View style={styles.buttonsSection}>
          {!isRecording && !isTranscribing && (
            <Button onPress={startRecording} title="Start recording" />
          )}
          {(isRecording || isTranscribing) && (
            <Button
              onPress={stopRecording}
              disabled={stopTranscriptionSessionRef.current}
              title="stop recording"
            />
          )}
          <Button title="Transcribe" onPress={() => transcribeRecording()} />
          {getRecordingLines()}
        </View>

        {isLoading !== false ? (
          <ActivityIndicator
            size="large"
            color="#00ff00"
            hidesWhenStopped={true}
            animating={true}
          />
        ) : (
          <Text></Text>
        )}

        <View style={styles.transcription}>
          <TranscribedOutput
            transcribedText={transcribedData}
            interimTranscribedText={interimTranscribedData}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Abilities;

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'column',
  },
  title: {
    marginTop: 40,
    fontWeight: '400',
    fontSize: 30,
  },
  settingsSection: {
    flex: 1,
  },
  buttonsSection: {
    flex: 1,
    flexDirection: 'row',
  },
  transcription: {
    flex: 1,
    flexDirection: 'row',
  },
  recordIllustration: {
    width: 100,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fill: {
    flex: 1,
    margin: 16,
  },
  button: {
    margin: 16,
  },
});
