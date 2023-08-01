import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.colors.gray};
  margin-bottom: 8px;
  color: #0B0B0D;
`;
