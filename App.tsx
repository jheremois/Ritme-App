import React from 'react'
import { SafeAreaView, StatusBar, Text, View } from 'react-native'
import { AppLooks } from '@src/shared/styles/AppLooks'
import { AppColors } from '@src/shared/styles/AppResourses'
import MainRoutes from '@router/Main.routes'
import { UserProvider } from '@src/context/userContext'
import { MyToastConfig } from '@src/components/ToastAlert'
import Toast from 'react-native-toast-message';
import { ConectionProvider } from '@src/context/conectionContext'

const App = ()=>{
  return(
    <>
      <SafeAreaView style={[AppLooks.flex, AppLooks.bgBlack]}>
        <StatusBar
          animated={true}
          backgroundColor={AppColors.gray}/>
          <ConectionProvider>
            <UserProvider>
              <MainRoutes/>
            </UserProvider>
          </ConectionProvider>
      </SafeAreaView>
      <Toast config={MyToastConfig} />
    </>
  )
}

export default App
