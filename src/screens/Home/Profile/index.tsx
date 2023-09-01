import LottieView from 'lottie-react-native';
import React, {useEffect, useRef} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Text from 'src/components/Text';
import View from 'src/components/View';
import {Avatar, Card, Button, Icon} from '@rneui/base';

const Profile = () => {
  const userName = 'John Doe'; // Replace with user's name
  const unitsCompleted = 5; // Replace with actual units completed
  const timeSpentInApp = '10 hours';

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          <Card containerStyle={styles.card} wrapperStyle={styles.cardWrapper}>
            <Avatar
              rounded
              size="large"
              source={{
                uri: 'https://randomuser.me/api/portraits/men/36.jpg',
              }}
              containerStyle={styles.avatar}
            />
            <Text style={styles.userName}>{userName}</Text>
            <Text style={styles.subtitle}>Language Learner</Text>
            <View style={styles.profileInfo}>
              <Text style={styles.label}>Units Completed:</Text>
              <Text style={styles.value}>{unitsCompleted}</Text>
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.label}>Time Spent in App:</Text>
              <Text style={styles.value}>{timeSpentInApp}</Text>
            </View>
            <Button
              title="Edit"
              type="outline"
              icon={<Icon name="edit" size={15} />}
              buttonStyle={styles.editButton}
              titleStyle={styles.editButtonText}
              onPress={() => {}}
            />
          </Card>
        </View>

        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <LottieView
            autoPlay
            loop
            style={{width: 200, height: 200}}
            source={require('../../../../assets/lottie/Lapicito.json')}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    borderRadius: 10,
  },
  cardWrapper: {
    alignItems: 'center',
  },
  avatar: {
    padding: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  profileInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
  },
  editButton: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10,
  },
  editButtonText: {
    color: 'blue',
    marginLeft: 5,
  },
});
