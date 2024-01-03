import styled from '@emotion/native';
import {StyleProp, View, ViewStyle} from 'react-native';

export interface FlexViewProps {
  children: React.ReactNode;
  gapHorizental?: number;
  gapVertical?: number;
  style?: StyleProp<ViewStyle>;
}

export const FlexViewStyled = styled.View<FlexViewProps>`
  display: flex;
  margin: ${props =>
    `-${(props.gapVertical || 0) / 2}px -${(props.gapHorizental || 0) / 2}px`};
`;

const FlexView = (props: FlexViewProps) => {
  return (
    <FlexViewStyled {...props} style={props.style || {}}>
      {Object.values(props.children || {})?.map((item, idx) => (
        <View
          key={idx}
          style={{
            marginTop: (props.gapVertical || 0) / 2,
            marginBottom: (props.gapVertical || 0) / 2,
            marginRight: (props.gapHorizental || 0) / 2,
            marginLeft: (props.gapHorizental || 0) / 2,
          }}>
          {item}
        </View>
      ))}
    </FlexViewStyled>
  );
};

export default FlexView;
