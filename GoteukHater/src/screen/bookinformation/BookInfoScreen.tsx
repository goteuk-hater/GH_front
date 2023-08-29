import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import Card from '../../components/globalcomponents/Card';
import BookCard from '../../components/booksearch/BookCard';
import StyledText from '../../components/globalcomponents/StyledText';
import ClassBox from '../../components/globalcomponents/ClassBox';
import Formbtn from '../../components/Modal/Formbtn';
import {
  NavigationProp,
  NavigationState,
  useNavigation,
} from '@react-navigation/native';
import {globalstyles, height, scale, width} from '../../../config/globalStyles';
import {Book} from '../../../config/Type';

interface propsType {
  navigation: NavigationProp<NavigationState>;
  route: {
    params: Book;
  };
}
const BookInfoScreen = (props: propsType) => {
  const navigation = useNavigation();
  useEffect(() => {
    props.navigation.setOptions({
      title: props.route.params.title,
    });
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: '',
    });
  }, []);
  const book = props.route.params.book;
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://image.aladin.co.kr/product/8126/15/cover500/s432636514_1.jpg',
        }}
        style={{width: '100%', height: '100%'}}
        blurRadius={10}
        resizeMode="cover">
        <View style={styles.container}>
          <View style={styles.modalcontent}>
            <Image
              source={{
                uri: 'https://image.aladin.co.kr/product/8126/15/cover500/s432636514_1.jpg',
              }}
              style={styles.img}
              resizeMode="cover"
            />
          </View>
          <View style={styles.modalbody}>
            <StyledText style={[globalstyles.p1, {color: 'gray'}]}>
              {book.category.category}
            </StyledText>
            <StyledText style={globalstyles.h2}>{book.title}</StyledText>
            <View
              style={[
                globalstyles.row,
                {
                  columnGap: 16 * width,
                },
              ]}>
              <StyledText style={globalstyles.h3}>{book.author}</StyledText>
              <StyledText style={globalstyles.p2}>{book.publisher}</StyledText>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 32 * height,
    paddingVertical: 32 * height,
  },

  img: {
    height: 500 * height,
    width: 300 * width,
    borderWidth: 2 * scale,
    borderColor: '#E5E5E5',
  },
  modalcontent: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    rowGap: 16 * height,
    marginTop: 32 * height,
  },
  modalheader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  modalbody: {
    backgroundColor: '#F6F6F9',
    rowGap: 12 * height,
    height: 200 * height,
    borderRadius: 16 * scale,
    padding: 32 * scale,
  },
});

export default BookInfoScreen;
