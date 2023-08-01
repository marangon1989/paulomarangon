import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #3D713C;
  border-radius: 10px;
  margin-top: 8px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ButtonText = styled.Text`
  flex: 1;
  color: #fff;
  font-size: 18px;
  text-align: center;
`;
