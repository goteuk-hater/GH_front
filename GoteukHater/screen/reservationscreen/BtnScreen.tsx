import {
  NavigationContainer,
  StackActions,
  useNavigation,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import React, {FC, type PropsWithChildren} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StyledText from '../../components/globalcomponents/StyledText';
import {scale, width} from '../../config/globalStyles';
import ReservationDetail from './ReservationDetail';
import ReservationHome from './ReservationHome';

type BtnParamList = {
  ReservationHome: undefined;
  ReservationDetail: undefined;
};
interface Propstype {
  close: () => void;
  routename: string;
}
const Stack = createStackNavigator<BtnParamList>();
const BtnScreen: React.FC<Propstype> = props => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator initialRouteName={props.routename as never}>
      <Stack.Group
        screenOptions={{
          headerStyle: {
            backgroundColor: '#F6F6F9',
            height: 50,
            borderBottomWidth: 1,
          },
          headerStatusBarHeight: 0,
        }}>
        <Stack.Screen
          name="ReservationHome"
          component={ReservationHome}
          options={{
            headerTitle: () => {
              return (
                <StyledText style={{fontSize: 18 * scale, fontWeight: '700'}}>
                  고전독서 예약
                </StyledText>
              );
            },
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => props.close()}
                style={styles.btnbox}>
                <Text>
                  <Ionicons
                    name={'chevron-back'}
                    size={24}
                    color="#007AFF"
                    style={{paddingTop: 4}}
                  />
                </Text>
                <StyledText style={styles.btntext}>취소</StyledText>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ReservationDetail' as never)
                }
                style={styles.btnbox}>
                <StyledText style={styles.btntext}>신청하기</StyledText>
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="ReservationDetail"
          component={ReservationDetail}
          options={{
            headerTitleAlign: 'center',
            headerTitle: () => {
              return (
                <StyledText style={{fontSize: 18 * scale, fontWeight: '700'}}>
                  고전독서 예약
                </StyledText>
              );
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('ReservationHome' as never)}
                style={styles.btnbox}>
                <Text>
                  <Ionicons
                    name={'chevron-back'}
                    size={24}
                    color="#007AFF"
                    style={{paddingTop: 4 * scale}}
                  />
                </Text>
                <StyledText style={styles.btntext}>취소</StyledText>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity style={styles.btnbox}>
                <StyledText style={styles.btntext}>신청하기</StyledText>
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({
  btntext: {
    fontSize: 16 * scale,
    fontWeight: '700',
    color: '#007AFF',
    marginRight: 8 * width,
  },
  btnbox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BtnScreen;
