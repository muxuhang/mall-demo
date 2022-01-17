import * as React from "react"
import { View, ImageStyle } from "react-native"
import { Text } from ".."
import dp2px from "../../utils/dp2px"
import { AutoImage as Image } from "../auto-image/auto-image"
import { IconProps } from "./icon.props"
import { icons } from "./icons"

const ROOT: ImageStyle = {
  resizeMode: "contain",
}

export function Icon(props: IconProps) {
  const { style: styleOverride, icon, containerStyle } = props
  const size = dp2px(props.size || 50)
  return (
    <View style={containerStyle}>
      {icons[icon] ? <Image style={[ROOT, styleOverride, { height: size, width: size }]}
        source={icons[icon]} /> :
        <Text>{icon}</Text>}
    </View>
  )
}
