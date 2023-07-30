import styled from 'styled-components/native';
import { ScrollView } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 8px;
`;

export const StyledScrollView = styled(ScrollView)`
  flex: 1;
`;

export const InputContainer = styled.View`
  margin-bottom: 16px;
`;

export const ResultsContainer = styled.View`
  margin-top: 16px;
`;

export const ResultTitle = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};
`;

export const ResultText = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.colors.secondaryText};
`;
