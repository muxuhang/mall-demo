import { TextStyle } from "react-native"
import { color, typography } from "../../theme"
import dp2px from "../../utils/dp2px"

/**
 * All text will start off looking like this.
 */
const BASE: TextStyle = {
  fontFamily: typography.primary,
  color: color.text,
  fontSize: dp2px(30),
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const presets = {
  /**
   * The default text styles.
   */
  default: BASE,

  /**
   * A bold version of the default text.
   */
  bold: { ...BASE, fontWeight: "bold" } as TextStyle,

  /**
   * Large headers.
   */
  header: { ...BASE, fontSize: dp2px(48), fontWeight: "bold" } as TextStyle,

  /**
   * Field labels that appear on forms above the inputs.
   */
  fieldLabel: { ...BASE, fontSize: dp2px(26), color: color.dim } as TextStyle,

  /**
   * A smaller piece of secondary information.
   */
  secondary: { ...BASE, fontSize: dp2px(18), color: color.dim } as TextStyle,
}

/**
 * A list of preset names.
 */
export type TextPresets = keyof typeof presets
