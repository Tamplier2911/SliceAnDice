import React, { useContext } from "react";
import globalStyles from "../../constants/globalStyles";

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
const { clWhite } = globalStyles;

const Header = ({ bgc, dimensions }) => {
  const { stopTheGame } = useContext(AppStore);
  const { orientation } = dimensions;
  return (
    <HeaderView bgc={bgc} orientation={orientation}>
      <HeaderContentView>
        <HeaderTextView>
          <HeaderText>Pig Game</HeaderText>
        </HeaderTextView>
        <HeaderLogoView onPress={() => stopTheGame()}>
          <MaterialCommunityIcons
            name="dice-multiple"
            size={50}
            color={clWhite}
          />
        </HeaderLogoView>
      </HeaderContentView>
    </HeaderView>
  );
};

export default Header;
