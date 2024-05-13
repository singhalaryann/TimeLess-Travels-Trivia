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

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="MainScreen" headerMode="none">
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="SignupPage" component={SignupPage} />
          <Stack.Screen name="SigninPage" component={Signin} />
          <Stack.Screen name="HomePage" component={Homepage} />
          <Stack.Screen name="StorybookPage" component={Storybook} />
          <Stack.Screen name="CardsSwipeDemoPage" component={CardsSwipeDemo} />
          <Stack.Screen name="LevelsPage" component={Levels} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
