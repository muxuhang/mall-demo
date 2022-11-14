import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, View } from "react-native"
import { Button, Checkbox, Screen, Text } from "../../components"
import { color } from "../../theme"
import main from "../../theme/main"
import dp2px from "../../utils/dp2px"
import { FlatList } from "react-native-gesture-handler"

export const ShopcarScreen = observer(function ShopcarScreen() {
  const [list, setList] = useState([])
  const type = 'id'
  const [selectArr, setSelectArr] = useState([])
  const [selectAll, setSelectAll] = useState(false)
  useEffect(() => {
    setList([
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 }
    ])
  }, [])
  useEffect(() => {
    setSelectAll(selectArr.length == list.length)
  }, [selectArr])
  const getSelectAllList = () => {
    const result = []
    list.map((item) => {
      result.push(item[type])
    })
    return result
  }
  const renderFooter = () => {
    return (
      <View style={styles.footer}>
        <Checkbox
          onToggle={() => {
            setSelectAll(!selectAll)
            setSelectArr(!selectAll ? getSelectAllList() : [])
          }} value={selectAll}
          text="全选"
          shape='round' />
        <View style={{ flex: 1 }}></View>
        <Text style={styles.total}>合计：100</Text>
        <Button>购买</Button>
      </View>
    )
  }
  const renderItem = ({ item, index }) => {
    return <View key={index} style={[main.FlexRowBox, styles.item]}>
      <Checkbox
        onToggle={() => {
          let arr = selectArr
          const key = arr.indexOf(item[type])
          if (key >= 0) {
            arr = arr.slice(0, key).concat(arr.slice(key + 1))
          } else {
            arr = [...arr, item[type]]
          }
          setSelectArr(arr)
        }} value={selectArr.indexOf(item[type]) >= 0}
        shape='round' />
      <View style={styles.itemAvatar}>
      </View>
      <View>
        <Text>标题</Text>
        <Text>副标题</Text>
        <Text>介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍</Text>
        <View>
          <Text>价格</Text>
          <Text>+1-</Text>
        </View>
      </View>
    </View>
  }
  return (
    <Screen style={main.ROOT} unsafe>
      <FlatList data={list} renderItem={renderItem} style={{ flex: 1 }}></FlatList>
      {renderFooter()}
    </Screen>
  )
})
const styles = StyleSheet.create({
  footer: {
    height: dp2px(100),
    backgroundColor: color().background,
    borderTopColor: color().palette.offWhite,
    borderTopWidth: dp2px(1),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    paddingHorizontal: dp2px(30)
  },
  total: {
    marginRight: dp2px(20)
  },
  item: {
    padding: dp2px(20),
    borderBottomColor: color().palette.offWhite,
    borderBottomWidth: dp2px(2)
  },
  itemAvatar: {
    height: dp2px(200),
    width: dp2px(200),
    backgroundColor: color().palette.offWhite
  }
})
