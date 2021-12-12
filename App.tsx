import React from 'react'
import { SafeAreaView, StatusBar, View, Text } from 'react-native'
import { AppLooks } from '@src/shared/styles/AppLooks'
import { AppColors } from '@src/shared/styles/AppResourses'
import MainRoutes from '@router/Main.routes'
import Header from "@src/components/Header";
import InnerHeader from "@src/components/InnerHeader";
import AuthRoutes from '@src/router/Auth.routes'

const App = ()=>{
  return(
    <SafeAreaView style={[AppLooks.flex, AppLooks.bgBlack]}>
      <StatusBar
        animated={true}
        backgroundColor={AppColors.gray}/>
      {/* <InnerHeader tabName={"Home"}/> */}
      <MainRoutes/>
    </SafeAreaView>
  )
}

export default App
