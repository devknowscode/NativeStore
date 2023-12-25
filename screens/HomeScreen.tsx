import {ScrollView, VStack} from 'native-base';
import React from 'react';
import Header from '../components/Header';
import Subheader from '../components/SubHeader';
import Banner from '../components/ui/Banner';
import Category from '../components/Category';
import ProductView from '../components/ProductView';

const HomeScreen = () => {
  return (
    <VStack space={4} height="full" padding={2} backgroundColor="#fff">
      <Header.Home />
      <ScrollView>
        <VStack space={8}>
          <Subheader.Home />
          <VStack space={3}>
            <Banner
              variant="primary"
              colorText="#fff"
              backgroundBanner="#013147"
              colorButton="#042f3f"
              backgroundButton="#fff"
              headingText="Get local tire installation"
              descriptionText="Have your new set installed by our network of experts."
              buttonText="Shop top brands"
            />
            <Banner
              variant="primary"
              colorText="#055130"
              headingText="Up to 50% off fitness essentials"
              descriptionText="Go for your goals with eBay Refurbished finds, plus a warranty."
              colorButton="#8ddf94"
              buttonText="Shop now"
              backgroundButton="#07512c"
              backgroundBanner="#9df4a6"
            />
          </VStack>
          <Category.Carousel />
          <Banner
            variant="collectible"
            colorText="#592e13"
            headingText="Are you looking for timeless treasures?"
            descriptionText="Visit collectibles and follow your passion."
            colorButton="#fdcd27"
            buttonText="Collectibles for you"
            backgroundButton="#592e13"
            backgroundBanner="#f7e277"
          />
          <ProductView />
          <Category.Grid />
          <Banner
            variant="banner"
            colorText="#181818"
            headingText="Are you looking for timeless treasures?"
            descriptionText="Visit collectibles and follow your passion."
            colorButton="#f7f7f7"
            buttonText="Collectibles for you"
            backgroundButton="#181818"
            backgroundBanner="#f7f7f7"
          />
        </VStack>
      </ScrollView>
    </VStack>
  );
};

export default HomeScreen;
