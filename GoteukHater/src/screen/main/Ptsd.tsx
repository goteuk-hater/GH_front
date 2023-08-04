import {useNavigation} from '@react-navigation/native';
import BtnScreen from '../reservationscreen/BtnScreen';
interface Props {
  close: () => void;
}
export const Ptsd = (props: Props) => {
  return (
    <>
      <BtnScreen close={props.close} />
    </>
  );
};
