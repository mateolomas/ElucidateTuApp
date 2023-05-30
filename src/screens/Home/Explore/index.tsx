import {Box, Center, ScrollView, Text, HStack, Heading} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import CardShoe from 'src/components/CardShoe';
import CardPromo from 'src/components/CardPromo';
import {SearchBar} from 'src/components/SearchBar';

const Explore = () => {
  const [selected, setSelected] = React.useState(0);
  return (
    <ScrollView style={{marginTop: 60, marginBottom: 40}}>
      <Heading textAlign="center">Explore</Heading>
      <Center my={2}>
        <SearchBar />
      </Center>
      <TitleCategory title="Select Categories" />
      <ScrollView horizontal mx={8} showsHorizontalScrollIndicator={false}>
        <HStack space={2}>
          {categories.map(item => (
            <CategoryCard
              key={item && item.id}
              isSelected={selected === item.id}
              onPress={() => setSelected(item.id)}
              title={item.title}
            />
          ))}
        </HStack>
      </ScrollView>
      <TitleCategory title="Popular shoes" />
      <ScrollView horizontal mx={8} showsHorizontalScrollIndicator={false}>
        <HStack space={2}>
          {[1, 2, 3, 4, 5, 6].map(item => (
            <CardShoe key={item} />
          ))}
        </HStack>
      </ScrollView>
      <TitleCategory title="New arrivals" />
      <HStack space={1}>
        <CardPromo />
      </HStack>
    </ScrollView>
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
      <Box
        borderRadius={10}
        width={100}
        height={10}
        bg={isSelected ? '#0D6EFD' : '#FFF'}
        shadow={1}
        my={2}
        justifyContent="center"
        alignItems="center">
        <Text fontWeight={400} color={isSelected ? '#FFF' : '#000'}>
          {title}
        </Text>
      </Box>
    </TouchableOpacity>
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
      <Text fontWeight={500} fontSize={12} color="#0D6EFD">
        Ver mas
      </Text>
    </Box>
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
