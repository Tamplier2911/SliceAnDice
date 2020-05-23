import React, { useContext } from "react";

// context
import AppStore from "../../contexts/GlobalContext";

// rnicons
import { MaterialCommunityIcons } from "@expo/vector-icons";

// components
import Button from "../Button/Button";

// sc
import {
  HomeScreenView,
  HomeScreenViewTop,
  HomeScreenLogoWrap,
  HomeScreenViewBot,
} from "./HomeScreenStyles";

const HomeScreen = () => {
  const { openPlayersModal } = useContext(AppStore);
  return (
    <HomeScreenView>
      <HomeScreenViewTop>
        <HomeScreenLogoWrap>
          <MaterialCommunityIcons
            name="dice-multiple"
            size={200}
            color="#006eff"
          />
        </HomeScreenLogoWrap>
      </HomeScreenViewTop>
      <HomeScreenViewBot>
        <Button
          bgc={"#006eff"}
          txc={"#fff"}
          title={"Let's Roll!"}
          action={() => {
            openPlayersModal();
          }}
        />
      </HomeScreenViewBot>
    </HomeScreenView>
  );
};

export default HomeScreen;
