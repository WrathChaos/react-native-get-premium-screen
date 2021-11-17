import { ViewStyle, Dimensions, TextStyle, StyleSheet } from "react-native";

const { width: ScreenWidth } = Dimensions.get("screen");

export const _priceContainer = (discountPrice?: string | number) => ({
  marginTop: discountPrice ? 16 : 72,
});

interface Style {
  container: ViewStyle;
  titleTextStyle: TextStyle;
  discountPriceContainer: ViewStyle;
  discountPriceTextStyle: TextStyle;
  priceTextStyle: TextStyle;
  discountTextContainer: ViewStyle;
  discountTextStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    height: ScreenWidth * 0.6,
    width: ScreenWidth * 0.4,
    marginLeft: 16,
    paddingTop: 24,
    alignItems: "center",
    backgroundColor: "rgba(77, 77, 85, 1)",
  },
  titleTextStyle: {
    fontSize: 16,
    color: "#dadbdd",
    fontWeight: "bold",
  },
  discountPriceContainer: {
    marginTop: 32,
  },
  discountPriceTextStyle: {
    fontSize: 20,
    color: "#868a8f",
    textDecorationLine: "line-through",
  },
  priceTextStyle: {
    color: "#dadbdd",
    fontSize: 32,
  },
  discountTextContainer: {
    height: 30,
    marginTop: 32,
    width: ScreenWidth * 0.35,
    alignItems: "center",
    justifyContent: "center",
  },
  discountTextStyle: {
    fontWeight: "bold",
    color: "#5c574e",
  },
});
