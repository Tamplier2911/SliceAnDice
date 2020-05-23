import React, { useContext } from "react";

// context
import AppStore from "../../contexts/GlobalContext";

// components
import Header from "../Header/Header";
import MetaBar from "../MetaBar/MetaBar";

// screens
import ChoosePlayerModal from "../ChoosePlayersModal/ChoosePlayersModal";
import HomeScreen from "../HomeScreen/HomeScreen";
import GameScreen from "../GameScreen/GameScreen";

// cs
import { Container } from "./LayoutStyles";

const Layout = () => {
  const { players, game } = useContext(AppStore);

  return (
    <Container>
      <MetaBar bgc={"#006eff"} />
      <Header bgc={"#006eff"} />
      <ChoosePlayerModal />
      {game && players ? <GameScreen /> : <HomeScreen />}
    </Container>
  );
};

export default Layout;
