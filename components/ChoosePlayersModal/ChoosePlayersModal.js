import React, { useContext } from "react";
import globalStyles from "../../constants/globalStyles";

// context
import AppStore from "../../contexts/GlobalContext";

// components
import Button from "../Button/Button";

// sc
import {
  ChoosePlayerModalView,
  ChoosePlayerModalImageView,
  ChoosePlayerModalImage,
  ChoosePlayerModalBtnView,
  ChoosePlayerModalBtnWrap,
} from "./ChoosePlayersModalStyles";

const ChoosePlayersModal = () => {
  const {
    playersModal,
    closePlayersModal,
    setPlayersTwo,
    setPlayersThree,
    setPlayersFour,
    setPlayersFive,
  } = useContext(AppStore);

  const { clWhite, clBlack } = globalStyles;

  return (
    <ChoosePlayerModalView
      visible={playersModal}
      animationType="slide"
      presentationStyle="fullScreen"
    >
      <ChoosePlayerModalImageView>
        <ChoosePlayerModalImage
          source={require("../../assets/images/dice.jpg")}
          // source={{ uri: "https://bit.ly/2yxbczo" }}
        />
      </ChoosePlayerModalImageView>
      <ChoosePlayerModalBtnView>
        <ChoosePlayerModalBtnWrap>
          <Button
            bgc={clWhite}
            txc={clBlack}
            title={"Two Players"}
            action={() => {
              setPlayersTwo();
              closePlayersModal();
            }}
          />
        </ChoosePlayerModalBtnWrap>
        <ChoosePlayerModalBtnWrap>
          <Button
            bgc={clWhite}
            txc={clBlack}
            title={"Three Players"}
            action={() => {
              setPlayersThree();
              closePlayersModal();
            }}
          />
        </ChoosePlayerModalBtnWrap>
        <ChoosePlayerModalBtnWrap>
          <Button
            bgc={clWhite}
            txc={clBlack}
            title={"Four Players"}
            action={() => {
              setPlayersFour();
              closePlayersModal();
            }}
          />
        </ChoosePlayerModalBtnWrap>
        <ChoosePlayerModalBtnWrap>
          <Button
            bgc={clWhite}
            txc={clBlack}
            title={"Five Players"}
            action={() => {
              setPlayersFive();
              closePlayersModal();
            }}
          />
        </ChoosePlayerModalBtnWrap>
      </ChoosePlayerModalBtnView>
    </ChoosePlayerModalView>
  );
};

export default ChoosePlayersModal;
