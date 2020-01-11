import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';

//https://www.npmjs.com/package/react-native-anchor-carousel de aca sale la documentacion

const { width } = Dimensions.get('window');

class ImageCarousel extends Component {

  renderItem = ({ item, index }) => {
    const { uri, title, content } = item;
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
          this.numberCarousel.scrollToIndex(index);
        }}
      >
        <ImageBackground
          source={{ uri: uri }}
          style={styles.imageBackground}
        >
          
        </ImageBackground>
        
      </TouchableOpacity>
    );
  };

  render() {
      const album = this.props.album;
      const data = album.map((url) =>{
        return {uri: url}
    });
    return (
      <Carousel
        style={styles.carousel}
        data={data}
        renderItem={this.renderItem}
        itemWidth={0.75 * width}
        separatorWidth={0}
        inActiveOpacity={0.3}
        containerWidth={width - 5}
        ref={(c) => {
          this.numberCarousel = c;
        }}
      />
    );
  }
}

export default ImageCarousel;

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  item: {
    //borderWidth: 2,
    backgroundColor: 'white',
    flex: 1,
    //borderRadius: 3,
   // borderColor: '#6DCAF2',
    elevation: 3
  },
  imageBackground: {
    flex: 2,
    backgroundColor: '#EBEBEB',
    borderWidth: 0.5,
    borderColor: 'black'
  }
});
