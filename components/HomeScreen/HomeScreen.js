import React, { useContext } from "react";
import globalStyles from "../../constants/globalStyles";

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

const HomeScreen = ({ dimensions }) => {
  const { openPlayersModal } = useContext(AppStore);
  const { clWhite, clPrimary } = globalStyles;
  const { orientation, width } = dimensions;
  return (
    <HomeScreenView>
      <HomeScreenViewTop>
        <HomeScreenLogoWrap>
          <MaterialCommunityIcons
            name="dice-multiple"
            size={orientation === "landscape" ? width * 0.3 : width * 0.7}
            color={clPrimary}
          />
        </HomeScreenLogoWrap>
      </HomeScreenViewTop>
      <HomeScreenViewBot orientation={orientation}>
        <Button
          bgc={clPrimary}
          txc={clWhite}
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
