import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '@src/screens/Auth/Login';
import Register from '@src/screens/Auth/Register';

const Stack = createNativeStackNavigator();


function AuthRoutes() {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="register" component={Register} />
      </Stack.Navigator>
  );
}

export default AuthRoutes