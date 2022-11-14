import React, { useRef } from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, View, ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import main from "../../theme/main"
import PagerView from "react-native-pager-view"

export const PagerScreen = observer(function PagerScreen() {
  const pagerRef = useRef()
  const pageList = [1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2]
  return (
    <Screen style={main.ROOT} unsafe edges={['bottom']}>
      <PagerView
        ref={pagerRef}
        style={styles.pagerView}
        initialPage={0}
        transitionStyle={'curl'}
      // onPageScroll={handler}
      >
        {pageList.map((item, index) => {
          return <View
            style={[styles.pageStyle, {
              backgroundColor: `#dddddd`
            }]}
            key={index}>
            <Text style={{ color: `#48423a` }}>page{index}</Text>
          </View>
        })}
      </PagerView>
    </Screen>
  )
})
const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
  pageStyle: {

  }
})
