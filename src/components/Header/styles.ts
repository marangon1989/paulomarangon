import styled from 'styled-components/native';

export const Container = styled.View`
  /* flex: 1; */
  width: 100%;
  padding: 42px 16px 24px;
  background-color: ${(props) => props.theme.colors.white};
  max-height: 96px;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.font_family.roboto_700};
  font-size: 16px;
`;
