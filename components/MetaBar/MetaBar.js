import React from "react";
import Constants from "expo-constants";

// sc
import { MetaBarHolder } from "./MetaBarStyles";

const MetaBar = ({ bgc }) => {
  const metaBarHeight = Constants.statusBarHeight;
  return <MetaBarHolder bgc={bgc} height={metaBarHeight} />;
};

export default MetaBar;
