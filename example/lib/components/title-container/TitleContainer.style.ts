import { ViewStyle, Dimensions, StyleSheet, TextStyle } from "react-native";

const { width: ScreenWidth } = Dimensions.get("screen");

interface Style {
  container: ViewStyle;
  titleTextStyle: TextStyle;
  descriptionContainer: ViewStyle;
  descriptionTextStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    marginTop: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  titleTextStyle: {
    color: "#bfaf89",
    fontSize: 32,
  },
  descriptionContainer: {
    marginTop: 24,
    width: ScreenWidth * 0.85,
  },
  descriptionTextStyle: {
    color: "#bec2ca",
    lineHeight: 20,
    fontWeight: "700",
    textAlign: "center",
  },
});
