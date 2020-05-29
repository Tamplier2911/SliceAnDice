import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

const { clPrimary, fontStyle } = globalStyles;

const getBottomDirection = ({ row }) =>
  row === 1
    ? `flex-direction: column; justify-content: flex-start;`
    : `flex-direction: row; justify-content: space-between;`;

const getButtonWidth = ({ row }) =>
  row === 1 ? `width: 100%;` : `width: 48%;`;

const getRespectiveHeight = ({ orientation }) =>
  orientation === "landscape" ? `height: 26%;` : `height: 16%;`;

const getRespectiveFontSize = ({ orientation }) =>
  orientation === "landscape" ? `font-size: 18px;` : ` font-size: 24px;`;

export const GameScreenView = styled.View`
  flex: 1;
`;

// top
export const GameScreenViewTop = styled.View`
  flex: 1;
  padding: 10px;
`;

export const GameScreenMetaView = styled.View`
  height: 20%;
`;

export const GameScreenPlayerView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const GameScreenPlayerText = styled.Text`
  ${getRespectiveFontSize}
  color: ${clPrimary};
  font-family: ${fontStyle};
`;

export const GameScreenScoreView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const GameScreenScoreTextView = styled.View``;

export const GameScreenScoreText = styled.Text`
  font-size: 18px;
  color: ${clPrimary};
  font-family: ${fontStyle};
`;

export const GameScreenDiceView = styled.View`
  flex: 1;
`;

// bot
export const GameScreenViewBot = styled.View`
  ${getBottomDirection}
  ${getRespectiveHeight}
  padding: 10px;
`;

export const GameScreenButtonWrap = styled.View`
  ${getButtonWidth}
`;
