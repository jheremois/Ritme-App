/*
<View>
    <View style={{alignItems: "center", width: "100%"}}>
        <View style={{maxWidth: Dimensions.get("screen").width / 1.1, overflow: "hidden", paddingVertical: 20}}>
            <PostLoader/>
        </View>
    </View>
</View>
*/

import React from "react"
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"
import { Dimensions } from "react-native"

const PostLoader = (props: any) => (
  <ContentLoader 
    speed={2}
    width={Dimensions.get("screen").width}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <Circle cx="29" cy="33" r="21" /> 
    <Rect x="60" y="21" rx="2" ry="2" width="140" height="24" /> 
    <Rect x="0" y="60" rx="2" ry="2" width="400" height="320" />
  </ContentLoader>
)

export default PostLoader