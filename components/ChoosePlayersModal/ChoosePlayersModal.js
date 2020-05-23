import React, { useContext } from "react";

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

  return (
    <ChoosePlayerModalView
      visible={playersModal}
      animationType="slide"
      presentationStyle="fullScreen"
    >
      <ChoosePlayerModalBtnHolder>
        <ChoosePlayerModalBtnWrap>
          <Button
            bgc={"#006eff"}
            txc={"#fff"}
            title={"Two Players"}
            action={() => {
              setPlayersTwo();
              closePlayersModal();
            }}
          />
        </ChoosePlayerModalBtnWrap>
        <ChoosePlayerModalBtnWrap>
          <Button
            bgc={"#006eff"}
            txc={"#fff"}
            title={"Three Players"}
            action={() => {
              setPlayersThree();
              closePlayersModal();
            }}
          />
        </ChoosePlayerModalBtnWrap>
        <ChoosePlayerModalBtnWrap>
          <Button
            bgc={"#006eff"}
            txc={"#fff"}
            title={"Four Players"}
            action={() => {
              setPlayersFour();
              closePlayersModal();
            }}
          />
        </ChoosePlayerModalBtnWrap>
        <ChoosePlayerModalBtnWrap>
          <Button
            bgc={"#006eff"}
            txc={"#fff"}
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
