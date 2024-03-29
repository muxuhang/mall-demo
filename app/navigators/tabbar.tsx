import React from "react"

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Icon, Ionicons } from "../components"
import { ClassifyScreen, HomeScreen, ShopcarScreen } from "../screens";
import { MeScreen } from "../screens/me-screen/me-screen";
import { translate } from "../i18n";
import { color } from "../theme";
import { useColorScheme } from "react-native";

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
  let textColor = color(useColorScheme()).text
  return (
    <Tab.Navigator
      screenOptions={(props: any) => {
        const { route } = props
        const name: any = route.name + '.title'
        return ({
          tabBarLabel: translate(name),
          gestureEnabled: false,
          tabBarStyle: {

          },
          tabBarActiveTintColor: color(useColorScheme()).text,
          tabBarInactiveTintColor: color(useColorScheme()).text2,
          tabBarIcon: ({ color }) => {
            let iconName: any = route.name
            if (iconName == 'shopcar') iconName = 'cart'
            if (iconName == 'me') iconName = 'person'
            if (iconName == 'classify') iconName = 'grid'
            return (
              <Ionicons
                name={iconName}
                color={color}
                size={45} />
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
