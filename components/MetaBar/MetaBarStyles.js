import styled from "styled-components/native";

const getBgColor = ({ bgc }) =>
  bgc ? `background-color: ${bgc};` : `background-color: transparent;`;

const getHeight = ({ height }) =>
  height ? `height: ${height}px;` : `height: 4%;`;

export const MetaBarHolder = styled.View`
  ${getBgColor}
  ${getHeight}
`;
