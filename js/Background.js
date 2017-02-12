import React from 'react'
import { Image, View } from 'react-native'
import bgImage from './assets/bg_transparent.png'
//import bgImage from './assets/bg_solid.png'

import style from './Style'

export const BaseView = (props) => {
  return (
    <View
      {...props}
      style={[style.baseView, props.style]} />
  )
}

export const BgView = (props) => {
  const propStyle = {
    backgroundColor: 'transparent'
  }

  return (
    <Image
      source={bgImage}
      style={style.pageBackground}>
      <BaseView
        style={propStyle}
        {...props} />
    </Image>
  )
}
