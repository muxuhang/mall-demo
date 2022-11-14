import React from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, useColorScheme, View } from "react-native"
import { Button, Icon, Input, Ionicons, Screen, Text } from "../../components"
import { color } from "../../theme"
import main from "../../theme/main"
import dp2px from "../../utils/dp2px"
import { StackActions, useNavigation } from "@react-navigation/native"
import { translate } from "../../i18n"
import { AuthProp } from "../../navigators/auth-navigator"
import AuthBack from "./back"
export const LoginScreen = observer(function LoginScreen() {
  const navigation = useNavigation<AuthProp>()
  const _login = () => {
    navigation.dispatch(StackActions.replace('mainStack'))

  }
  const renderForm = () => {
    return (
      <View style={{ margin: dp2px(40) }}>
        <Input
          placeholder={translate('auth.placeholder.phone')}
          containerStyle={styles.Input}></Input>
        <Input
          placeholder={translate('auth.placeholder.password')}
          containerStyle={styles.Input}></Input>
        <View style={main.FlexRowBox}>
          <Button preset='link'
            textStyle={[styles.Link, {
              color: color(useColorScheme()).text2
            }]}
            onPress={() => navigation.navigate('register')}
            tx="auth.register.title"></Button>
          <View style={{ flex: 1 }}></View>
          <Button preset='link'
            textStyle={[styles.Link, {
              color: color(useColorScheme()).text2
            }]}
            onPress={() => navigation.navigate('forgotPass')}
            tx="auth.forgotPass.title"></Button>
        </View>
        <Button style={{ marginTop: dp2px(100) }}
          onPress={_login}
          tx="auth.login.title"></Button>
      </View >
    )
  }
  return (
    <Screen
      unsafe
      edges={['top', 'bottom']}
      style={[main.ROOT, {
        flex: 1,
        display: 'flex',
        paddingVertical: dp2px(30)
      }]}>
      <AuthBack back={false} ></AuthBack>
      <Text preset='header' style={{
        marginBottom: dp2px(60),
        marginHorizontal: dp2px(40)
      }} tx="auth.login.title"></Text>
      {renderForm()}
      <View style={{ flex: 1 }}></View>
      <View style={{ alignItems: 'center' }}>
        <Ionicons name="logo-twitter" size={90} />
        <Text preset='fieldLabel'
          style={{ marginTop: dp2px(20) }}
          tx="auth.login.wx"></Text>
      </View>
    </Screen>
  )
})
const styles = StyleSheet.create({
  Input: {
    marginBottom: dp2px(30)
  },
  Link: {
    fontSize: dp2px(26)
  }
})
