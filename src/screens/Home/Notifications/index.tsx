import {Avatar} from '@rneui/base';
import React from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import Heading from 'src/components/Heading';
import Text from 'src/components/Text';
import View from 'src/components/View';
import {UserHeader} from '../Explore';

const Notifications = ({
  navigation,
}: {
  navigation: {navigate: (arg0: string) => void};
}) => {
  const onPress = () => {
    navigation.navigate('ChatWithBot');
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1}}>
        <UserHeader color="black" />
        <Heading variant="h2">Online chat</Heading>
        <View
          style={{
            flex: 1,
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 30,
          }}>
          <Avatar
            size={52}
            rounded
            icon={{name: 'adb', type: 'material'}}
            containerStyle={{backgroundColor: 'green'}}>
            <Avatar.Accessory size={24} />
          </Avatar>

          <Avatar
            size={52}
            rounded
            source={{
              uri: 'https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916__340.jpg',
            }}
          />
          <Avatar
            size={52}
            rounded
            source={{uri: 'https://randomuser.me/api/portraits/men/35.jpg'}}
          />
          <Avatar
            size={52}
            rounded
            source={{
              uri: 'https://cdn.pixabay.com/photo/2014/09/17/20/03/profile-449912__340.jpg',
            }}
          />
          <Avatar
            size={52}
            rounded
            source={{uri: 'https://randomuser.me/api/portraits/men/38.jpg'}}
          />
        </View>
      </View>
      <View
        style={{
          flex: 2.4,
          paddingTop: 10,
          backgroundColor: '#EBC846',
          borderTopStartRadius: 30,
          borderTopEndRadius: 30,
        }}>
        <Heading variant="h2" color="white">
          Recent chat
        </Heading>
        <ScrollView>
          {contacts.map((contact, index) => {
            return (
              <ChatContact key={index} contact={contact} onPress={onPress} />
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const contacts = [
  {name: 'Bot', message: 'Hello', time: '12:00'},
  {name: 'John Doe', message: 'Hello', time: '12:00'},
  {name: 'Andy', message: 'Hello', time: '12:00'},
  {name: 'Alex', message: 'Hello', time: '12:00'},
  {name: 'Bolivar', message: 'Hello', time: '12:00'},
  {name: 'Nancy', message: 'Hello', time: '12:00'},
  {name: 'Mateo', message: 'Hello', time: '12:00'},
];
const ChatContact = ({
  contact,
  onPress,
}: {
  contact: (typeof contacts)[0];
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderBottomColor: '#EBC846',
          borderBottomWidth: 1,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Avatar
            size={52}
            rounded
            source={{
              uri: 'https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916__340.jpg',
            }}
          />
          <View style={{marginLeft: 10}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
              {contact.name}
            </Text>
            <Text
              style={{
                fontSize: 14,
                textAlign: 'justify',
                width: 200,
                color: 'black',
              }}>
              {contact.message}
            </Text>
          </View>
        </View>
        <Text style={{fontSize: 12, color: 'black'}}>{contact.time}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Notifications;
