import { Avatar, Icon } from '@rneui/base';
import React from 'react';
import {
  ScrollView,
  TouchableOpacity
} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import Text from 'src/components/Text';
import View from 'src/components/View';

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
              progressValueStyle={{
                fontWeight: '300',
                color: 'yellow',
                fontFamily: 'Poppins',
              }}
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
            <View
              style={{
                borderRadius: 10,
                padding: 8,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 8,
                backgroundColor: 'white',
              }}>
              <Icon name="calendar-month" color={'black'} size={28} />
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 14,
                }}>
                Nov 25
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal>
          {generateDays(
            (day: number) => () => {
              navigation.navigate('CalendarScreen');
            },
          )}
        </ScrollView>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <Tabs />
        <ScrollView>
          <CategoryCard
            key={1}
            title={'IELTS Speaking'}
            isSelected={false}
            onPress={() => {}}
          />
          <CategoryCard
            key={2}
            title={'TOEIC 101'}
            isSelected={false}
            onPress={() => {}}
          />
          <CategoryCard
            key={3}
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
        <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
          <CircularProgress
            value={76}
            radius={25}
            progressValueStyle={{fontWeight: '300', color: 'yellow'}}
            duration={2000}
            progressValueColor={'black'}
            maxValue={100}
            activeStrokeColor={'#F16A4B'}
            inActiveStrokeColor={'#9b59b6'}
            inActiveStrokeOpacity={0.2}
            valueSuffix={'%'}
          />

          <View>
            <Text
              style={{
                textAlign: 'left',
                fontWeight: 'bold',
              }}>
              {title}
            </Text>
            <Text
              style={{
                color: '#76EF83',
              }}>
              Over due, Nov 30, 2022
            </Text>
          </View>
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

const generateDays = (onPress: (day: number) => () => void) => {
  const days = [];
  for (let i = 1; i < 31; i++) {
    days.push(<CalendarSlot onPress={onPress(i)} key={i} day={i} />);
  }
  return days;
};

const CalendarSlot = ({day, onPress}: {day: number; onPress: () => void}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          height: 100,
          width: 50,
          marginHorizontal: 5,
          borderRadius: 50,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          backgroundColor: day === 4 ? 'white' : 'black',
        }}>
        <Text
          style={{
            color: day === 4 ? 'black' : 'white',
            fontSize: 18,
          }}>
          {day}
        </Text>
        <Text
          style={{
            color: day === 4 ? 'black' : 'white',
            fontSize: 18,
          }}>
          Nov
        </Text>
      </View>
    </TouchableOpacity>
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
