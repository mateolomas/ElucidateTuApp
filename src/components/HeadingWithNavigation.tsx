import React from 'react';

import Text from './Text';
import {Icon} from '@rneui/base';
import {Touchable, TouchableOpacity, View} from 'react-native';

const HeadingWithNavigation = ({
  children,
  navigation,
  variant = 'h1',
}: {
  navigation: any;
  children: any;
  variant?: string;
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View style={{}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" color={'#258A79'} size={28} />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          marginHorizontal: 10,
          fontFamily: 'Raleway',
          fontStyle: 'normal',
          fontWeight: variantMap[variant].fontWeight || '700',
          fontSize: variantMap[variant].fontSize || 32,
          color: variantMap[variant].color || '#2B2B2B',
          lineHeight: 38,
          textAlign: 'center',
        }}>
        {children}
      </Text>
      <View style={{}}></View>
    </View>
  );
};

const variantMap: Record<
  string,
  {
    fontSize: number;
    fontWeight?:
      | 'normal'
      | 'bold'
      | '100'
      | '200'
      | '300'
      | '600'
      | '700'
      | '800'
      | '900';
    color?: string;
  }
> = {
  h1: {
    fontSize: 32,
  },
  h2: {
    fontSize: 24,
  },
  h3: {
    fontSize: 18,
  },
  h4: {
    fontSize: 16,
  },
  h5: {
    fontSize: 14,
  },
  h6: {
    fontSize: 12,
  },
  body: {
    fontSize: 15,
    fontWeight: '300',
    color: '#989EA7',
  },
};

export default HeadingWithNavigation;
