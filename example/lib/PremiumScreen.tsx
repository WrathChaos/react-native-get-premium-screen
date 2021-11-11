import React from "react";
import {
  View,
  Text,
  StyleProp,
  StyleSheet,
  ViewStyle,
  SafeAreaView,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import CloseButton from "./components/close-button/CloseButton";
/**
 * ? Local Imports
 */
import styles from "./PremiumScreen.style";

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
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={["#6a6b76", "#494951", "#323239"]}
      style={StyleSheet.absoluteFill}
    >
      <SafeAreaView>
        <CloseButton onPress={onClosePress} />
        <View></View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default PremiumScreen;
