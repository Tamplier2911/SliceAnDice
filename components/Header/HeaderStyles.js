import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

const { clWhite, fontStyle } = globalStyles;

const getBgColor = ({ bgc }) =>
  bgc ? `background-color: ${bgc};` : `background-color: transparent;`;

export const HeaderView = styled.View`
  ${getBgColor}
  height: 10%;
`;

export const HeaderContentView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
`;

export const HeaderTextView = styled.View`
  margin-right: auto;
`;

export const HeaderText = styled.Text`
  font-size: 30px;
  color: ${clWhite};
  font-family: ${fontStyle};
`;

export const HeaderLogoView = styled.TouchableOpacity``;
