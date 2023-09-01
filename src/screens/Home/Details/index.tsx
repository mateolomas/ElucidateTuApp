import {Card, Badge, Icon} from '@rneui/base';
import LottieView from 'lottie-react-native';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const Details = () => {
  const units = [
    {title: 'Unit 1', type: 'Listening', color: 'green'},
    {title: 'Unit 2', type: 'Reading', color: 'blue'},
    {title: 'Unit 3', type: 'Writing', color: 'purple'},
    {title: 'Unit 4', type: 'Speaking', color: 'orange'},
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Lets' learn!</Text>
      <View
        style={{
          display: 'flex',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <LottieView
          autoPlay
          loop
          style={{width: 200, height: 200}}
          source={require('../../../../assets/lottie/HaciendoCositasYPuff.json')}
        />
      </View>

      {units.map((unit, index) => (
        <Card
          key={index}
          containerStyle={[styles.card, {backgroundColor: unit.color}]}>
          {/* <Badge
            badgeStyle={styles.badge}
            value={unit.type}
            textStyle={styles.badgeText}
          /> */}
          <Text style={styles.unitTitle}>{unit.title}</Text>
          <Text style={styles.unitTitle}>{unit.type}</Text>
          <Icon
            name="arrow-right"
            type="font-awesome"
            color="white"
            size={24}
            containerStyle={styles.iconContainer}
          />
        </Card>
      ))}
    </ScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    padding: 20,
    paddingTop: 70,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    marginBottom: 0,
    borderRadius: 10,
    padding: 20,
  },
  badge: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  badgeText: {
    color: 'white',
    fontWeight: 'bold',
  },
  unitTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  iconContainer: {
    position: 'absolute',
    top: '50%',
    right: 20,
    transform: [{translateY: -12}],
  },
});
