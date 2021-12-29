import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Explore from '@src/screens/Home/Explore';
import { AppLooks } from '@src/shared/styles/AppLooks';
import { AppColors } from '@src/shared/styles/AppResourses';

const Tab = createMaterialTopTabNavigator();

const FeedRoutes = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            tabBarItemStyle: {
                backgroundColor: AppColors.darkGray,
                alignItems: "center",
            },
            tabBarActiveTintColor: "white",
            tabBarIndicatorStyle: {}
        }}
    >
    <Tab.Screen 
        name="explore" component={Explore}
        
    />
    <Tab.Screen 
        name="trending" component={Explore}
    />
    </Tab.Navigator>
  );
}

export default FeedRoutes