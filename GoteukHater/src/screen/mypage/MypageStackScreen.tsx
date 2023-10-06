import {createStackNavigator} from '@react-navigation/stack';
import {ReportScreen} from './ReportScreen';
import {InquiryTabScreen} from './InquiryTabScreen';
import {MypageStackParamList} from '../../../config/Type';
import {NavigationContainer} from '@react-navigation/native';
import StyledText from '../../components/globalcomponents/StyledText';
import {globalstyles, height} from '../../../config/globalStyles';
import Btn from '../../components/globalcomponents/Btn';
import {QAScreen} from './QAScreen';
import {InquiryScreen} from './InquiryScreen';

interface Props {
  routename: string;
}
export const MypageStackScreen = (props: Props) => {
  const MypageStack = createStackNavigator<MypageStackParamList>();
  return (
    <NavigationContainer independent={true}>
      <MypageStack.Navigator
        initialRouteName={props.routename}
        screenOptions={{
          headerStatusBarHeight: 0,
          headerStyle: {
            height: 44 * height,
            backgroundColor: '#F6F6F9',
            borderBottomWidth: 1,
            borderBottomColor: '#E5E5E8',
          },
          headerTitleAlign: 'center',
        }}>
        <MypageStack.Screen
          name="Report"
          component={ReportScreen}
          options={{
            headerTitle: () => (
              <StyledText style={globalstyles.h2}>버그 신고</StyledText>
            ),
          }}
        />
        <MypageStack.Screen
          name="Inquiry"
          component={InquiryScreen}
          options={{
            headerTitle: () => (
              <StyledText style={globalstyles.h2}>문의 하기</StyledText>
            ),
            headerRight: () => <Btn />,
          }}
        />
      </MypageStack.Navigator>
    </NavigationContainer>
  );
};
