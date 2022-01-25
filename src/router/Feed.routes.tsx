import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Explore from '@src/screens/Home/Explore';
import { AppLooks } from '@src/shared/styles/AppLooks';
import { AppColors } from '@src/shared/styles/AppResourses';
import Trending from '@src/screens/Home/Trending';
import { View, Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const FeedRoutes = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            tabBarItemStyle: {
                backgroundColor: AppColors.darkGray,
                alignItems: "center",
            },
            tabBarActiveTintColor: "#f0f0f0",
            tabBarIndicatorStyle: {borderColor: "#f9f9f9", borderWidth: 1,},
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