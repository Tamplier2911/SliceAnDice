import styled from "styled-components/native";
import globalStyles from "../../constants/globalStyles";

const { clShadow } = globalStyles;

const getRespectiveHeight = ({ orientation }) =>
  orientation === "landscape" ? `height: 25%;` : `height: 18%;`;

export const HomeScreenView = styled.View`
  flex: 1;
`;

export const HomeScreenViewTop = styled.View`
  flex: 1;
  padding: 10px;
`;

export const HomeScreenLogoWrap = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  shadow-color: ${clShadow};
  shadow-offset: 2px;
  shadow-opacity: 0.8;
  shadow-radius: 3px;
  elevation: 5;
`;

export const HomeScreenViewBot = styled.View`
  ${getRespectiveHeight}
  padding: 10px;
  justify-content: center;
`;
