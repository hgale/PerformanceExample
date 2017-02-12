import React from 'react'
import { View, Button, Dimensions } from 'react-native'

class SecondScreen extends React.Component {
  static navigationOptions = {
    title: 'Second Screen'
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style = {{backgroundColor: 'blue', justifyContent: 'center'}}>
        <Button
          onPress={() => navigate('Last')}
          color='red'
          title='Last Screen'
        />
      </View>
    );
  }
}

export default SecondScreen
