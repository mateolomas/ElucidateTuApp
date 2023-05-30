import {VStack, Box, Divider, Heading, Input, Icon} from 'native-base';
import React from 'react';

export const SearchBar = () => {
  return (
    
      <VStack w="100%" space={5} alignSelf="center" px={8} pt={2}>
        
        <Input
          placeholder="Search"
          variant="filled"
          width="100%"
          borderRadius="10"
          py="1"
          px="2"
          /* InputLeftElement={
            <Icon
              ml="2"
              size="4"
              color="gray.400"
              as={<Ionicons name="ios-search" />}
            />
          } */
        />
      </VStack>
    
  );
};
