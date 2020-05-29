import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

const { clPrimary, clPrimeShadow, fontStyle, clShadow } = globalStyles;

const getRespectiveFontSize = ({ orientation }) =>
  orientation === "landscape" ? `font-size: 20px;` : `font-size: 30px;`;

const getRespectivePadding = ({ orientation }) =>
  orientation === "landscape" ? `padding: 10px;` : `padding: 20px;`;

const getRespectiveTopHeight = ({ orientation }) =>
  orientation === "landscape" ? `height: 10%;` : `height: 15%;`;

const getRespectiveMidHeight = ({ orientation }) =>
  orientation === "landscape" ? `height: 35%;` : `height: 45%;`;

const getRespectiveBotght = ({ orientation }) =>
  orientation === "landscape" ? `height: 27%;` : `height: 24%;`;

const getRespectiveCtnHeight = ({ orientation }) =>
  orientation === "landscape" ? `height: 28%;` : `height: 16%;`;

export const WinnerViewComponent = styled.View`
  flex: 1;
`;

export const WinnerViewView = styled.View`
  ${getRespectivePadding}
  flex: 1;
`;

// TOP
export const WinnerViewTopView = styled.View`
  ${getRespectiveTopHeight}
`;

export const WinnerViewWinnerView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const WinnerViewWinnerText = styled.Text`
${getRespectiveFontSize}
  font-family: ${fontStyle};
  color: ${clPrimary};
`;

// MID
export const WinnerViewMidView = styled.View`
  ${getRespectiveMidHeight}
`;

export const WinnerViewIconView = styled.View`
  height: 65%;
  align-items: center;
  justify-content: center;
  shadow-color: ${clShadow};
  shadow-offset: 2px;
  shadow-opacity: 0.8;
  shadow-radius: 3px;
  elevation: 5;
`;

export const WinnerViewIconScoreView = styled.View`
  height: 35%;
  align-items: center;
  justify-content: center;
`;

export const WinnerViewIconScoreText = styled.Text`
${getRespectiveFontSize}
  font-family: ${fontStyle};
  color: ${clPrimary};
`;

// BOT
export const WinnerViewBotView = styled.ScrollView`
  ${getRespectiveBotght}
  border-radius: 10px;
  background-color: ${clPrimeShadow};
`;

export const WinnerViewScoreListView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const WinnerViewScoreListWrap = styled.View`
  flex-direction: row;
`;

export const WinnerViewScoreListLeftView = styled.View`
  flex: 1;
  margin-right: auto;
`;

export const WinnerViewScoreListRightView = styled.View``;

export const WinnerViewScoreListText = styled.Text`
${getRespectiveFontSize}
  font-family: ${fontStyle};
  color: ${clPrimary};
`;

// CONTROLS
export const WinnerViewControlls = styled.View`
  ${getRespectiveCtnHeight}
`;

export const WinnerViewButtonView = styled.View`
  flex: 1;
  justify-content: flex-end;
  margin-bottom: 10px;
`;
