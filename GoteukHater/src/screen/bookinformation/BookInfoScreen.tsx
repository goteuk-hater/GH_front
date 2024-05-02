import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import StyledText from '@/components/global/StyledText';
import {
  NavigationProp,
  NavigationState,
  useNavigation,
} from '@react-navigation/native';
import {globalStyle, height, scale, width} from '@/config/globalStyle';
import {Book} from '@/config/Type';

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
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{
          uri: book.image_url,
        }}
        style={{width: '100%', height: '100%'}}
        blurRadius={10}
        resizeMode="cover">
        <View style={styles.container}>
          <View style={styles.modalcontent}>
            <Image
              source={{
                uri: book.image_url,
              }}
              style={styles.img}
              resizeMode="cover"
            />
          </View>
          <View style={styles.modalbody}>
            <StyledText style={[globalStyle.p1, {color: 'gray'}]}>
              {book.category.category}
            </StyledText>
            <StyledText style={globalStyle.h2}>{book.title}</StyledText>
            <View
              style={[
                globalStyle.row,
                {
                  columnGap: 16 * width,
                },
              ]}>
              <StyledText style={globalStyle.h3}>{book.author}</StyledText>
              <StyledText style={globalStyle.p2}>{book.publisher}</StyledText>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 32 * height,
    justifyContent: 'space-between',
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
    backgroundColor: '#f6f6f9',
    height: 500 * height,
    rowGap: 12 * height,
    borderRadius: 16 * scale,
    padding: 32 * scale,
  },
});

export default BookInfoScreen;
