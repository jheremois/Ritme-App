import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { AppColors } from '@src/shared/styles/AppResourses';
import AuthRoutes from './Auth.routes';

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
          <AuthRoutes/>
        </NavigationContainer>
    )
}

export default MainRoutes