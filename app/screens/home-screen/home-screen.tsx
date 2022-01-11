import React, { useEffect } from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, useColorScheme, View } from "react-native"
import { Screen, Text } from "../../components"
import { useTheme } from "@react-navigation/native"
import Banner from "./banner"
// 亮色暗色模式切换
// 中英文切换
export const HomeScreen = observer(function HomeScreen() {
  const colorScheme = useColorScheme()
  return (
    <Screen style={styles.ROOT} unsafe>
      <Banner />

    </Screen>
  )
})
const styles = StyleSheet.create({
  ROOT: {

  }
})
