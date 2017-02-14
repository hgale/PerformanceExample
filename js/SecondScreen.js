import React from 'react'
import { View, Button, Dimensions } from 'react-native'
import { BgView } from './Background'

class SecondScreen extends React.Component {
  static navigationOptions = {
    title: 'Second Screen'
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <BgView>
      <View style = {{backgroundColor: 'blue', justifyContent: 'center'}}>
      <Button
        onPress={() => navigate('Last')}
        color='red'
        title='Go toLast Screen'
      />
      </View>
      </BgView>      
    );
  }
}

export default SecondScreen
