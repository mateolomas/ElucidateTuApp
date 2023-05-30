import {AspectRatio, Box, HStack, Stack, Text} from 'native-base';
import React from 'react';
import {ImageBackground} from 'react-native';

const CardPromo = () => {
  return (
    <Box background={'#FFF'} borderRadius={20} mx={8} maxWidth={350}>
      <HStack height={100}>
        <Stack p={4}>
          <Text fontFamily={'Raleway'}>Summer Sale</Text>
          <Text fontWeight={500} fontSize={30} color="#674DC5">
            15% OFF
          </Text>
        </Stack>

        <AspectRatio ratio={16 / 9}>
          <ImageBackground
            source={require('../../assets/images/sneakers4.png')}
          />
        </AspectRatio>
      </HStack>
    </Box>
  );
};

export default CardPromo;
