import {StyleSheet, TouchableOpacity, View} from 'react-native';
import StyledText from '../../components/globalcomponents/StyledText';
import InformationCard from '../../components/main/information/InformationCard';
import {globalstyles, height, width} from '../../../config/globalStyles';
import Card from '../../components/globalcomponents/Card';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../config/Type';

export const MypageScreen = () => {
  const navigation = useNavigation();
  const logout = async () => {
    await AsyncStorage.clear();
    //스택초기화
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'} as never],
    });
  };
  return (
    <View style={styles.container}>
      <InformationCard />
      <View style={styles.btnlist}>
        <TouchableOpacity>
          <Card style={{width: '100%'}}>
            <StyledText style={globalstyles.p1}>버그 신고하기</StyledText>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity>
          <Card style={{width: '100%'}}>
            <StyledText style={globalstyles.p1}>문의 하기</StyledText>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            logout();
          }}>
          <Card style={{width: '100%'}}>
            <StyledText style={[globalstyles.p1, {color: '#EB5828'}]}>
              로그아웃
            </StyledText>
          </Card>
        </TouchableOpacity>
      </View>
      <View style={{width: '100%'}}>
        <StyledText
          style={[globalstyles.p2, {textAlign: 'center', color: '#979799'}]}>
          기기에 있는 사용자의 데이터는 서버에 저장되지 않으며
        </StyledText>
        <StyledText
          style={[globalstyles.p2, {textAlign: 'center', color: '#979799'}]}>
          계정 삭제시 등록한정보가 모두 초기화됩니다.
        </StyledText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F6F9',
    flex: 1,
    padding: 16 * width,
    rowGap: 24 * height,
  },
  btnlist: {
    rowGap: 8 * height,
  },
});
