import React from 'react'
import { Text, View, Button, Dimensions, Image, ScrollView } from 'react-native'

import { FlickrImages } from './FlickrImages'

import { BgView } from './Background'
import style from './Style'

class HomeScreen extends React.Component {
  renderCells (data) {
    return data.map((cell, index) => {
      const {uri} = cell
      return (
        <View key={index} style={style.cellContainer}>
          <Image style={style.imageContainer} source={{uri:uri}}>
          </Image>
        </View>
      )
    })
  }

  renderImageCells (cellData) {
    return (
      <View style={style.imageCellsContainer}>
        {this.renderCells(cellData)}
      </View>
    )
  }

  render() {
    const { height } = Dimensions.get('window')
    let cells = this.renderImageCells(FlickrImages)
    return (
      <BgView>
        <ScrollView contentContainerStyle={{justifyContent: 'center'}} style={[{height:height}]}>
          {cells}
        </ScrollView>
      </BgView>
    );
  }
}

export default HomeScreen
