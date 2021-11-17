import React from "react";
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
/**
 * ? Local Imports
 */
import styles, { _priceContainer } from "./PlanItem.style";
import { IPlan } from "../../PremiumScreen";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

interface IPlanItemProps {
  style?: CustomStyleProp;
  data: IPlan;
  titleTextStyle?: CustomTextStyleProp;
  discountPriceTextStyle?: CustomTextStyleProp;
  priceTextStyle?: CustomTextStyleProp;
  discountTextStyle?: CustomTextStyleProp;
  discountTextColors?: string[];
}

const PlanItem: React.FC<IPlanItemProps> = ({
  style,
  data,
  titleTextStyle,
  priceTextStyle,
  discountTextStyle,
  discountPriceTextStyle,
  discountTextColors = ["#b7a881", "#938360"],
}) => {
  const { title, discountText, price, discountPrice } = data;

  const Title = () => (
    <Text style={[styles.titleTextStyle, titleTextStyle]}>{title}</Text>
  );

  const DiscountPrice = () =>
    discountPrice ? (
      <View style={styles.discountPriceContainer}>
        <Text style={[styles.discountPriceTextStyle, discountPriceTextStyle]}>
          {discountPrice}
        </Text>
      </View>
    ) : null;

  const Price = () => (
    <View style={_priceContainer(discountPrice)}>
      <Text style={[styles.priceTextStyle, priceTextStyle]}>{price}</Text>
    </View>
  );

  const DiscountText = () =>
    discountText ? (
      <LinearGradient
        style={styles.discountTextContainer}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={discountTextColors}
      >
        <Text style={[styles.discountTextStyle, discountTextStyle]}>
          {discountText?.toLocaleUpperCase()}
        </Text>
      </LinearGradient>
    ) : null;

  return (
    <TouchableOpacity style={[styles.container, style]}>
      <Title />
      <DiscountPrice />
      <Price />
      <DiscountText />
    </TouchableOpacity>
  );
};

export default PlanItem;
