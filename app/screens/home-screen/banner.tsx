import React from "react"

import { StyleSheet, View } from "react-native";
import { AutoImage } from "../../components";
import dp2px from "../../utils/dp2px";

const Banner = ()=>{
  return <View style={styles.banner}>
    <AutoImage source={require('./banner.jpg')} 
    style={{width:'100%',height:'100%'}}></AutoImage>
  </View>
}
const styles = StyleSheet.create({
  banner:{
    width:'100%',
    height:dp2px(700),
    overflow:'hidden',
  }
})
export default Banner;