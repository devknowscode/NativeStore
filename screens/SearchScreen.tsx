import React, {useState} from 'react';
import {Divider, ScrollView, Text, VStack} from 'native-base';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import ProductCard from '../components/ui/ProductCard';

class Screen {
  Finding = () => {
    const [recentSearching, setRecentSearching] = useState([
      'abc',
      'xyz',
      'jkl',
    ]);

    /**
     * Clear history searching
     */
    const onClearHistorySearching = () => {
      setRecentSearching([]);
    };

    return (
      <VStack space={4} height="full" padding={2} backgroundColor="#fff">
        <Header.Search />

        {/** List recent searching and button clear all */}
        <VStack space={5} paddingX={5}>
          {recentSearching.length > 0 &&
            recentSearching.map((item, index) => (
              <Text key={item + index}>{item}</Text>
            ))}
          {recentSearching.length > 0 && (
            <Text color="#3665f3" bold onPress={onClearHistorySearching}>
              Clear All
            </Text>
          )}
        </VStack>
      </VStack>
    );
  };

  Resulting = () => {
    return (
      <VStack space={4} height="full" padding={2} backgroundColor="#fff">
        <Header.Search />

        {/** List product by `gallery` view */}
        {/* <ScrollView>
          <SubHeader.Search />
          <VStack space={5}>
            <HStack space={3}>
              <ProductCard.Gallery />
              <ProductCard.Gallery />
            </HStack>
            <Divider />
            <HStack space={3}>
              <ProductCard.Gallery />
              <ProductCard.Gallery />
            </HStack>
            <Divider />
            <HStack space={3}>
              <ProductCard.Gallery />
              <ProductCard.Gallery />
            </HStack>
          </VStack>
        </ScrollView> */}

        {/** List product by `list` view */}
        <ScrollView>
          <SubHeader.Search />
          <VStack space={3}>
            <ProductCard.List />
            <Divider />
            <ProductCard.List />
            <Divider />
            <ProductCard.List />
            <Divider />
            <ProductCard.List />
            <Divider />
            <ProductCard.List />
            <Divider />
            <ProductCard.List />
            <Divider />
          </VStack>
        </ScrollView>
      </VStack>
    );
  };
}

export default new Screen();
