import React from "react";
// import {} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import FirstScreen from "./app/FirstScreen";
import ReduxProvider from "./app/redux/ReduxProvider";

console.disableYellowBox = true;

const AppNavigator = createStackNavigator(
  {
    First: {
      screen: FirstScreen
    },
    Game: {
      screen: ReduxProvider,
      navigationOptions: { title: " back to FirstScreen " }
    }
  },
  {
    initialRouteName: "First",
    headerMode: null
  }
);

export default createAppContainer(AppNavigator);
