import React from "react";
import {
  View,
  Image,
  Text,
  StyleProp,
  ViewStyle,
  ImageSourcePropType,
  TextStyle,
} from "react-native";
import RNAnimated from "react-native-animated-component";
/**
 * ? Local Imports
 */
import styles from "./PremiumFeatures.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

interface IPremiumFeaturesProps {
  style?: CustomStyleProp;
  checkImageSource?: ImageSourcePropType;
  textStyle?: CustomTextStyleProp;
  data: string[];
  ImageComponent?: any;
}

const PremiumFeatures: React.FC<IPremiumFeaturesProps> = ({
  style,
  data,
  textStyle,
  ImageComponent = Image,
  checkImageSource = require("../../local-assets/check.png"),
}) => {
  const PremiumFeatureItem = ({ item }: { item: any }) => (
    <View key={item} style={styles.itemContainer}>
      <View style={styles.checkImageContainer}>
        <ImageComponent
          resizeMode="contain"
          source={checkImageSource}
          style={styles.checkImageStyle}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.textStyle, textStyle]}>{item}</Text>
      </View>
    </View>
  );

  return (
    <RNAnimated style={[styles.container, style]} animationDuration={2500}>
      {data.map((item: string) => {
        return <PremiumFeatureItem key={item} item={item} />;
      })}
    </RNAnimated>
  );
};

export default PremiumFeatures;
