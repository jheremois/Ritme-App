import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { AppColors } from '@src/shared/styles/AppResourses';
import AuthRoutes from './Auth.routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppRoutes from './App.routes';
import CreatePost from '@src/screens/CreatePost';
const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: AppColors.black,
    color: AppColors.white
  },
};

function MainRoutes() {
    return (
        <NavigationContainer theme={MyTheme}>
          <Stack.Navigator initialRouteName="auth" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="auth" component={AuthRoutes} />
            <Stack.Screen name="app" component={AppRoutes} />
            <Stack.Screen name="createPost" component={CreatePost} />
          </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainRoutes