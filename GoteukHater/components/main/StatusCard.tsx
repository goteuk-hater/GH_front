import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  ViewStyle,
  StyleProp,
} from 'react-native';
import Card from '../globalcomponents/Card';
import Calendar from 'react-native-vector-icons/Feather';
import Clock from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {height, scale, width} from '../../config/globalStyles';
interface StatusProps {
  title: string;
  date: {
    year: number;
    month: string;
    day: number;
    time: string;
  };
  classification: number;
  detail?: boolean;
  style?: StyleProp<ViewStyle>;
  location?: string;
}
const StatusCard: React.FunctionComponent<StatusProps> = props => {
  let boxcolor, classtext;
  if (props.classification === 1) {
    boxcolor = styles.west;
    classtext = '서양';
  } else if (props.classification === 2) {
    boxcolor = styles.east;
    classtext = '동양';
  } else if (props.classification === 3) {
    boxcolor = styles.science;
    classtext = '과학사';
  } else {
    boxcolor = styles.eastwest;
    classtext = '동서양';
  }
  return (
    <Card
      style={[props.style, styles.card]}
      children={
        <View style={styles.container}>
          <View style={[styles.row, {marginBottom: 12 * height}]}>
            <View style={[styles.classbox, boxcolor]}>
              <Text style={styles.classtext}>{classtext}</Text>
            </View>
            {props.detail ? (
              <TouchableOpacity>
                <Text style={styles.btntext}>예약 취소</Text>
              </TouchableOpacity>
            ) : (
              <View></View>
            )}
          </View>
          <Text style={styles.title}>{props.title}</Text>
          <View style={styles.row}>
            <View style={styles.datebox}>
              <Calendar name="calendar" size={14 * scale} color="#B1B3C5" />
              <Text style={[{marginRight: 4 * width}, styles.timetext]}>
                {props.date.month} {props.date.day}th, {props.date.year}
              </Text>
              <Clock name="schedule" size={14 * scale} color="#B1B3C5" />
              <Text style={styles.timetext}>{props.date.time}</Text>
            </View>
            {props.detail ? (
              <Text style={styles.detailtext}>광개토관 108B호</Text>
            ) : (
              <View></View>
            )}
          </View>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  card: {
    height: 110 * height,
    minWidth: 220 * width,
  },
  container: {
    justifyContent: 'center',
  },
  classbox: {
    alignSelf: 'flex-start',
    paddingRight: 8 * width,
    paddingLeft: 8 * width,
    paddingTop: 4 * height,
    paddingBottom: 4 * height,
    borderRadius: 10 * scale,
  },
  classtext: {
    color: 'white',
    fontSize: 12 * scale,
    fontWeight: 'bold',
  },
  west: {
    backgroundColor: '#FFAA70',
  },
  east: {
    backgroundColor: '#59ADF6',
  },
  eastwest: {
    backgroundColor: '#3ABD91',
  },
  science: {
    backgroundColor: '#C780E8',
  },
  title: {
    fontSize: 14 * scale,
    fontWeight: '600',
    marginBottom: 12 * height,
  },
  datebox: {
    backgroundColor: 'rgba(228, 235, 253, 1)',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10 * height,
    paddingLeft: 8 * width,
    paddingRight: 8 * width,
    paddingTop: 6 * height,
    paddingBottom: 6 * height,
  },
  timetext: {
    color: '#646570',
    marginLeft: 4 * width,
    fontWeight: '700',
    fontSize: 10 * scale,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btntext: {
    fontSize: 10 * scale,
    fontWeight: '700',
  },
  detailtext: {
    fontSize: 12 * scale,
    fontWeight: '400',
    color: '#818181',
  },
});
export default StatusCard;
