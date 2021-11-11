import React from "react";
import {
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  Image,
  ImageStyle,
  ImageSourcePropType,
} from "react-native";
/**
 * ? Local Imports
 */
import styles from "./CloseButton.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomImageStyleProp =
  | StyleProp<ImageStyle>
  | Array<StyleProp<ImageStyle>>;

interface ICloseButtonProps {
  style?: CustomStyleProp;
  imageStyle?: CustomImageStyleProp;
  imageSource?: ImageSourcePropType;
  onPress?: () => void;
}

const CloseButton: React.FC<ICloseButtonProps> = ({
  style,
  imageStyle,
  imageSource = require("../../local-assets/close.png"),
  onPress,
}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Image
        resizeMode="contain"
        source={imageSource}
        style={[styles.imageStyle, imageStyle]}
      />
    </TouchableOpacity>
  );
};

export default CloseButton;
