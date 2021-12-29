import React from "react"
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"
import { Dimensions } from "react-native"

const PostLoader = (props: any) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={570}
    viewBox="0 0 400 570"
    backgroundColor="#2a2727"
    foregroundColor="#828282"
    {...props}
  >
    <Circle cx="29" cy="43" r="23" /> 
    <Rect x="62" y="28" rx="2" ry="2" width="262" height="26" /> 
    <Rect x="1" y="82" rx="2" ry="2" width="400" height="463" />
  </ContentLoader>
)

export default PostLoader