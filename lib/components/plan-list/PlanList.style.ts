import { ViewStyle, StyleSheet, TextStyle } from "react-native";

interface Style {
  container: ViewStyle;
  titleContainer: ViewStyle;
  titleTextStyle: TextStyle;
  listStyle: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    marginTop: 48,
    alignSelf: "center",
  },
  titleContainer: {
    alignSelf: "center",
  },
  titleTextStyle: {
    color: "#dadbdd",
    fontSize: 24,
    fontWeight: "700",
  },
  listStyle: {
    marginTop: 24,
  },
});
