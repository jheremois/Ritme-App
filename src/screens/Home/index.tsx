import React, { useState } from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Explore from './Explore';

const Tab = createMaterialTopTabNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Explore} />
      <Tab.Screen name="Settings" component={Explore} />
    </Tab.Navigator>
  );
}

export default Home