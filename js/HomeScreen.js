import React from 'react'
import { ListView } from 'react-native'

import { FlickrImages } from './FlickrImages'
import ImageRow from './ImageRow'
import { BgView } from './Background'
import style from './Style'

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.uri !== r2.uri})
    this.state = {
      dataSource: ds.cloneWithRows(FlickrImages)
    }
  }

  render() {
    return (
      <BgView>
        <ListView
          contentContainerStyle={{justifyContent: 'center'}}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <ImageRow {...rowData} />}
        />
      </BgView>
    )
  }
}

export default HomeScreen
