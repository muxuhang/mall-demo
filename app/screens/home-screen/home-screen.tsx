import React, { useEffect } from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, useColorScheme, View } from "react-native"
import { Screen, Text } from "../../components"
import { useTheme } from "@react-navigation/native"
import Banner from "./banner"
import Menu from "./menu"
import List from "./list"
// 亮色暗色模式切换
// 中英文切换
export const HomeScreen = observer(function HomeScreen() {
  const colorScheme = useColorScheme()
  return (
    <Screen
      style={styles.ROOT}
      preset='scroll'
      unsafe
      edges={['left','right']}>
      <Banner />
      <Menu />
      <List list={[1, 2, 32, 4, 5, 6]} />
    </Screen>
  )
})
const styles = StyleSheet.create({
  ROOT: {

  }
})
