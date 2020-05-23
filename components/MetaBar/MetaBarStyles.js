import styled from "styled-components/native";

const getBgColor = ({ bgc }) =>
  bgc ? `background-color: ${bgc};` : `background-color: transparent;`;

export const MetaBarHolder = styled.View`
  ${getBgColor}
  height: 4%;
`;
