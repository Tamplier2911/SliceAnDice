import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

const { clWhite, clFont, fontStyle } = globalStyles;

const getBgColor = ({ bgc }) =>
  bgc ? `background-color: ${bgc};` : `background-color: ${clFont};`;

const getTextolor = ({ txc }) =>
  txc ? `color: ${txc};` : `color: ${clWhite};`;

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
  font-family: ${fontStyle};
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 600;
`;
