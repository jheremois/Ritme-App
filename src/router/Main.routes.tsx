import React, { useContext, useEffect } from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { AppColors } from '@src/shared/styles/AppResourses';
import AuthRoutes from './Auth.routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppRoutes from './App.routes';
import CreatePost from '@src/screens/CreatePost';
import { EditProfile } from '@src/screens/EditProfile';
import SplashScreen from '@src/screens/SplashScreen';
import Settings from '@src/screens/Settings';
import Profile from '@src/screens/Profile';
import SearchBar from '@src/screens/SearchBar';
import { ConectionContext } from '@src/context/conectionContext';
import { showToast } from '@src/helpers/consts';
import NoConection from '@src/screens/NoConection';
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
    const { conection } = useContext(ConectionContext)
    
    useEffect(()=>{
      !conection && showToast("error", "No internet conection")
    }, [conection])
    
    return (
        <NavigationContainer theme={MyTheme}>
          <Stack.Navigator initialRouteName="splash" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="splash" component={SplashScreen} />
            <Stack.Screen name="editProfile" component={EditProfile} />
            <Stack.Screen name="userProfile" initialParams={{ id: Number }} component={Profile} />
            <Stack.Screen name="searchBar" component={SearchBar} />
            <Stack.Screen name="settings" component={Settings} />
            <Stack.Screen name="auth" component={AuthRoutes} />
            <Stack.Screen name="app" component={AppRoutes} />
            <Stack.Screen name="createPost" component={CreatePost} />
            <Stack.Screen name="ofLine" component={NoConection} />
          </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainRoutes