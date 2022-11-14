import React from "react"

import { StyleSheet, TouchableOpacity, useColorScheme, View } from "react-native";
import { AutoImage, Button, Ionicons, Text } from "../../components";
import { color } from "../../theme";
import dp2px from "../../utils/dp2px";

interface ListProps {
  list: Array<any>
}
const List = (props: ListProps) => {
  const tips = [
    { key: 0, text: '没有更多了' },
    { key: 1, text: '加载中...' }
  ]
  const renderListItem = (item, index) => {
    return (
      <View style={styles.listItem} key={index}>
        <TouchableOpacity style={[styles.listItemMain, {
          backgroundColor: color(useColorScheme()).background,
          shadowColor: color(useColorScheme()).text
        }]}>

        </TouchableOpacity>
      </View>
    )
  }
  const renderNoMore = () => {
    return (<View style={styles.noMore}>
      <Text style={{ color: color(useColorScheme()).text3 }}>没有更多了</Text>
    </View>)
  }
  return <View style={styles.listBox}>
    {props.list.map(renderListItem)}
    {renderNoMore()}
  </View>
}
const styles = StyleSheet.create({
  listBox: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: dp2px(5)
  },
  listItem: {
    width: '50%'
  },
  listItemMain: {
    // borderWidth: 1,
    // borderColor: color().line,
    height: dp2px(400),
    padding: dp2px(10),
    margin: dp2px(5),
    borderRadius: dp2px(20),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 4,
  },
  noMore: {
    width: '100%',
    alignItems: 'center',
    height: dp2px(60),
    paddingVertical: dp2px(10)
  }
})
export default List;