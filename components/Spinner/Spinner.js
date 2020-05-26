import React from "react";

// sc
import { SpinnerView, LoadingSpinner } from "./SpinnerStyles";

const Spinner = ({ size, color }) => {
  return (
    <SpinnerView>
      <LoadingSpinner size={size} color={color} />
    </SpinnerView>
  );
};

export default Spinner;
