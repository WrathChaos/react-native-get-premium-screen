import React from "react";
import { View, Text, StyleProp, ViewStyle, TextStyle } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./TitleContainer.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

interface ITitleContainerProps {
  style?: CustomStyleProp;
  title: string;
  description?: string;
  titleTextStyle?: CustomTextStyleProp;
  descriptionTextStyle?: CustomTextStyleProp;
}

const TitleContainer: React.FC<ITitleContainerProps> = ({
  style,
  titleTextStyle,
  descriptionTextStyle,
  title,
  description,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.titleTextStyle, titleTextStyle]}>{title}</Text>
      <View style={styles.descriptionContainer}>
        <Text style={[styles.descriptionTextStyle, descriptionTextStyle]}>
          {description}
        </Text>
      </View>
    </View>
  );
};

export default TitleContainer;
