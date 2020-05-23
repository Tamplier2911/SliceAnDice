import React from "react";

// sc
import { ButtonElement, ButtonTextWrapper, ButtonText } from "./ButtonStyles";

const Button = ({ bgc, txc, title, action }) => {
  return (
    <ButtonElement bgc={bgc} onPress={() => action()}>
      <ButtonTextWrapper>
        <ButtonText txc={txc}>{title}</ButtonText>
      </ButtonTextWrapper>
    </ButtonElement>
  );
};

export default Button;
