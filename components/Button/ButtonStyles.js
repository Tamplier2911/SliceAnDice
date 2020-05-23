import styled from "styled-components/native";

const getBgColor = ({ bgc }) =>
  bgc ? `background-color: ${bgc};` : `background-color: #333;`;

const getTextolor = ({ txc }) => (txc ? `color: ${txc};` : `color: #fff;`);

export const ButtonElement = styled.TouchableOpacity`
  ${getBgColor}
  padding: 12px;
  border-radius: 4px;
`;

export const ButtonTextWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  ${getTextolor}
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 600;
`;
