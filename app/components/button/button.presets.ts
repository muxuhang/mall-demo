import { ViewStyle, TextStyle, useColorScheme } from "react-native"
import { color, spacing } from "../../theme"
import dp2px from "../../utils/dp2px"

/**
 * All text will start off looking like this.
 */
const BASE_VIEW: ViewStyle = {
  padding: dp2px(20),
  borderRadius: dp2px(10),
  justifyContent: "center",
  alignItems: "center",
  minWidth: dp2px(140)
}

const BASE_TEXT: TextStyle = {
  // paddingHorizontal: spacing[3],
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const viewPresets: Record<string, ViewStyle> = {
  /**
   * A smaller piece of secondard information.
   */
  primary: { ...BASE_VIEW, backgroundColor: color().palette.blue } as ViewStyle,

  /**
   * A button without extras.
   */
  link: {
    ...BASE_VIEW,
    paddingHorizontal: 0,
    paddingVertical: 0,
    alignItems: "flex-start",
  } as ViewStyle,
}

export const textPresets: Record<ButtonPresetNames, TextStyle> = {
  primary: { ...BASE_TEXT, fontSize: dp2px(30), color: color().palette.white } as TextStyle,
  link: {
    ...BASE_TEXT,
    paddingHorizontal: 0,
    paddingVertical: 0,
  } as TextStyle,
}

/**
 * A list of preset names.
 */
export type ButtonPresetNames = keyof typeof viewPresets
