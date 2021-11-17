import { ViewStyle, ImageStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
  imageStyle: ImageStyle;
}

export default StyleSheet.create<Style>({
  container: {
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: {
    height: 50,
    width: 50,
  },
});
