import { useNavigation } from "@react-navigation/native";
import React from "react"

import { StyleSheet, View } from "react-native";
import { AutoImage, Button, Ionicons, Text } from "../../components";
import { MainProp } from "../../navigators/main-navigator";
import { color } from "../../theme";
import dp2px from "../../utils/dp2px";

const Menu = () => {
  const list = [
    { name: "翻页", path: "pager" }
  ]
  const navigation = useNavigation<MainProp>()
  return <View style={styles.menu}>
    {list.map((item, index) => <Button
      key={index}
      preset="link"
      style={styles.menuItem}
      onPress={() => {
        navigation.navigate('pager')
      }}>
      <Ionicons name='square' size={90} />
      <Text>{item.name}</Text>
    </Button>)}
  </View>
}
const styles = StyleSheet.create({
  menu: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: dp2px(30)
  },
  menuItem: {
    width: '25%',
    height: dp2px(130),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
export default Menu;