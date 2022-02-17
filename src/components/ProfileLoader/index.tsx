import React from "react"
import ContentLoader, { Rect, Circle } from "react-content-loader/native"

const ProfileLoader = (props: any) => (
    <ContentLoader 
        speed={2}
        width={360}
        height={160}
        viewBox="0 0 360 160"
        backgroundColor="#2a2727"
        foregroundColor="#828282"
        {...props}
    >
    <Circle cx="42" cy="48" r="40" /> 
    <Rect x="97" y="29" rx="2" ry="2" width="258" height="45" /> 
    <Rect x="2" y="99" rx="2" ry="2" width="355" height="45" />
  </ContentLoader>
)

export default ProfileLoader
