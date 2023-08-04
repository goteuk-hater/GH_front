import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {NavigationProp, NavigationState} from '@react-navigation/native';

export type MainStackParamList = {
  Main: {
    navigation: NavigationProp<NavigationState>;
    bottomSheetModalRef: React.RefObject<BottomSheetModal>;
  };
  BookingListScreen: undefined;
  BookInfoScreen: {title: string};
  BookSearchScreen: undefined;
  ExamMainScreen: undefined;
  BtnScreen: undefined;
  ReservationHome: undefined;
};

export type BookInfoScreenNavigationOptions = {
  title: string;
};
