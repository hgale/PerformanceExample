import React from 'react'

import { FlickrImages } from './FlickrImages'
import { BgView } from './Background'

import ListViewCustom from './AndroidImageList'

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dataSource:{"images": FlickrImages}
    }
  }

  render() {
    return (
      <BgView>
      <ListViewCustom
         src={this.state.dataSource}
         style={{flex:1}}>
       </ListViewCustom>
      </BgView>
    )
  }
}

export default HomeScreen
