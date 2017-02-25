
import React from 'react'
import { View, Image } from 'react-native'

import style from './Style'

const ImageRow = (props) => (
  <View style={style.cellContainer}>
    <Image style={style.imageContainer} source={{uri:props.uri}}/>
  </View>
)
export default ImageRow
