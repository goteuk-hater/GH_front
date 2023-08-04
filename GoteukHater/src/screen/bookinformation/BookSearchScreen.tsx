import React, {type PropsWithChildren} from 'react';
import {View, Text, TextInput, StyleSheet, Image, Button} from 'react-native';
import LinbkedBookCard from '../../components/booksearch/LinkedBookCard';
import {NavigationProp, NavigationState} from '@react-navigation/native';
import {Dimensions} from 'react-native';
import {ScreenStackHeaderSubview} from 'react-native-screens';
import {height} from '../../../config/globalStyles';
import {SafeAreaView} from 'react-native';
import Formbtn from '../../components/Modal/Formbtn';
import {StackActions} from '@react-navigation/native';

interface propsType {
  navigation: NavigationProp<NavigationState>;
}

const BookSearchScreen: React.FC<propsType> = props => {
  const [text, onChangeText] = React.useState('');
  const popAction = StackActions.pop(1);
  const back = () => {
    props.navigation.dispatch(popAction);
  };
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 12 * height,
              backgroundColor: '#FFFFFF',
              borderRadius: 15,
              width: 358,
            }}>
            <View
              style={{
                width: 10,
                height: 10,
                backgroundColor: 'black',
                marginLeft: 12,
                marginRight: 8,
              }}
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder="검색어를 입력해 주세요."
            />
            <View
              style={{
                width: 10,
                height: 10,
                backgroundColor: 'black',
                marginRight: 12,
              }}
            />
          </View>
          <View style={styles.catalogList}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.catalog}>영역</Text>
              <View style={{width: 13, height: 13, backgroundColor: 'black'}} />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.catalog}>최신순</Text>
              <View style={{width: 13, height: 13, backgroundColor: 'black'}} />
            </View>
          </View>
          <View style={styles.bookCard}>
            <LinbkedBookCard navigation={props.navigation} />
            <LinbkedBookCard navigation={props.navigation} />
          </View>
        </View>
      </SafeAreaView>
      <Formbtn />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 12,
    paddingRight: 16,
    paddingLeft: 16,
  },
  catalogList: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 8,
  },
  catalog: {
    // fontFamily: 'SUITVariable-Regular',
    color: 'black',
    fontSize: 14,
    marginRight: 4,
  },
  input: {
    fontFamily: 'SUITVariable-Regular',
    height: 40 * height,
    paddingTop: 10,
    paddingBottom: 10,
    marginRight: 8,
    color: '#818181',
    borderRadius: 15,
    width: 300,
  },
  bookCard: {
    width: '100%',
    ellipsizeMode: 'tail',
    flexShrink: 1,
  },
});

export default BookSearchScreen;
