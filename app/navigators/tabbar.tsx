import React from "react"

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Icon } from "../components"
import { ClassifyScreen, HomeScreen, ShopcarScreen } from "../screens";
import { MeScreen } from "../screens/me-screen/me-screen";
import { translate } from "../i18n";

export type PrimaryParamList = {
  home: undefined
  shopcar: undefined
  classify: undefined
  me: undefined
}
const options = {
  headerShown: false
}
const Tab = createBottomTabNavigator<PrimaryParamList>()
export function TabbarNavigator() {
  let textColor = '#8E8E8F'
  return (
    <Tab.Navigator
      screenOptions={(props: any) => {
        const { route } = props
        const name: any = route.name + '.title'
        return ({
          tabBarLabel: translate(name),
          gestureEnabled: false,
          tabBarIcon: ({ color }) => {
            let iconName: any = route.name
            return (
              <Icon
                icon={color == textColor ? iconName : iconName + '_s'}
                style={{ height: 24, width: 24 }} />
            )
          }
        })
      }}
      initialRouteName='home'
    >
      <Tab.Screen name="home" options={options} component={HomeScreen} />
      <Tab.Screen name="shopcar" options={options} component={ShopcarScreen} />
      <Tab.Screen name="classify" options={options} component={ClassifyScreen} />
      <Tab.Screen name="me" options={options} component={MeScreen} />
    </Tab.Navigator >
  )
}
const exitRoutes = ["home"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
