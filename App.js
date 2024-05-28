import React from "react";
import MainScreen from "./screens/Mainscreen";
import SignupPage from "./screens/Signup";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from "./screens/Homepage";
import CardsSwipeDemo from "./screens/CardsSwipeDemo";
import Levels from "./screens/Levels";
import Signin from "./screens/Signin";
import Storybook from "./screens/Storybook";
import LevelComplete from "./screens/LevelComplete";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignupPage"
          component={SignupPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SigninPage"
          component={Signin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomePage"
          component={Homepage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StorybookPage"
          component={Storybook}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CardsSwipeDemoPage"
          component={CardsSwipeDemo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LevelsPage"
          component={Levels}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LevelCompletePage"
          component={LevelComplete}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
