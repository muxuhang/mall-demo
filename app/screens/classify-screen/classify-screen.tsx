import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native"
import { Icon, Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import main from "../../theme/main"
import { FlatList } from "react-native-gesture-handler"
import dp2px from "../../utils/dp2px"

export const ClassifyScreen = observer(function ClassifyScreen() {
  const [leftList, setLeftList] = useState([])
  const [leftIndex, setLeftIndex] = useState(0)
  const [rightList, setRightList] = useState([])
  useEffect(() => {
    getList(leftIndex)
  }, [leftIndex])
  const getList = (index) => {
    const list = [{
      title: "男装",
      id: 1,
      children: [
        { title: "短外套", id: 11 },
        { title: "卫衣", id: 12 },
        { title: "T恤", id: 13 },
        { title: "羽绒服", id: 14 },
        { title: "衬衫", id: 15 },
        { title: "棉衣", id: 16 },
        { title: "毛衣", id: 17 },
        { title: "羊绒衫", id: 18 },
        { title: "毛衣", id: 19 },
      ]
    }, {
      title: "女装",
      id: 2,
      children: [
        { title: "短外套", id: 21 },
        { title: "卫衣", id: 22 },
        { title: "T恤", id: 23 },
        { title: "羽绒服", id: 24 },
        { title: "衬衫", id: 25 },
        { title: "棉衣", id: 26 },
        { title: "毛衣", id: 27 }
      ]
    }]
    setLeftList(list)
    console.log(list[index].children.length)
    setRightList(list[index].children)
  }
  const renderLeftBox = () => {
    return <View style={styles.leftBox}>
      <FlatList data={leftList}
        renderItem={({ item, index }) => <TouchableOpacity
          style={[styles.leftItem, index == leftIndex ? {
            backgroundColor: color().background
          } : {}]}
          onPress={() => setLeftIndex(index)}>
          <Text>{item.title}</Text>
        </TouchableOpacity>
        }></FlatList>
    </View>
  }
  const renderRightBox = () => {
    return <View style={styles.rightBox}>
      <FlatList data={rightList}
        contentContainerStyle={styles.rightListBox}
        renderItem={({ item }) => <TouchableOpacity
          style={[styles.rightItem]}>
          <Icon icon='em' size={100}></Icon>
          <Text>{item.title}</Text>
        </TouchableOpacity>}></FlatList>
    </View>
  }
  return (
    <Screen style={[main.ROOT, main.FlexRowBox, { height: '100%' }]} unsafe>
      {renderLeftBox()}
      {renderRightBox()}
    </Screen>
  )
})
const styles = StyleSheet.create({
  leftBox: {
    width: '33%',
    height: '100%',
    backgroundColor: color().line,
    borderRightWidth: 1,
    borderRightColor: color().line
  },
  leftItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: "center",
    padding: dp2px(10),
    paddingVertical:dp2px(20)
  },
  rightBox: {
    flex: 1,
    height: '100%',
    display: "flex",
    alignItems: 'center',
    alignSelf: 'center'
  },
  rightListBox: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  rightItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: "center",
    padding: dp2px(15),
  }
})
