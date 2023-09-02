import {Input} from '@rneui/base';
import React, {FC, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
  runOnJS,
} from 'react-native-reanimated';
import Button from 'src/components/Button';
import Heading from 'src/components/Heading';
import {initialQuestions, questions} from 'src/constants/questions';

const Rulette = ({navigation, route}: {navigation: any; route: any}) => {
  const trackQuestion = route.params;
  const [questionNumber, setQuestionNumber] = useState(route.params);
  const questionsLen = questions.length;
  const rotation = useSharedValue(0);

  const [currentAngle, setCurrentAngle] = useState(rotation.value);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{rotateZ: `${rotation.value}deg`}],
    };
  });

  const handleAngle = (value: number) => {
    setCurrentAngle(parseInt(value.toFixed(), 10));
  };
  const easing = Easing.bezier(0.23, 1, 0.32, 1);
  const gesture = Gesture.Pan().onUpdate(e => {
    rotation.value = withTiming(
      Math.abs(e.velocityY) / 7 + rotation.value,
      {
        duration: 1000,
        easing: easing,
      },
      () => runOnJS(handleAngle)(rotation.value % 360),
    );
  });

  const [value, setValue] = useState('');

  const getCurrentColor = () => {
    if (currentAngle < 91) return 'Red';
    if (currentAngle < 181) return 'Green';
    if (currentAngle < 271) return 'Yellow';
    return 'Blue';
  };

  const color = getCurrentColor();

  console.log({color, currentAngle, value, questionNumber, trackQuestion});
  useEffect(() => {
    if (currentAngle !== 0) {
      if (questionNumber < questionsLen) {
        setQuestionNumber(
          //random value
          Math.floor(Math.random() * questionsLen - (trackQuestion % 2) + 1),
        );
      }
    }
  }, [currentAngle, color, trackQuestion]);

  return (
    <SafeAreaView style={styles.container}>
      {currentAngle !== 0 && (
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            marginHorizontal: 10,
            alignItems: 'center',
          }}>
          <Heading color="white">
            {
              initialQuestions.find(question => question.id === questionNumber)
                ?.question
            }
          </Heading>
          <Input
            label={''}
            value={value}
            onChange={(e: any) => setValue(e.nativeEvent.text)}
            placeholder={''}
            errorMessage={''}
            style={{
              width: 300,
              height: 40,
              color: 'white',
              borderRadius: 10,
              marginTop: 20,
            }}
          />
        </View>
      )}

      <GestureHandlerRootView>
        <GestureDetector gesture={gesture}>
          <View style={styles.circleContainer}>
            <View style={styles.pointer} />
            <Animated.View style={[styles.circle, animatedStyles]}>
              <Wheel />
            </Animated.View>
          </View>
        </GestureDetector>
      </GestureHandlerRootView>

      {/* <Info currentAngle={currentAngle} currentColor={getCurrentColor()} /> */}
      <View style={{marginTop: 30}}>
        {trackQuestion === questionsLen ? (
          <Button onPress={() => navigation.replace('ChatWithBot2')}>
            Ready!
          </Button>
        ) : (
          <Button
            disabled={currentAngle === 0 || value === ''}
            onPress={() =>
              navigation.navigate('InitialQuestions', trackQuestion + 1)
            }>
            Next Question
          </Button>
        )}
      </View>
    </SafeAreaView>
  );
};

const Wheel = () => {
  return (
    <>
      <View style={styles.circleRow}>
        <View style={[styles.pizza, styles.pizzaRed]} />
        <View style={[styles.pizza, styles.pizzaBlue]} />
      </View>
      <View style={styles.circleRow}>
        <View style={[styles.pizza, styles.pizzaGreen]} />
        <View style={[styles.pizza, styles.pizzaYellow]} />
      </View>
    </>
  );
};

const Info: FC<{currentColor: string; currentAngle: number}> = ({
  currentAngle,
  currentColor,
}: {
  currentAngle: number;
  currentColor: string;
}) => {
  return (
    <View style={styles.infoBox}>
      <Text style={styles.text}>Current Color: {currentColor}</Text>
      <Text style={styles.text}>Current Angle: {currentAngle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 16,
  },
  infoBox: {
    marginTop: 15,
    height: 40,
    justifyContent: 'space-between',
  },
  circleRow: {width: '100%', height: '50%', flexDirection: 'row'},
  pizza: {width: '50%', height: '100%'},
  pizzaRed: {backgroundColor: '#ce4257'},
  pizzaBlue: {backgroundColor: '#4361ee'},
  pizzaYellow: {backgroundColor: '#fee440'},
  pizzaGreen: {backgroundColor: '#06d6a0'},
  circle: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 150,
    borderWidth: 2,
    overflow: 'hidden',
    borderColor: '#ced4da',
  },
  ball: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'blue',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0F513E',
  },
  circleContainer: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pointer: {
    width: 10,
    height: 30,
    backgroundColor: 'black',
    position: 'absolute',
    top: -15,
    borderWidth: 2,
    borderColor: 'white',
    zIndex: 6000,
  },
});

export default Rulette;
