import * as React from "react"
import { useColorScheme, ViewStyle } from "react-native"

import Icon from 'react-native-vector-icons/Ionicons';
import { color } from "../../theme";
import dp2px from "../../utils/dp2px";
Icon.loadFont()
export interface IoniconsProps {
  style?: ViewStyle
  name: string
  size?: number
  color?: string
}
export function Ionicons(props: IoniconsProps) {
  const { name } = props
  const size = dp2px(props.size || 60)
  const colors = props.color || color(useColorScheme()).text
  return (
    <Icon name={name} size={size} color={colors} />
  )
}
