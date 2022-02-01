import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Explore from '@src/screens/Home/Explore';
import { AppColors } from '@src/shared/styles/AppResourses';
import Trending from '@src/screens/Home/Trending';

const Tab = createMaterialTopTabNavigator();

const FeedRoutes = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            tabBarPressColor: AppColors.black,
            tabBarActiveTintColor: AppColors.indigo,
            tabBarInactiveTintColor: AppColors.whiteLow,
            tabBarStyle: {backgroundColor: AppColors.gray},
            tabBarIndicatorStyle: {backgroundColor: AppColors.indigo, height: 2.3},
        }}
    >
    <Tab.Screen 
        name="explore" component={Explore}
    />
    <Tab.Screen 
        name="trending" component={Trending}
    />
    </Tab.Navigator>
  );
}

export default FeedRoutes