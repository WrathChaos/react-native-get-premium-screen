import React from "react";
import {
  View,
  Image,
  Dimensions,
  Text,
  StyleProp,
  ViewStyle,
} from "react-native";
import RNAnimated from "react-native-animated-component";
/**
 * ? Local Imports
 */
import styles from "./PremiumFeatures.style";

const { width: ScreenWidth } = Dimensions.get("screen");

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface IPremiumFeaturesProps {
  style?: CustomStyleProp;
  data: string[];
}

const PremiumFeatures: React.FC<IPremiumFeaturesProps> = ({ style, data }) => {
  return (
    <RNAnimated
      style={{
        marginTop: 24,
      }}
      animationDuration={2500}
    >
      {data.map((item: string) => {
        return (
          <View
            key={item}
            style={{
              marginTop: 24,
              flexDirection: "row",
              alignItems: "center",
              marginLeft: ScreenWidth * 0.15,
            }}
          >
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 15,
                backgroundColor: "#dadbdd",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                resizeMode="contain"
                source={require("../../local-assets/check.png")}
                style={{ height: 15, width: 15 }}
              />
            </View>
            <View style={{ marginLeft: 16 }}>
              <Text
                style={{ color: "#dadbdd", fontSize: 16, fontWeight: "bold" }}
              >
                {item}
              </Text>
            </View>
          </View>
        );
      })}
    </RNAnimated>
  );
};

export default PremiumFeatures;
