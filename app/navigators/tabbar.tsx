import React from "react"

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Icon } from "../components"
import { ClassifyScreen, HomeScreen, ShopcarScreen } from "../screens";
import { MeScreen } from "../screens/me-screen/me-screen";

export type PrimaryParamList = {
  home: undefined
  shopcar: undefined
  classify: undefined
  me: undefined
}
// 不透明true,透明false
const Tab = createBottomTabNavigator<PrimaryParamList>()
export function TabbarNavigator() {
  let textColor = '#ffffff'
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabel: '',
        gestureEnabled: false,
        tabBarIcon: ({ color }) => {
          let iconName: any = route.name
          return (
            <Icon
              icon={iconName}
              style={{ opacity: color != textColor ? 1 : 0.3 }} />
          )
        }
      })}
      initialRouteName='home'
    >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="shopcar" component={ShopcarScreen} />
      <Tab.Screen name="classify" component={ClassifyScreen} />
      <Tab.Screen name="me" component={MeScreen} />
    </Tab.Navigator >
  )
}
const exitRoutes = ["home"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
