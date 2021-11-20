import React from 'react'
import { SafeAreaView, StatusBar, View, Text } from 'react-native'
import { AppLooks } from '@src/shared/styles/AppLooks'
import { AppColors } from '@src/shared/styles/AppResourses'
import Explore from '@src/screens/Home/Explore'

const App = ()=>{
  return(
    <SafeAreaView style={[AppLooks.flex, AppLooks.bgBlack]}>
      <StatusBar
        animated={true}
        backgroundColor={AppColors.gray}/>
      <View>
        <Explore/>
      </View>
    </SafeAreaView>
  )
}

export default App