import * as Font from "expo-font";

const useFonts = async () => {
  await Font.loadAsync({
    Montserrat: require("../../assets/fonts/Montserrat-Italic-VariableFont_wght.ttf"),
    "Roboto-Black": require("../../assets/fonts/Roboto-Black.ttf"),
    "Product-Sans-Bold-Italic": require("../../assets/fonts/Product-Sans-Bold-Italic.ttf"),
    "Product-Sans-Bold": require("../../assets/fonts/Product-Sans-Bold.ttf"),
    "Product-Sans-Italic": require("../../assets/fonts/Product-Sans-Italic.ttf"),
    "Product-Sans-Regular": require("../../assets/fonts/Product-Sans-Regular.ttf"),
  });
};

export default useFonts;
