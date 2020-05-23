import styled from "styled-components/native";

const getBgColor = ({ bgc }) =>
  bgc ? `background-color: ${bgc};` : `background-color: transparent;`;

export const HeaderView = styled.View`
  ${getBgColor}
  height: 10%;
`;

export const HeaderTextView = styled.View`
  margin-right: auto;
`;

export const HeaderText = styled.Text`
  font-size: 30px;
  color: #fff;
`;

export const HeaderContentView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
`;

export const HeaderLogoView = styled.View``;
