import React from "react";
import { View, Text, FlatList, StyleProp, ViewStyle } from "react-native";
import { IPlan } from "../../PremiumScreen";
import PlanItem from "../plan-item/PlanItem";
/**
 * ? Local Imports
 */
import styles from "./PlanList.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface IPlanListProps {
  style?: CustomStyleProp;
  data: IPlan[];
}

const PlanList: React.FC<IPlanListProps> = ({ style, data }) => {
  return (
    <View style={{ marginTop: 48, alignSelf: "center" }}>
      <View style={{ alignSelf: "center" }}>
        <Text style={{ color: "#dadbdd", fontSize: 24, fontWeight: "700" }}>
          Choose a plan
        </Text>
      </View>
      <FlatList
        data={data}
        horizontal
        style={{ marginTop: 24 }}
        renderItem={({ item }) => <PlanItem data={item} />}
      />
    </View>
  );
};

export default PlanList;
