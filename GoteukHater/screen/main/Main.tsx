import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Modal,
  Text,
  Pressable,
  Button,
} from 'react-native';
import {NavigationProp, NavigationState} from '@react-navigation/native';

import Formbtn from '../../components/Modal/Formbtn';
import {globalstyles, height, scale, width} from '../../config/globalStyles';

import InformationSection from '../../components/main/information/InformationSection';
import StatusSection from '../../components/main/status/StatusSection';
import FlexView from '../../components/globalcomponents/FlexView';
import CertificationSection from '../../components/main/certification/CertificationSection';
import LinkSection from '../../components/main/Link/LinkSection';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Svg, SvgFromUri} from 'react-native-svg';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import ModalButton from '../../components/Modal/ModalButton';

interface Props {
  navigation: NavigationProp<NavigationState>;
}
const Main = ({navigation}: Props) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <FlexView style={styles.content} gapVertical={24 * height}>
          <InformationSection />
          <StatusSection navigation={navigation} />
          <CertificationSection />
          <LinkSection navigation={navigation} />
        </FlexView>
      </SafeAreaView>
      <Formbtn />
    </>
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
