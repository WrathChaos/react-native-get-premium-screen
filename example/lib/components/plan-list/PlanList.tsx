import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import { IPlan } from "../../PremiumScreen";
import PlanItem from "../plan-item/PlanItem";
/**
 * ? Local Imports
 */
import styles from "./PlanList.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

interface IPlanListProps {
  style?: CustomStyleProp;
  titleTextStyle?: CustomTextStyleProp;
  data: IPlan[];
  title: string;
  TextComponent?: any;
}

const PlanList: React.FC<IPlanListProps> = ({
  style,
  data,
  title,
  titleTextStyle,
  TextComponent = Text,
}) => {
  const Title = () => (
    <View style={styles.titleContainer}>
      <TextComponent style={[styles.titleTextStyle, titleTextStyle]}>
        {title}
      </TextComponent>
    </View>
  );

  return (
    <View style={[styles.container, style]}>
      <Title />
      <FlatList
        data={data}
        horizontal
        style={styles.listStyle}
        renderItem={({ item }) => <PlanItem data={item} />}
      />
    </View>
  );
};

export default PlanList;
