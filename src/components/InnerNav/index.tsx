import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { AppLooks } from "@src/shared/styles/AppLooks";
import { AppColors } from "@src/shared/styles/AppResourses";

const InnerNav = ()=>{

  let { 
    wHalf,
    alignCenter,
    contentCenter,
    contentBetween,
    flexRow,
    paddingS,
    textCenter,
    textWhite,
    fontM,
    textM
  } = AppLooks

  let tabSyle = [
    wHalf,
    paddingS,
    alignCenter,
    contentCenter,
  ]

  let TexttabSyle = [
    textCenter,
    textWhite,
    fontM,
    textM
  ]

  return(
    <>
      <View
        style={[
          contentBetween,
          flexRow,
          alignCenter,
          {
            backgroundColor: AppColors.grayLow,
          }
        ]}
      >

      <Pressable
        style={tabSyle}
      >
        <Text
          style={TexttabSyle}
        >
          Explore
        </Text>
      </Pressable>
      <View
        style={[
          alignCenter,
          contentCenter,
          {
            width: 1,
            height: "60%",
            backgroundColor: '#ffffff60'
          }
        ]}
      >
      </View>
      <Pressable
        style={tabSyle}
      >
        <Text
          style={TexttabSyle}
        >
          Trending
        </Text>
      </Pressable>

    </View>
    </>
  )
}

export default InnerNav