import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

const { clBlack } = globalStyles;

export const ChoosePlayerModalView = styled.Modal``;

export const ChoosePlayerModalImageView = styled.View`
  height: 60%;
`;

export const ChoosePlayerModalImage = styled.Image`
  flex: 1;
  width: undefined;
  height: undefined;
  resize-mode: cover;
`;

export const ChoosePlayerModalBtnView = styled.View`
  flex: 1;
  justify-content: center;
  padding: 10px;
  background-color: ${clBlack};
`;

export const ChoosePlayerModalBtnWrap = styled.View`
  margin-bottom: 15px;
`;
