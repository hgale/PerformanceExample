import React from 'react'
import { View, Text, Image } from 'react-native'

import style from './Style'
//renderToHardwareTextureAndroid
const ImageRow = (props) => (
  <View style={style.cellContainer}>
    <Image style={style.imageContainer} source={{uri:props.small}}>
        <Text style={style.imageTitle}>{props.title}</Text>
        <Text style={style.imageSubTitle}>{props.subTitle}</Text>
    </Image>
  </View>
)
export default ImageRow
