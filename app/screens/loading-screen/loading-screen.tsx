import React, { useEffect } from "react"
import { observer } from "mobx-react-lite"
import { ActivityIndicator, StyleSheet } from "react-native"
import { Screen } from "../../components"
import { StackActions, useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"

export const LoadingScreen = observer(function LoadingScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  useEffect(() => {
    _authLogin()
  }, [])
  const _authLogin = () => {
    const is_login = true
    if (is_login) {
      navigation.dispatch(StackActions.replace('mainStack'))
    } else {
      navigation.dispatch(StackActions.replace('authStack'))
    }
  }
  return (
    <Screen style={styles.ROOT}>
      <ActivityIndicator />
    </Screen>
  )
})

const styles = StyleSheet.create({
  ROOT: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})