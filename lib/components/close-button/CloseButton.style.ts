import { ViewStyle, StyleSheet, ImageStyle } from "react-native";

interface Style {
  container: ViewStyle;
  imageStyle: ImageStyle;
}

export default StyleSheet.create<Style>({
  container: {
    marginTop: 24,
    marginLeft: 24,
  },
  imageStyle: {
    height: 15,
    width: 15,
    tintColor: "#fff",
  },
});
