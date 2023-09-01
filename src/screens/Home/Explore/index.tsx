import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import CardShoe from 'src/components/CardShoe';
import CardPromo from 'src/components/CardPromo';
import {SearchBar} from 'src/components/SearchBar';
import Heading from 'src/components/Heading';
import View from 'src/components/View';
import Text from 'src/components/Text';
import {Avatar, Icon} from '@rneui/base';
import CircularProgress from 'react-native-circular-progress-indicator';

const Explore = ({navigation}: {navigation: any}) => {
  const [selected, setSelected] = React.useState(0);
  return (
    <View style={{flex: 1, position: 'relative'}}>
      <View style={{flex: 1, backgroundColor: '#258A79'}}>
        <View
          style={{
            marginTop: 70,
          }}>
          <UserHeader onPress={() => navigation.navigate('Profile')} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 15,
            marginVertical: 15,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              height: 90,
              width: 90,
              alignContent: 'center',
              justifyContent: 'center',
              borderRadius: 50,
              backgroundColor: 'white',
            }}>
            <CircularProgress
              value={60}
              radius={45}
              progressValueStyle={{fontWeight: '300', color: 'yellow'}}
              duration={2000}
              progressValueColor={'black'}
              maxValue={100}
              activeStrokeColor={'#EBC846'}
              inActiveStrokeColor={'#9b59b6'}
              inActiveStrokeOpacity={0.2}
              valueSuffix={'%'}
            />
          </View>
          <Text style={{color: 'white', fontSize: 18}}>Task completed</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('CalendarScreen')}>
            <Text
              style={{
                color: 'black',
                padding: 10,
                borderRadius: 10,
                fontSize: 18,
                backgroundColor: 'white',
              }}>
              Nov 25
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal>{generateDays()}</ScrollView>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <Tabs />
        <ScrollView>
          <CategoryCard
            title={'IELTS Speaking'}
            isSelected={false}
            onPress={() => {}}
          />
          <CategoryCard
            title={'TOEIC 101'}
            isSelected={false}
            onPress={() => {}}
          />
          <CategoryCard
            title={'TOFEL EXAM'}
            isSelected={false}
            onPress={() => {}}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export const UserHeader = ({
  color = 'white',
  onPress,
}: {
  color?: string;
  onPress?: () => void;
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 10,
      }}>
      <View style={{flexDirection: 'row', gap: 10}}>
        <TouchableOpacity onPress={onPress}>
          <Avatar
            size={64}
            rounded
            source={{uri: 'https://randomuser.me/api/portraits/men/36.jpg'}}
            containerStyle={{backgroundColor: '#6733b9'}}
          />
        </TouchableOpacity>

        <View
          style={{
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: color}}>Hi, User</Text>
          <Text style={{color: color}}>Lets's learn together</Text>
        </View>
      </View>
      <View
        style={{
          height: 54,
          width: 54,
          borderRadius: 50,
          borderColor: color,
          borderWidth: 1,
          alignContent: 'center',
          justifyContent: 'center',
        }}>
        <View>
          <Icon name="notifications" color={color} size={28} />
        </View>
      </View>
    </View>
  );
};

const Tabs = () => {
  return (
    <View
      style={{
        marginVertical: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
      }}>
      <View>
        <Text>Your assignment</Text>
        <Text> 1/3 completed</Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 4,
          gap: 10,
          padding: 10,
          borderRadius: 40,
          backgroundColor: 'black',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 40,
            paddingHorizontal: 20,
          }}>
          <Text> Left</Text>
        </View>
        <View
          style={{
            backgroundColor: 'black',
            padding: 10,
            paddingHorizontal: 20,
            borderRadius: 40,
          }}>
          <Text
            style={{
              color: 'white',
            }}>
            Done
          </Text>
        </View>
      </View>
    </View>
  );
};

export const CategoryCard = ({
  title,
  isSelected,
  onPress,
}: {
  title: string;
  isSelected: boolean;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          marginVertical: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 20,
        }}>
        <View>
          <Text>70%</Text>
        </View>
        <View>
          <Text
            style={{
              textAlign: 'left',
            }}>
            {title}
          </Text>
          <Text>Over due, Nov 30, 2022</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            position: 'relative',
          }}>
          <View
            style={{
              left: -20,
            }}>
            <Avatar
              size={36}
              rounded
              source={{uri: 'https://randomuser.me/api/portraits/men/36.jpg'}}
              containerStyle={{backgroundColor: '#6733b9'}}
            />
          </View>
          <View
            style={{
              position: 'absolute',
            }}>
            <Avatar
              size={36}
              rounded
              source={{uri: 'https://randomuser.me/api/portraits/men/36.jpg'}}
              containerStyle={{backgroundColor: '#6733b9'}}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

/* const Avatar = () => {
  return (
    <View
      style={{
        height: 34,
        width: 34,
        borderRadius: 30,
        backgroundColor: 'red',
      }}>
      <Text>Avatar</Text>
    </View>
  );
}; */

const generateDays = () => {
  const days = [];
  for (let i = 1; i < 31; i++) {
    days.push(<CalendarSlot day={i} />);
  }
  return days;
};

const CalendarSlot = ({day}: {day: number}) => {
  return (
    <View
      style={{
        height: 100,
        width: 50,
        marginHorizontal: 5,
        borderRadius: 50,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}>
      <Text
        style={{
          color: 'white',
          fontSize: 18,
        }}>
        {day}
      </Text>
      <Text
        style={{
          color: 'white',
          fontSize: 18,
        }}>
        Nov
      </Text>
    </View>
  );
};

const TitleCategory = ({title}: {title: string}) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>Ver mas</Text>
    </View>
  );
};

const categories = [
  {
    id: 0,
    title: 'All shoes',
  },
  {
    id: 1,
    title: 'Sneakers',
  },
  {
    id: 2,
    title: 'Running',
  },
  {
    id: 3,
    title: 'Training',
  },
];
export default Explore;
