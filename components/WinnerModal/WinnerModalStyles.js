import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

const { clPrimary, clPrimeShadow, fontStyle } = globalStyles;

export const WinnerModalComponent = styled.Modal``;

export const WinnerModalView = styled.View`
  flex: 1;
  padding: 20px;
`;

export const WinnerModalTopView = styled.View`
  height: 15%;
`;

export const WinnerModalWinnerView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const WinnerModalWinnerText = styled.Text`
  font-family: ${fontStyle};
  font-size: 30px;
  color: ${clPrimary};
`;

export const WinnerModalMidView = styled.View`
  height: 45%;
`;

export const WinnerModalIconView = styled.View`
  height: 65%;
  align-items: center;
  justify-content: center;
`;

export const WinnerModalIconScoreView = styled.View`
  height: 35%;
  align-items: center;
  justify-content: center;
`;

export const WinnerModalIconScoreText = styled.Text`
  font-family: ${fontStyle};
  font-size: 25px;
  color: ${clPrimary};
`;

export const WinnerModalBotView = styled.View`
  height: 24%;
  border-radius: 10px;
  background-color: ${clPrimeShadow};
`;

export const WinnerModalScoreListView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const WinnerModalScoreListWrap = styled.View`
  flex-direction: row;
`;

export const WinnerModalScoreListLeftView = styled.View`
  width: 60%;
`;

export const WinnerModalScoreListRightView = styled.View``;

export const WinnerModalScoreListText = styled.Text`
  font-family: ${fontStyle};
  font-size: 25px;
  color: ${clPrimary};
`;

export const WinnerModalControlls = styled.View`
  height: 16%;
`;

export const WinnerModalButtonView = styled.View`
  flex: 1;
  justify-content: flex-end;
  margin-bottom: 10px;
`;
