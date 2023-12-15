import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationProp, NavigationState} from '@react-navigation/native';
import {height, width} from '../../../config/globalStyles';
import InformationSection from '../../components/main/information/InformationSection';
import StatusSection from '../../components/main/status/StatusSection';
import CertificationSection from '../../components/main/certification/CertificationSection';
import LinkSection from '../../components/main/Link/LinkSection';
import {View} from 'react-native';

import {useDispatch} from 'react-redux';
import {asyncStatusFetch} from '../../store/slice/StatusSlice';
import {AppDispatch} from '../../store/store';

interface Props {
  navigation: NavigationProp<NavigationState>;
}

const Main = ({navigation}: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  dispatch(asyncStatusFetch());
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.content, {rowGap: 20 * height}]}>
        <InformationSection />
        <StatusSection />
        <CertificationSection />
        <LinkSection navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F6F9',
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16 * width,
    paddingTop: 8 * height,
    marginBottom: 100 * height,
  },
});
export default Main;
