import React from "react";
import {
  View,
  Text,
  Dimensions,
  StyleProp,
  StyleSheet,
  ViewStyle,
  SafeAreaView,
  ImageStyle,
  TextStyle,
  ImageSourcePropType,
} from "react-native";
import RNAnimated from "react-native-animated-component";
import LinearGradient from "react-native-linear-gradient";
/**
 * ? Local Imports
 */
import styles from "./PremiumScreen.style";
import Logo from "./components/logo/Logo";
import PlanList from "./components/plan-list/PlanList";
import CloseButton from "./components/close-button/CloseButton";
import PremiumFeatures from "./components/premium-features/PremiumFeatures";
import TitleContainer from "./components/title-container/TitleContainer";

const { width: ScreenWidth } = Dimensions.get("screen");

export interface IPlan {
  title: string;
  price: number | string;
  discountPrice?: number | string;
  discountText?: string;
}

const mockPlans = [
  { title: "Monthly Plan", price: "$9.99" },
  {
    title: "Annual Plan",
    price: "$95.99",
    discountPrice: "$120",
    discountText: "Get 20% OFF",
  },
];

const mockFeatures = [
  "Unlimited monthly posts",
  "Personalized activity insights",
  "Advanced promotion tools",
];

type CustomViewStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;
type CustomImageStyleProp =
  | StyleProp<ImageStyle>
  | Array<StyleProp<ImageStyle>>;

interface IPremiumScreenProps {
  title: string;
  description?: string;
  planListTitle: string;
  backgroundColors?: string[];
  disableCloseButton?: boolean;
  ImageComponent?: React.ReactChild;
  TextComponent?: React.ReactChild;
  logoImageSource?: ImageSourcePropType;
  checkImageSource?: ImageSourcePropType;
  closeButtonImageSource?: ImageSourcePropType;
  logoContainerStyle?: CustomViewStyleProp;
  logoImageStyle?: CustomImageStyleProp;
  closeButtonStyle?: CustomViewStyleProp;
  closeButtonImageStyle?: CustomImageStyleProp;
  titleContainerStyle?: CustomViewStyleProp;
  titleTextStyle?: CustomImageStyleProp;
  descriptionTextStyle?: CustomImageStyleProp;
  premiumFeaturesContainerStyle?: CustomViewStyleProp;
  premiumFeatureItemTextStyle?: CustomTextStyleProp;
  planListContainerStyle?: CustomViewStyleProp;
  planListTitleTextStyle?: CustomTextStyleProp;

  onClosePress?: () => void;
}

const PremiumScreen: React.FC<IPremiumScreenProps> = ({
  title,
  planListTitle,
  description,
  backgroundColors = ["#6a6b76", "#494951", "#323239"],
  disableCloseButton = false,
  logoContainerStyle,
  logoImageStyle,
  logoImageSource,
  closeButtonStyle,
  closeButtonImageStyle,
  closeButtonImageSource,
  titleContainerStyle,
  titleTextStyle,
  descriptionTextStyle,
  premiumFeaturesContainerStyle,
  checkImageSource,
  premiumFeatureItemTextStyle,
  planListContainerStyle,
  planListTitleTextStyle,
  ImageComponent,
  TextComponent,
  onClosePress,
  ...rest
}) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={backgroundColors}
      style={StyleSheet.absoluteFill}
      {...rest}
    >
      <SafeAreaView>
        <RNAnimated animationDuration={1250} appearFrom="top">
          {!disableCloseButton && (
            <CloseButton
              style={closeButtonStyle}
              imageStyle={closeButtonImageStyle}
              imageSource={closeButtonImageSource}
              ImageComponent={ImageComponent}
              onPress={onClosePress}
            />
          )}
          <Logo
            style={logoContainerStyle}
            imageSource={logoImageSource}
            imageStyle={logoImageStyle}
            ImageComponent={ImageComponent}
          />
          <TitleContainer
            title={title}
            description={description}
            style={titleContainerStyle}
            titleTextStyle={titleTextStyle}
            descriptionTextStyle={descriptionTextStyle}
            TextComponent={TextComponent}
          />
          <PremiumFeatures
            data={mockFeatures}
            style={premiumFeaturesContainerStyle}
            checkImageSource={checkImageSource}
            textStyle={premiumFeatureItemTextStyle}
            ImageComponent={ImageComponent}
          />
          <PlanList
            data={mockPlans}
            title={planListTitle}
            style={planListContainerStyle}
            titleTextStyle={planListTitleTextStyle}
            TextComponent={TextComponent}
          />
        </RNAnimated>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default PremiumScreen;
