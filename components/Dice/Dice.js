import React from "react";
import globalStyles from "../../constants/globalStyles";

// iconic
import { FontAwesome5 } from "@expo/vector-icons";

// sc
import { DiceView, DiceText } from "./DiceStyles";

const Dice = ({ num, size }) => {
  const { clPrimary } = globalStyles;
  const diceNum =
    num === 1
      ? "one"
      : num === 2
      ? "two"
      : num === 3
      ? "three"
      : num === 4
      ? "four"
      : num === 5
      ? "five"
      : num === 6
      ? "six"
      : "one";

  return (
    <DiceView>
      <DiceText>
        <FontAwesome5 name={`dice-${diceNum}`} size={size} color={clPrimary} />
      </DiceText>
    </DiceView>
  );
};

export default Dice;
