import React from 'react';
import View from './View';
import Text from './Text';

const Heading = ({
  children,
  variant = 'h1',
}: {
  children: any;
  variant?: string;
}) => {
  return (
    <View>
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

export default Heading;
