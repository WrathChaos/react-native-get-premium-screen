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
}

const PlanList: React.FC<IPlanListProps> = ({
  style,
  data,
  titleTextStyle,
}) => {
  const Title = () => (
    <View style={styles.titleContainer}>
      <Text style={[styles.titleTextStyle, titleTextStyle]}>Choose a plan</Text>
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
