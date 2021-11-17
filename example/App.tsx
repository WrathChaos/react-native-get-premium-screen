import React from "react";
import {} from "react-native";
import PremiumScreen, { IPlan } from "react-native-get-premium-screen";

const descriptionText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam massa mauris, pretium bibendum orci in, consectetur vulputate erat.";

const App = () => {
  return (
    <PremiumScreen
      title="Get Premium"
      planListTitle="Choose a plan"
      description={descriptionText}
      onPlanSelect={(selectedPlan: IPlan) => {
        alert(JSON.stringify(selectedPlan));
      }}
    />
  );
};

export default App;
