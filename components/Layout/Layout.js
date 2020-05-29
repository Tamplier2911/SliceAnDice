import React, { useContext, useEffect, useState } from "react";
import { Dimensions } from "react-native";
import globalStyles from "../../constants/globalStyles";

// context
import AppStore from "../../contexts/GlobalContext";

// components
import Header from "../Header/Header";
import MetaBar from "../MetaBar/MetaBar";

// screens
import ChoosePlayerModal from "../ChoosePlayersModal/ChoosePlayersModal";
import ChoosePlayerView from "../ChoosePlayerView/ChoosePLayerView";
import HomeScreen from "../HomeScreen/HomeScreen";
import GameScreen from "../GameScreen/GameScreen";

// cs
import { Container } from "./LayoutStyles";

const Layout = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    orientation:
      Dimensions.get("window").width > Dimensions.get("window").height
        ? "landscape"
        : "portrait",
  });
  const { width, height, orientation } = windowDimensions;

  useEffect(() => {
    const updateWindowDimensions = () => {
      setWindowDimensions({
        ...windowDimensions,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        orientation:
          Dimensions.get("window").width > Dimensions.get("window").height
            ? "landscape"
            : "portrait",
      });
    };

    Dimensions.addEventListener("change", updateWindowDimensions);
    return () =>
      Dimensions.removeEventListener("change", updateWindowDimensions);
  }, []);

  const { players, game, playersModal } = useContext(AppStore);
  const { clPrimary } = globalStyles;

  return (
    <Container>
      {orientation === "landscape" && playersModal ? null : (
        <MetaBar bgc={clPrimary} />
      )}
      {orientation === "landscape" && playersModal ? null : (
        <Header bgc={clPrimary} dimensions={windowDimensions} />
      )}
      {orientation === "landscape" ? null : (
        <ChoosePlayerModal dimensions={windowDimensions} />
      )}
      {game && players ? (
        <GameScreen dimensions={windowDimensions} />
      ) : orientation === "landscape" && playersModal ? (
        <ChoosePlayerView />
      ) : (
        <HomeScreen dimensions={windowDimensions} />
      )}
    </Container>
  );
};

export default Layout;
