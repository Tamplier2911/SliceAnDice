import React, { useContext } from "react";
import globalStyles from "../../constants/globalStyles";

// context
import AppStore from "../../contexts/GlobalContext";

// components
import Button from "../Button/Button";

// sc
import {
  ChoosePlayerViewMain,
  ChoosePlayerImageView,
  ChoosePlayerImage,
  ChoosePlayerBtnView,
  ChoosePlayerBtnWrap,
} from "./ChoosePLayerViewStyles";

const ChoosePlayerView = () => {
  const {
    closePlayersModal,
    setPlayersTwo,
    setPlayersThree,
    setPlayersFour,
    setPlayersFive,
  } = useContext(AppStore);

  const { clWhite, clBlack } = globalStyles;

  return (
    <ChoosePlayerViewMain>
      <ChoosePlayerImageView>
        <ChoosePlayerImage
          source={require("../../assets/images/dice.jpg")}
          // source={{ uri: "https://bit.ly/2yxbczo" }}
        />
      </ChoosePlayerImageView>
      <ChoosePlayerBtnView>
        <ChoosePlayerBtnWrap>
          <Button
            bgc={clWhite}
            txc={clBlack}
            title={"Two Players"}
            action={() => {
              setPlayersTwo();
              closePlayersModal();
            }}
          />
        </ChoosePlayerBtnWrap>
        <ChoosePlayerBtnWrap>
          <Button
            bgc={clWhite}
            txc={clBlack}
            title={"Three Players"}
            action={() => {
              setPlayersThree();
              closePlayersModal();
            }}
          />
        </ChoosePlayerBtnWrap>
        <ChoosePlayerBtnWrap>
          <Button
            bgc={clWhite}
            txc={clBlack}
            title={"Four Players"}
            action={() => {
              setPlayersFour();
              closePlayersModal();
            }}
          />
        </ChoosePlayerBtnWrap>
        <ChoosePlayerBtnWrap>
          <Button
            bgc={clWhite}
            txc={clBlack}
            title={"Five Players"}
            action={() => {
              setPlayersFive();
              closePlayersModal();
            }}
          />
        </ChoosePlayerBtnWrap>
      </ChoosePlayerBtnView>
    </ChoosePlayerViewMain>
  );
};

export default ChoosePlayerView;
