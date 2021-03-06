import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

const { clShadow } = globalStyles;

export const DiceView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  shadow-color: ${clShadow};
  shadow-offset: 2px;
  shadow-opacity: 0.8;
  shadow-radius: 3px;
  elevation: 5;
`;

export const DiceText = styled.Text``;
