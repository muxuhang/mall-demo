import React from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, View, ViewStyle } from "react-native"
import { Button, Icon, Input, Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import main from "../../theme/main"
import dp2px from "../../utils/dp2px"
import { StackActions, useNavigation } from "@react-navigation/native"
export const LoginScreen = observer(function LoginScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  const _login = () => {
    navigation.dispatch(StackActions.replace('mainStack'))

  }
  const renderForm = () => {
    return (
      <View style={{ margin: dp2px(40) }}>
        <Input placeholder="请输入手机号" containerStyle={styles.Input}></Input>
        <Input placeholder="请输入密码" containerStyle={styles.Input}></Input>
        <View style={main.FlexRowBox}>
          <Button preset='link' textStyle={styles.Link}>注册账号</Button>
          <View style={{ flex: 1 }}></View>
          <Button preset='link' textStyle={styles.Link}>忘记密码</Button>
        </View>
        <Button style={{ marginTop: dp2px(100) }}
          onPress={_login}>登录</Button>
      </View>
    )
  }
  return (
    <Screen
      unsafe
      edges={['top', 'bottom']}
      style={[main.ROOT, {
        flex: 1,
        display: 'flex',
        paddingVertical:dp2px(30)
      }]}>
      <Text preset='header' style={{
        marginBottom: dp2px(60),
        marginHorizontal: dp2px(40)
      }}>登录</Text>
      {renderForm()}
      <View style={{ flex: 1 }}></View>
      <View style={{ alignItems: 'center' }}>
        <Icon icon="wx" size={50}></Icon>
        <Text preset='fieldLabel'>微信登录</Text>
      </View>
    </Screen>
  )
})
const styles = StyleSheet.create({
  Input: {
    marginBottom: dp2px(30)
  },
  Link: {
    color: color.palette.lightBlack,
    fontSize: dp2px(26)
  }
})
