import React, { useState } from "react";
import RootNavigation from "./Navigation";

import AppLoading from "expo-app-loading";
import useFonts from "./components/hooks/useFonts";

import { DataProvider } from "./components/context/DataContext";

const fetchFont = async () => {
  await useFonts();
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onError={(err) => console.log(err)}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }
  return (
    <DataProvider>
      <RootNavigation />
    </DataProvider>
  );
}
