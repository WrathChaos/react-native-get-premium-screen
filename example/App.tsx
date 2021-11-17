/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import {} from "react-native";
import PremiumScreen, { IPlan } from "./build/dist/PremiumScreen";

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
