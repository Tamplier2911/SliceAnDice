import React, { useContext } from "react";

// context
import AppStore from "../../contexts/GlobalContext";

// rnico
import { MaterialCommunityIcons } from "@expo/vector-icons";

// sc
import {
  HeaderView,
  HeaderContentView,
  HeaderTextView,
  HeaderText,
  HeaderLogoView,
} from "./HeaderStyles";

const Header = ({ bgc }) => {
  const { stopTheGame } = useContext(AppStore);
  return (
    <HeaderView bgc={bgc}>
      <HeaderContentView>
        <HeaderTextView>
          <HeaderText>Pig Game</HeaderText>
        </HeaderTextView>
        <HeaderLogoView onPress={() => stopTheGame()}>
          <MaterialCommunityIcons
            name="dice-multiple"
            size={50}
            color="white"
          />
        </HeaderLogoView>
      </HeaderContentView>
    </HeaderView>
  );
};

export default Header;
