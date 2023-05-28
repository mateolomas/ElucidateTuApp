import {Center, ScrollView, Text, VStack} from 'native-base';
import React from 'react';
import CardShoe from 'src/components/CardShoe';
import {SearchBar} from 'src/components/SearchBar';

const Explore = () => {
  return (
    <ScrollView style={{marginTop: 80}}>
      <Center >
        <Text>Explore</Text>
        <SearchBar />
        <VStack space={2}>
        {
          [1, 2, 3, 4, 5, 6, 7, 8].map((item) => <CardShoe key={item} />)
        }
        </VStack>
        
      </Center>
    </ScrollView>
  );
};

export default Explore;
