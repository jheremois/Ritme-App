import React from 'react'
import { Text, View, Pressable } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Explore from '@src/screens/Home/Explore';

function About({navigation}: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About Screen</Text>
      <Pressable onPress={()=> navigation.navigate('Feed')}>
          <Text>
              Go to feed
          </Text>
      </Pressable>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function HomeRoutes() {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Feed" component={Explore} />
      </Stack.Navigator>
  );
}

export default HomeRoutes