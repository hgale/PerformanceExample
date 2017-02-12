import React from 'react'
import { Text, View, Button, Dimensions, Image, ScrollView } from 'react-native'

import { CatImages } from './GiphyImages'

import { BgView } from './Background'
import style from './Style'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home Screen'
  }

  renderCells (data) {
    return data.map((cell, index) => {
      const {title, subTitle, small} = cell
      return (
        <View key={index} style={style.cellContainer}>
          <Image style={style.imageContainer} source={{uri:small}}>
            <View style={style.imageText}>
              <Text style={style.imageTitle}>{title}</Text>
              <Text style={style.imageSubTitle}>{subTitle}</Text>
            </View>
          </Image>
        </View>
      )
    })
  }

  renderImageCells (cellTitle, cellData) {
    return (
      <BgView>
      <View key={cellTitle} style={style.imageCellsContainer}>
        <Text style={style.cellTitle}>{cellTitle}</Text>
        {this.renderCells(cellData)}
      </View>
      </BgView>
    )
  }

  render() {
    const { height } = Dimensions.get('window')
    const { navigate } = this.props.navigation
    let cells = this.renderImageCells('Cats', CatImages)
    return (
      <View style = {{backgroundColor: 'red', justifyContent: 'center'}}>
        <Button
          onPress={() => navigate('Second')}
          title="Go to second Screen"
        />
        <ScrollView contentContainerStyle={{justifyContent: 'center'}} style={[{height:height}]}>
          {cells}
        </ScrollView>
      </View>
    );
  }
}

export default HomeScreen
