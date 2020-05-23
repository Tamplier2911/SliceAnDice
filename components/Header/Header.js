import React from "react";

// rnico
import { MaterialCommunityIcons } from "@expo/vector-icons";

// sc
import {
  HeaderView,
  HeaderTextView,
  HeaderText,
  HeaderContentView,
  HeaderLogoView,
} from "./HeaderStyles";

const Header = ({ bgc }) => {
  return (
    <HeaderView bgc={bgc}>
      <HeaderContentView>
        <HeaderTextView>
          <HeaderText>Pig Game</HeaderText>
        </HeaderTextView>
        <HeaderLogoView>
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
