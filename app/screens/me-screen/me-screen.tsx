import React from "react"
import { observer } from "mobx-react-lite"
import { Switch, useColorScheme, ViewStyle } from "react-native"
import { Button, Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import main from "../../theme/main"

export const MeScreen = observer(function MeScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={main.ROOT}>
      <Button text="设置"
       onPress={()=>{
        useColorScheme()
       }}></Button>
       <Switch></Switch>
    </Screen>
  )
})
