import React from "react";

// context
import { GlobalStore } from "./contexts/GlobalContext";

// components
import Layout from "./components/Layout/Layout";

export default function App() {
  return (
    <GlobalStore>
      <Layout />
    </GlobalStore>
  );
}
