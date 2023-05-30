import {
  HStack,
  Box,
  Divider,
  Heading,
  Input,
  Icon,
  SearchIcon,
  HamburgerIcon,
} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';

export const SearchBar = () => {
  return (
    <HStack space={4} px={8} pt={2}>
      <Input
        placeholder="Looking for something?"
        bg="#FFF"
        w="80%"
        borderRadius="10"
        px="2"
        InputLeftElement={
          <Box pl={3}>
            <SearchIcon />
          </Box>
        }
      />

      <TouchableOpacity>
        <Box bg="#0D6EFD" p={4} borderRadius={50}>
          <HamburgerIcon color="#FFF" />
        </Box>
      </TouchableOpacity>
    </HStack>
  );
};
