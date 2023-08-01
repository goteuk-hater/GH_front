import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';

const FIGMA_WINDOW_WIDTH = 390;
const FIGMA_WINDOW_HEIGHT = 844;
const FIGMA_SCALE = Math.sqrt(FIGMA_WINDOW_WIDTH * FIGMA_WINDOW_HEIGHT);
const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;
export const fonts = {};
export const width = WIDTH / FIGMA_WINDOW_WIDTH;
export const height = HEIGHT / FIGMA_WINDOW_HEIGHT;
export const scale = Math.sqrt(WIDTH * HEIGHT) / FIGMA_SCALE;
export const globalstyles = StyleSheet.create({
  h1: {
    fontSize: 18 * scale,
    fontWeight: '700',
  },
  h2: {
    fontSize: 16 * scale,
    fontWeight: '700',
  },
  h3: {
    fontSize: 14 * scale,
    fontWeight: '700',
  },
  h4: {
    fontSize: 12 * scale,
    fontWeight: '700',
  },
  h5: {
    fontSize: 10 * scale,
    fontWeight: '700',
  },
  p1: {
    fontSize: 12 * scale,
    fontWeight: '500',
  },
  p2: {
    fontSize: 10 * scale,
    fontWeight: '500',
  },
  content: {
    padding: 16 * scale,
  },
  conatiner: {
    padding: 12 * scale,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  row_spacebetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
