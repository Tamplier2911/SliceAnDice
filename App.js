import React from "react";
import globalStyles from "./constants/globalStyles";

// fonts
import { useFonts } from "@use-expo/font";

// context
import { GlobalStore } from "./contexts/GlobalContext";

// components
import Layout from "./components/Layout/Layout";
import Spinner from "./components/Spinner/Spinner";

export default function App() {
  const [fontLoaded] = useFonts({
    chelsea: require("./assets/fonts/ChelseaMarket-Regular.ttf"),
  });
  const { clPrimary } = globalStyles;
  return (
    <GlobalStore>
      {fontLoaded ? <Layout /> : <Spinner size="large" color={clPrimary} />}
    </GlobalStore>
  );
}

// FONT FETCH WITH EXPO
// import * as Font from "expo-font";
// import { AppLoading } from "expo";
// const fetchFonts = () => {
//   Font.loadAsync({
//     "open-sans": require("./assets/fonts/ChelseaMarket-Regular.ttf"),
//   });
// };
// <AppLoading startAsync={fetchFonts} onFinish={loadLayour} onError={(err) => console.log(err)}/>
