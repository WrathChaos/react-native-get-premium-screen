import React from "react";
import {
  View,
  Text,
  Dimensions,
  StyleProp,
  StyleSheet,
  ViewStyle,
  SafeAreaView,
} from "react-native";
import RNAnimated from "react-native-animated-component";
import LinearGradient from "react-native-linear-gradient";
import CloseButton from "./components/close-button/CloseButton";
import Logo from "./components/logo/Logo";
import PremiumFeatures from "./components/premium-features/PremiumFeatures";
/**
 * ? Local Imports
 */
import styles from "./PremiumScreen.style";

const { width: ScreenWidth } = Dimensions.get("screen");

const mockFeatures = [
  "Unlimited monthly posts",
  "Personalized activity insights",
  "Advanced promotion tools",
];

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface IPremiumScreenProps {
  style?: CustomStyleProp;
  TextComponent?: React.ReactChild;
  onClosePress?: () => void;
}

const PremiumScreen: React.FC<IPremiumScreenProps> = ({
  style,
  onClosePress,
}) => {
  const TitleContainer = () => (
    <View
      style={{ marginTop: 32, alignItems: "center", justifyContent: "center" }}
    >
      <Text style={{ color: "#bfaf89", fontSize: 32 }}>Get Premium</Text>
      <View style={{ marginTop: 24, width: ScreenWidth * 0.8 }}>
        <Text style={{ textAlign: "center", color: "#dbdbdd", lineHeight: 20 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam massa
          mauris, pretium bibendum orci in, consectetur vulputate erat. Duis
          egestas ex enim, quis elementum mauris posuere at.
        </Text>
      </View>
    </View>
  );

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={["#6a6b76", "#494951", "#323239"]}
      style={StyleSheet.absoluteFill}
    >
      <SafeAreaView>
        <RNAnimated animationDuration={1250} appearFrom="top">
          <CloseButton onPress={onClosePress} />
          <Logo />
          <TitleContainer />
          <PremiumFeatures data={mockFeatures} />
        </RNAnimated>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default PremiumScreen;
