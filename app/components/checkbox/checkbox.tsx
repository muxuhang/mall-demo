import * as React from "react"
import { TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { Text } from "../text/text"
import { color, spacing } from "../../theme"
import { CheckboxProps } from "./checkbox.props"
import dp2px from "../../utils/dp2px"

const ROOT: ViewStyle = {
  flexDirection: "row",
  paddingVertical: spacing[1],
  alignItems: 'center'
}

const DIMENSIONS = { width: dp2px(36), height: dp2px(36) }

const OUTLINE: ViewStyle = {
  ...DIMENSIONS,
  justifyContent: "center",
  alignItems: "center",
  borderWidth: 1,
  borderColor: color().palette.blue,
  borderRadius: 1,
}

const FILL: ViewStyle = {
  width: DIMENSIONS.width - dp2px(10),
  height: DIMENSIONS.height - dp2px(10),
  backgroundColor: color().palette.blue,
}

const LABEL: TextStyle = { paddingLeft: spacing[2] }

export function Checkbox(props: CheckboxProps) {
  const numberOfLines = props.multiline ? 0 : 1

  const shape = props.shape == 'round' ? { borderRadius: DIMENSIONS.width } : {}
  const rootStyle = [ROOT, props.style, shape]
  const outlineStyle = [OUTLINE, props.outlineStyle, shape]
  const fillStyle = [FILL, props.fillStyle, shape]

  const onPress = props.onToggle ? () => props.onToggle && props.onToggle(!props.value) : null

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      disabled={!props.onToggle}
      onPress={onPress}
      style={rootStyle}
    >
      <View style={outlineStyle}>{props.value && <View style={fillStyle} />}</View>
      <Text text={props.text} tx={props.tx} numberOfLines={numberOfLines} style={LABEL} />
    </TouchableOpacity>
  )
}
