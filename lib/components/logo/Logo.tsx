import React from "react";
import {
  View,
  Image,
  StyleProp,
  ImageStyle,
  ViewStyle,
  ImageSourcePropType,
} from "react-native";
/**
 * ? Local Imports
 */
import styles from "./Logo.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomImageStyleProp =
  | StyleProp<ImageStyle>
  | Array<StyleProp<ImageStyle>>;

interface ILogoProps {
  style?: CustomStyleProp;
  imageStyle?: CustomImageStyleProp;
  ImageComponent?: any;
  imageSource?: ImageSourcePropType;
}

const Logo: React.FC<ILogoProps> = ({
  style,
  imageStyle,
  ImageComponent = Image,
  imageSource = require("../../local-assets/diamond-3.png"),
}) => {
  return (
    <View style={[styles.container, style]}>
      <ImageComponent
        resizeMode="contain"
        source={imageSource}
        style={[styles.imageStyle, imageStyle]}
      />
    </View>
  );
};

export default Logo;
