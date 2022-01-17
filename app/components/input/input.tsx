import * as React from "react"
import { StyleSheet, TextInput, TextInputProps, useColorScheme, View, ViewComponent, ViewStyle } from "react-native"
import { Icon, Text } from ".."
import { color } from "../../theme"
import dp2px from "../../utils/dp2px"
import { IconProps } from "../icon/icon.props"

export interface InputProps extends TextInputProps {
  containerStyle?: ViewStyle
  label?: string | IconProps | React.ReactNode
  flex?: 'row' | 'column'
  pack?: boolean
  button?: React.ReactNode
}
/**
 * Describe your component here
 */
export function Input(props: InputProps) {
  const { containerStyle, style, label, flex = 'row', button = null, pack = true } = props

  return (
    <View style={[
      styles.Container,
      containerStyle,
      {
        flexDirection: flex
      },
      pack ? styles.Pack : {}
    ]
    }>
      {typeof label == 'string' ? (
        <Icon icon={label} size={dp2px(40)}></Icon>
      ) : label}
      <TextInput
        placeholderTextColor={color(useColorScheme()).text3}
        style={[
          { color: color(useColorScheme()).text },
          styles.Input,
          style,
          flex == 'row' ? {
            paddingLeft: dp2px(20)
          } : {
            marginTop: dp2px(10)
          },
          !pack ? styles.Pack : {}
        ]
        } {...props}
      ></TextInput>
      {button}
    </View>
  )
}
const styles = StyleSheet.create({
  Container: {
    display: 'flex'
  },
  Input: {
    fontSize: dp2px(30),
    flex: 1,
  },
  Pack: {
    borderColor: color().line,
    borderWidth: dp2px(1),
    padding: dp2px(20),
    borderRadius: dp2px(10)
  }
})
