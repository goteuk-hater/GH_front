import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {NavigationProp, NavigationState} from '@react-navigation/native';

export type MainStackParamList = {
  Main: {
    navigation: NavigationProp<NavigationState>;
    bottomSheetModalRef: React.RefObject<BottomSheetModal>;
  };
  BookingListScreen: undefined;
  BookInfoScreen: {
    book: {
      title: string;
      author: string;
      publisher: string;
      type: string;
      image: string;
    };

    navigate: (screen: string) => void;
  };
  BookSearchScreen: undefined;
  ExamMainScreen: undefined;
  BtnScreen: undefined;
  ReservationHome: undefined;
};

export type BookInfoScreenNavigationOptions = {
  title: string;
};
export type BtnParamList = {
  ReservationHome: undefined;
  ReservationDetail: {
    route: {
      params: {
        date: string;
        time: string;
      };
    };
  };
};
