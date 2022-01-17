import { palette } from "./palette"
/**
 * Roles for colors.  Prefer using these over the palette.  It makes it easier
 * to change things.
 *
 * The only roles we need to place in here are the ones that span through the app.
 *
 * If you have a specific use-case, like a spinner color.  It makes more sense to
 * put that in the <Spinner /> component.
 */
// console.log('initialMode', initialMode)
export const color = (theme = 'light') => {
  let isDark = (theme == 'dark')
  return {
    background: isDark ? palette.black : palette.white,
    text: isDark ? palette.white : palette.black,
    text2: isDark ? palette.lightWhite : palette.lightBlack,
    text3: isDark ? palette.lighterWhite : palette.lighterBlack,
    palette,
    transparent: "rgba(0, 0, 0, 0)",
    primary: palette.orange,
    primaryDarker: palette.orangeDarker,
    line: palette.offWhite,
    dim: palette.lightGrey,
    error: palette.angry,
    storybookDarkBg: palette.black,
    storybookTextColor: palette.black,
  }
}
