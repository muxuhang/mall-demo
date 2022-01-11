/**
 * This is the navigator you will modify to display the logged-in screens of your app.
 * You can use RootNavigator to also display an auth flow or other user flows.
 *
 * You'll likely spend most of your time in this file.
 */
import React from "react"
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack"
import { translate } from "../i18n"
import { color } from "../theme"
import { TabbarNavigator } from "./tabbar"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type PrimaryParamList = {
  tabbar: undefined
}
// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createStackNavigator<PrimaryParamList>()
const options = {
  headerShown: true,
  headerBackTitle: ' ',
  headerTitleStyle: {
    color: '#fff',
    opacity: 0.6
  },
  headerStyle: {
    backgroundColor: color.background,
    borderBottomWidth: 0,
    shadowOpacity: 0
  }
}
export function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
      {/* <Stack.Screen name="tabbar" component={TabbarScreen} /> */}
      <Stack.Screen name="tabbar" options={{...options,headerShown:false}} component={TabbarNavigator} />
    </Stack.Navigator>
  )
}

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["tabbar"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
