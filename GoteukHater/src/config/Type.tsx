import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {NavigationProp, NavigationState} from '@react-navigation/native';
export type RootStackParamList = {
  Login: undefined;
  SplashScreen: undefined;
  HomePage: undefined;
  Home: undefined;
};
export type MypageStackParamList = {
  Report: undefined;
  Inquiry: undefined;
};
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
  MypageScreen: undefined;
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
        id: string;
      };
    };
  };
};

export interface Category {
  id: number;
  category: string;
}

export interface Book {
  book_code: string;
  title: string;
  author: string;
  publisher: string;
  category: Category;
  id: number;
  image_url: string;
}

export interface Certification {
  [key: string]: string;
}

export interface UserInfo {
  id: string;
  password: string;
  grade: string;
  major: string;
  name: string;
  read_certification: Certification;
  status: string;
  loading: boolean;
}
export interface Tab {
  screen: string;
}
export interface BookReservation {
  book_name: string;
  date: string;
  reserve_id: string;
  time: string;
  classification: string;
  location: string;
}
export interface Status {
  date: string;
  time: string;
  location: string;
  book_name: string;
  reserve_id: string;
  classification: string;
}
