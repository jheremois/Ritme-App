import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Explore from '@screens/Home/Explore';
import HomeRoutes from './Home.routes';
import { AppColors } from '@src/shared/styles/AppResourses';

const icons: any = ["home", "person"];
const getTemplateIcon = (focused: boolean, pos: number) => {
    return (<Ionicons name={icons[pos]} size={25} color={focused ? "#f0f0f0" : "#f0f0f070"} />);
};
const setIcons = (iconsPost: number) => {
    return {
        tabBarIcon: (prop: any) => getTemplateIcon(prop.focused, iconsPost),
    };
};

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: AppColors.black,
    color: AppColors.white
  },
};

const Tap = createBottomTabNavigator()

function MainRoutes() {
    return (
        <NavigationContainer theme={MyTheme}>
          <Tap.Navigator 
            initialRouteName="Home"
            screenOptions={{
              tabBarStyle: { position: 'absolute', backgroundColor: AppColors.gray, height: 55, paddingVertical: 5, borderTopColor: '#f0f0f020',},
              tabBarItemStyle: {justifyContent: 'center', alignItems: 'center'},
              tabBarLabelStyle: {marginBottom: 5,},
              headerShown: false,
              tabBarActiveTintColor: '#f0f0f8', 
              tabBarInactiveBackgroundColor: 'f0f0f880', 
              tabBarBackground: (()=> <View style={{height: 90, padding: 20,}}></View>),
            }}
          >
              <Tap.Screen name="Home" component={HomeRoutes} options={setIcons(0)} />
              <Tap.Screen name="Profile" component={Explore} options={setIcons(1)} />
          </Tap.Navigator>
        </NavigationContainer>
    )
}

export default MainRoutes