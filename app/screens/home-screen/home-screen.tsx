import React, { useEffect } from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, useColorScheme, View } from "react-native"
import { Screen } from "../../components"
export const HomeScreen = observer(function HomeScreen() {
  useEffect(() => {
    // const colorScheme = useColorScheme();
    console.log('colorScheme')
  }, [])
  return (
    <Screen style={styles.ROOT}>
      <View style={{ height: 100, width: 100, backgroundColor: 'red' }}></View>
    </Screen>
  )
})
const styles = StyleSheet.create({
  ROOT: {

  }
})
