import React from 'react'
import { View, Dimensions } from 'react-native'

class LastScreen extends React.Component {
  static navigationOptions = {
    title: 'Last Screen'
  }
  render() {
    const { width } = Dimensions.get('window')
    return (
      <View style = {{backgroundColor: 'green', width: width, height: 40}} />
    );
  }
}

export default LastScreen
