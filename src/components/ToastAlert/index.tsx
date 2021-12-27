import React from "react";
import { AppColors } from '@src/shared/styles/AppResourses';
import {BaseToast, ErrorToast} from 'react-native-toast-message';

interface pops{
  text1: string
  description: string
}

export const MyToastConfig = {

  success: (props: pops) => (
    <BaseToast
      {...props}
      style={{ 
        borderLeftColor: AppColors.indigo,
        backgroundColor: AppColors.darkGray
      }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        color: AppColors.white,
        fontSize: 15,
        fontWeight: '400'
      }}
      text2Style={{
        color: `${AppColors.white}`,
      }}
    />
  ),

  error: (props: pops) => (
    <ErrorToast
      {...props}
      style={{ 
        borderLeftColor: AppColors.red,
        backgroundColor: AppColors.darkGray
      }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        color: AppColors.white,
        fontSize: 15,
        fontWeight: '400'
      }}
      text2Style={{
        color: `${AppColors.white}`,
      }}
    />
  )
};