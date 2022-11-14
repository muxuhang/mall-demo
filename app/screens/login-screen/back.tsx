import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View } from "react-native"
import { Button, Icon, Ionicons } from "../../components"
import main from '../../theme/main'
import dp2px from '../../utils/dp2px'
const AuthBack = ({ back = true }: any) => {
  const navigation = useNavigation()
  return <View style={[main.FlexRowBox, {
    height: dp2px(80),
    marginBottom: dp2px(20),
    paddingHorizontal: dp2px(30)
  }]}>
    {back ? <Button preset='link' onPress={() => navigation.goBack()}>
      {/* <Icon icon="back" /> */}
      <Ionicons name='arrow-back-outline' size={60} />
    </Button> : null}
    <View style={{ flex: 1 }}></View>
  </View>
}
export default AuthBack;