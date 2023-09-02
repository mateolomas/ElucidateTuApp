import {Badge, Button, Card} from '@rneui/base';
import LottieView from 'lottie-react-native';
import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {ScrollView, Text} from 'react-native';

const Cart = ({navigation}: {navigation: any}) => {
  const achievements = [
    {title: 'Reading', description: 'Completed 5 lessons', color: 'green'},
    {title: 'Listening', description: 'Completed 10 lessons', color: 'blue'},
    {title: 'Writing', description: 'Completed 20 lessons', color: 'purple'},
    {title: 'Speaking', description: 'Completed 50 lessons', color: 'orange'},
  ];

  const onPress = (achievement: any) => () => {
    console.log({achievement});
    navigation.navigate('Abilities', achievement.title);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.heading}>Abilities</Text>
          <LottieView
            autoPlay
            loop
            style={{width: 50, height: 50}}
            source={require('../../../../assets/lottie/Felicidadesjiji.json')}
          />
        </View>
      </View>

      {achievements.map((achievement, index) => (
        <TouchableOpacity key={index} onPress={onPress(achievement)}>
          <Card
            containerStyle={[
              styles.card,
              {backgroundColor: achievement.color},
            ]}>
            <Badge
              badgeStyle={styles.badge}
              value={achievement.title}
              textStyle={styles.badgeText}
            />
            <Text style={styles.achievementTitle}>{achievement.title}</Text>
            <Text style={styles.achievementDescription}>
              {achievement.description}
            </Text>
          </Card>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    flexGrow: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    marginBottom: 20,
    borderRadius: 10,
    padding: 20,
  },
  badge: {
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    position: 'absolute',
    top: -15,
    right: 0,
  },
  badgeText: {
    fontWeight: 'bold',
  },
  achievementTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  achievementDescription: {
    fontSize: 16,
    color: 'white',
  },
});

export default Cart;
