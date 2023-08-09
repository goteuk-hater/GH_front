import {useState} from 'react';
import {Button, View} from 'react-native';
import {Text} from 'react-native-svg';
import {useDispatch, useSelector} from 'react-redux';
import StyledText from '../components/globalcomponents/StyledText';
import {decrement, increment, selectCount} from './reducer/counterSlice';

interface Counter {
  value: number;
}
const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  // const [incrementAmout, setIncrementAmout] = useState<number>(2);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="+" onPress={() => dispatch(increment())} />
      <StyledText>{count}</StyledText>
      <Button title="-" onPress={() => dispatch(decrement())} />
    </View>
  );
};
export default Counter;
