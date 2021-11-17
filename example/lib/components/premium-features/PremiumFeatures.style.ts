import {
  ViewStyle,
  Dimensions,
  TextStyle,
  StyleSheet,
  ImageStyle,
} from "react-native";
const { width: ScreenWidth } = Dimensions.get("screen");

interface Style {
  container: ViewStyle;
  itemContainer: ViewStyle;
  checkImageContainer: ViewStyle;
  checkImageStyle: ImageStyle;
  textContainer: ViewStyle;
  textStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    marginTop: 24,
  },
  itemContainer: {
    marginTop: 24,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: ScreenWidth * 0.15,
  },
  checkImageContainer: {
    width: 20,
    height: 20,
    borderRadius: 15,
    backgroundColor: "#dadbdd",
    alignItems: "center",
    justifyContent: "center",
  },
  checkImageStyle: {
    height: 15,
    width: 15,
  },
  textContainer: {
    marginLeft: 16,
  },
  textStyle: {
    fontSize: 16,
    color: "#dadbdd",
    fontWeight: "bold",
  },
});
