import {Button} from '@rneui/base';
import LottieView from 'lottie-react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {ScrollView, Text} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import Heading from 'src/components/Heading';
import HeadingWithNavigation from 'src/components/HeadingWithNavigation';

const CalendarScreen = ({navigation}: {navigation: any}) => {
  const [selected, setSelected] = useState('');

  return (
    <ScrollView>
      <View
        style={{
          paddingTop: 70,
          flex: 1,
          marginBottom: 10,
          paddingBottom: 20,
          backgroundColor: '#EBC846',
        }}>
        <HeadingWithNavigation navigation={navigation}>
          Calendar
        </HeadingWithNavigation>
      </View>
      <SafeAreaView style={{backgroundColor: '#FFF'}}>
        <View style={{flex: 1}}>
          <Calendar
            onDayPress={day => {
              setSelected(day.dateString);
            }}
            theme={{
              backgroundColor: '#FFF',
              calendarBackground: '#FFF',
              textSectionTitleColor: '#b6c1cd',
              selectedDayBackgroundColor: '#00adf5',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#00adf5',
              dayTextColor: '#2d4150',
              textDisabledColor: '#FFF',
            }}
            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,
                /* selectedDotColor: 'orange', */
              },
            }}
          />
        </View>
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
          <LottieView
            autoPlay
            loop
            style={{width: 200, height: 400}}
            source={require('../../../assets/lottie/Lapicito.json')}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default CalendarScreen;
