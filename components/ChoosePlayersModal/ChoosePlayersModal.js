import React, { useContext } from "react";
import globalStyles from "../../constants/globalStyles";

// context
import AppStore from "../../contexts/GlobalContext";

// components
import Button from "../Button/Button";

// sc
import {
  ChoosePlayerModalView,
  ChoosePlayerModalBtnHolder,
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

  const { clWhite, clPrimary } = globalStyles;

  return (
    <ChoosePlayerModalView
      visible={playersModal}
      animationType="slide"
      presentationStyle="fullScreen"
    >
      <ChoosePlayerModalBtnHolder>
        <ChoosePlayerModalBtnWrap>
          <Button
            bgc={clPrimary}
            txc={clWhite}
            title={"Two Players"}
            action={() => {
              setPlayersTwo();
              closePlayersModal();
            }}
          />
        </ChoosePlayerModalBtnWrap>
        <ChoosePlayerModalBtnWrap>
          <Button
            bgc={clPrimary}
            txc={clWhite}
            title={"Three Players"}
            action={() => {
              setPlayersThree();
              closePlayersModal();
            }}
          />
        </ChoosePlayerModalBtnWrap>
        <ChoosePlayerModalBtnWrap>
          <Button
            bgc={clPrimary}
            txc={clWhite}
            title={"Four Players"}
            action={() => {
              setPlayersFour();
              closePlayersModal();
            }}
          />
        </ChoosePlayerModalBtnWrap>
        <ChoosePlayerModalBtnWrap>
          <Button
            bgc={clPrimary}
            txc={clWhite}
            title={"Five Players"}
            action={() => {
              setPlayersFive();
              closePlayersModal();
            }}
          />
        </ChoosePlayerModalBtnWrap>
      </ChoosePlayerModalBtnHolder>
    </ChoosePlayerModalView>
  );
};

export default ChoosePlayersModal;
