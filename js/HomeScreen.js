import React from 'react'
import { Text, View, Button, Dimensions, Image, ScrollView, ListView } from 'react-native'
//import { SGListView } from 'react-native-sglistview'
//var SGListView = require('react-native-sglistview');
import { CatImages } from './GiphyImages'

import ImageRow from './ImageRow'
import { BgView } from './Background'
import style from './Style'

import ListViewCustom from './AndroidImageList'

var LIST_VIEW = "listview";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
/*
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.small !== r2.small})
    this.state = {
      dataSource: ds.cloneWithRows(CatImages)
    }
*/

    var array = [];
    for(var i  = 0; i < CatImages.length; i++){
      catImage = CatImages[i]
      array.push({"uri" : catImage.small})
    }
    this.state = {
      dataSource:{"images": array}
    };
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
      <View key={cellTitle} style={style.imageCellsContainer}>
        <Text style={style.cellTitle}>{cellTitle}</Text>
        {this.renderCells(cellData)}
      </View>
    )
  }
  /*
  render() {
    const { height } = Dimensions.get('window')
    let cells = this.renderImageCells('Cats', CatImages)

    return (
      <BgView>
        <ScrollView contentContainerStyle={{justifyContent: 'center'}} style={[{height:height}]}>
          {cells}
        </ScrollView>
      </BgView>
    )
  }
  */
  render () {
    /*
    return (
      <BgView>
        <SGListView
          initialListSize={3}
          pageSize={6}
          contentContainerStyle={{justifyContent: 'center'}}
          dataSource={this.state.dataSource}
          stickyHeaderIndices={[]}
          onEndReachedThreshold={1000}
          scrollRenderAheadDistance={1000}
          ref={LIST_VIEW}
          renderRow={(rowData) => <ImageRow {...rowData} />}
        />
      </BgView>
    )
*/
/*
    return (
      <BgView>
        <ListView
          initialListSize={3}
          pageSize={3}
          contentContainerStyle={{justifyContent: 'center'}}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <ImageRow {...rowData} />}
        />
      </BgView>
    )
    */

return (
  <BgView>
    <ListViewCustom
      src={this.state.dataSource}
      style={{flex:1,width:Dimensions.get('window').width,padding:0,margin:0}}>
    </ListViewCustom>
  </BgView>
)

  }
}

export default HomeScreen
