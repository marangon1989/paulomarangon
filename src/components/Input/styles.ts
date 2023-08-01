import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { scale, verticalScale } from 'react-native-size-matters';

interface CustomInputContainerProps {
  isFocused: boolean;
  isError: boolean;
}

interface CustomInputIconProps {
  isFocused: boolean;
  isError: boolean;
}

export const CustomInputContainer = styled.View<CustomInputContainerProps>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 0 ${scale(16)}px;
  border-width: 1px;
  border-color: ${({ isFocused, isError, theme }) =>
    isError ? theme.colors.red_dark : isFocused ? theme.colors.blue : '#E5E7EB'};
  margin-bottom: ${scale(8)}px;
  box-shadow: 0 4px 6px ${({ theme }) => theme.colors.rgba_one};
`;

export const CustomInputIcon = styled(Feather)<CustomInputIconProps>`
  margin-right: ${scale(16)}px;
  color: ${({ isFocused, isError, theme }) =>
    isError ? theme.colors.red_dark : isFocused ? theme.colors.blue : theme.colors.gray_100};
    font-size: ${RFValue(18)}px;
`;

export const CustomInputContent = styled(TextInput)`
  flex: 1;
  color: ${({ theme }) => theme.colors.gray_700};
  font-size: ${RFValue(14)}px;
  min-height: ${verticalScale(46)}px;
  max-height: ${verticalScale(46)}px;
  font-family: ${({ theme }) =>  theme.font_family.roboto_400};
`;

export const ErrorContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: ${scale(16)}px;
  margin-left: ${scale(8)}px;
`;

export const ErrorMessage = styled.Text`
  color: ${({ theme }) => theme.colors.red_dark};
`;

export const ErrorIcon = styled(Feather)`
  color: ${({ theme }) => theme.colors.red_dark};
  margin-right: ${scale(8)}px;
`;
