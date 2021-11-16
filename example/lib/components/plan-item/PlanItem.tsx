import React from "react";
import {
  View,
  Text,
  Dimensions,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
/**
 * ? Local Imports
 */
import styles from "./PlanItem.style";
import { IPlan } from "../../PremiumScreen";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

const { width: ScreenWidth } = Dimensions.get("screen");

interface IPlanItemProps {
  style?: CustomStyleProp;
  data: IPlan;
}

const PlanItem: React.FC<IPlanItemProps> = ({ style, data }) => {
  const { title, discountText, price, discountPrice } = data;
  return (
    <TouchableOpacity
      style={{
        height: ScreenWidth * 0.6,
        width: ScreenWidth * 0.4,
        marginLeft: 16,
        alignItems: "center",
        paddingTop: 24,
        backgroundColor: "rgba(77, 77, 85, 1)",
      }}
    >
      <Text style={{ color: "#dadbdd", fontWeight: "bold", fontSize: 16 }}>
        {title}
      </Text>
      {discountPrice && (
        <View style={{ marginTop: 32 }}>
          <Text
            style={{
              color: "#868a8f",
              textDecorationLine: "line-through",
              fontSize: 20,
            }}
          >
            {discountPrice}
          </Text>
        </View>
      )}
      <View style={{ marginTop: discountPrice ? 16 : 72 }}>
        <Text style={{ color: "#dadbdd", fontSize: 32 }}>{price}</Text>
      </View>
      {discountText && (
        <LinearGradient
          style={{
            marginTop: 32,
            height: 30,
            width: ScreenWidth * 0.35,
            alignItems: "center",
            justifyContent: "center",
          }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#b7a881", "#938360"]}
        >
          <Text style={{ fontWeight: "bold", color: "#5c574e" }}>
            {discountText?.toLocaleUpperCase()}
          </Text>
        </LinearGradient>
      )}
    </TouchableOpacity>
  );
};

export default PlanItem;
