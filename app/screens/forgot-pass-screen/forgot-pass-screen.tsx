


import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, useColorScheme, View, ViewStyle } from "react-native"
import { Button, Input, Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import AuthBack from "../login-screen/back"
import dp2px from "../../utils/dp2px"
import main from "../../theme/main"
import { translate } from "../../i18n"
export const ForgotPassScreen = observer(function ForgotPassScreen() {
  const _register = () => {

  }
  const renderForm = () => {
    const [time, setTime] = useState(60)
    const _getCode = () => {
      let t = time
      setTime(t--)
      const timmer = setInterval(() => {
        setTime(t--)
        if (t <= 0) {
          clearInterval(timmer)
          setTime(60)
        }
      }, 1000);
    }
    return (
      <View style={{ margin: dp2px(40) }}>
        <Input
          placeholder={translate('auth.placeholder.phone')}
          containerStyle={styles.Input}></Input>
        <Input
          placeholder={translate('auth.placeholder.authCode')}
          containerStyle={styles.Input}
          button={<Button
            preset="link"
            onPress={_getCode}
            disabled={time != 60}
            textStyle={{ color: color().palette.blue }}>
            {time == 60 ? translate('common.getCode') : time.toString()}
          </Button>}></Input>
        <Input
          placeholder={translate('auth.placeholder.password')}
          containerStyle={styles.Input}></Input>
        <Input
          placeholder={translate('auth.placeholder.confirmPass')}
          containerStyle={styles.Input}></Input>
        <Button style={{ marginTop: dp2px(100) }}
          onPress={_register}
          tx="auth.register.title"></Button>
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
      <AuthBack></AuthBack>
      <Text preset='header' style={{
        marginBottom: dp2px(60),
        marginHorizontal: dp2px(40)
      }} tx="auth.forgotPass.title"></Text>
      {renderForm()}
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