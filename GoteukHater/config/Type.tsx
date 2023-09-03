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

export interface Category {
  id: number;
  category: string;
}

export interface Book {
  id: number;
  title: string;
  author: string;
  publisher: string;
  category: Category;
}

export interface Certification {
  [key: string]: string; // 여러 과목과 그에 따른 권수를 다룰 수 있도록 문자열 맵을 사용합니다.
}

export interface Student {
  grade: string;
  major: string;
  name: string;
  read_certification: Certification;
  status: string;
}
