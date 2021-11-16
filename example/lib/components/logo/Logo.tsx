import React from "react";
import { View, Text, Image, StyleProp, ViewStyle } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./Logo.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface ILogoProps {
  style?: CustomStyleProp;
  ImageComponent?: any;
}

const Logo: React.FC<ILogoProps> = ({ style, ImageComponent = Image }) => {
  return (
    <View
      style={{ marginTop: 32, alignItems: "center", justifyContent: "center" }}
    >
      <ImageComponent
        resizeMode="contain"
        source={require("../../local-assets/diamond-3.png")}
        style={{ height: 50, width: 50 }}
      />
    </View>
  );
};

export default Logo;
