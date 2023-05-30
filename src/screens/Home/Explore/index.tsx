import {Box, Center, ScrollView, Text, HStack, Heading} from 'native-base';
import React from 'react';
import CardShoe from 'src/components/CardShoe';
import {SearchBar} from 'src/components/SearchBar';

const Explore = () => {
  return (
    <ScrollView style={{marginTop: 60}}>
      <Heading textAlign="center">Explore</Heading>
      <Center my={2}>
        <SearchBar />
      </Center>
      <TitleCategory title="Popular shoes" />
      <ScrollView horizontal mx={8} showsHorizontalScrollIndicator={false}>
        <HStack space={2}>
          {[1, 2, 3, 4,5,6].map(item => (
            <CardShoe key={item} />
          ))}
        </HStack>
      </ScrollView>
      <TitleCategory title="New arrivals" />
      <ScrollView horizontal mx={8} showsHorizontalScrollIndicator={false}>
        <HStack space={2}>
          {[1, 2, 3, 4,5,6].map(item => (
            <CardShoe key={item} />
          ))}
        </HStack>
      </ScrollView>
    </ScrollView>
  );
};

const TitleCategory = ({title}: {title: string}) => {
  return (
    <Box
      display={'flex'}
      flexDirection="row"
      mx={8}
      mt={4}
      justifyContent="space-between">
      <Text fontSize={16} mb={2}>
        {title}
      </Text>
      <Text>Ver mas</Text>
    </Box>
  );
};
export default Explore;
