import { StyleSheet, View, Dimensions, Image } from 'react-native';
import * as React from 'react';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { banner1, banner2, banner3 } from './assets/Images'

const newImage = [banner1, banner2, banner3];
const image = index => ({ image: newImage[index % newImage.length] });
const items = Array.from(Array(5)).map((_, index) => image(index));
const { width, height } = Dimensions.get('window');




export default function App() {
  return (
    <View style={styles.container}>
      <SwiperFlatList
        autoplay={false}
        autoplayDelay={2}
        autoplayLoop
        index={2}
        showPagination
        data={items}
        renderItem={({ item }) => (
          <View>
            <Image source={item.image} style={styles.carouselImage} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  carouselImage: {
    resizeMode: "contain",
    height: height * 0.5,
    width,
  }
});
