import styled from "styled-components/native";

const getBottomDirection = ({ row }) =>
  row === 1
    ? `flex-direction: column; justify-content: flex-start;`
    : `flex-direction: row; justify-content: space-between;`;

const getButtonWidth = ({ row }) =>
  row === 1 ? `width: 100%;` : `width: 48%;`;

export const GameScreenView = styled.View`
  flex: 1;
`;

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
  font-size: 24px;
  color: #006eff;
`;

export const GameScreenScoreView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const GameScreenScoreTextView = styled.Text``;

export const GameScreenScoreText = styled.Text`
  font-size: 18px;
  color: #006eff;
`;

export const GameScreenDiceView = styled.View`
  flex: 1;
`;

export const GameScreenViewBot = styled.View`
  ${getBottomDirection}
  padding: 10px;
  height: 16%;
`;

export const GameScreenButtonWrap = styled.View`
  ${getButtonWidth}
`;
