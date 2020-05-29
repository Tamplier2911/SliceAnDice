import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

const { clBlack } = globalStyles;

export const ChoosePlayerViewMain = styled.View``;

export const ChoosePlayerImageView = styled.View`
  height: 30%;
`;

export const ChoosePlayerImage = styled.Image`
  flex: 1;
  width: undefined;
  height: undefined;
  resize-mode: cover;
`;

export const ChoosePlayerBtnView = styled.View`
  justify-content: center;
  padding: 10px;
  background-color: ${clBlack};
`;

export const ChoosePlayerBtnWrap = styled.View`
  margin-bottom: 15px;
`;
