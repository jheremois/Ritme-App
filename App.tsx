import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { AppLooks } from '@src/shared/styles/AppLooks'
import { AppColors } from '@src/shared/styles/AppResourses'
import MainRoutes from '@router/Main.routes'
import { UserProvider } from '@src/context/userContext'

const App = ()=>{
  return(
      <SafeAreaView style={[AppLooks.flex, AppLooks.bgBlack]}>
        <StatusBar
          animated={true}
          backgroundColor={AppColors.gray}/>
          <UserProvider>
            <MainRoutes/>
          </UserProvider>
      </SafeAreaView>
  )
}

export default App
