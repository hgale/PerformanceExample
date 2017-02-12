import { AppRegistry } from 'react-native'
import { StackNavigator } from 'react-navigation'

import HomeScreen from './js/HomeScreen'
import SecondScreen from './js/SecondScreen'
import LastScreen from './js/LastScreen'

const Root = StackNavigator({
  Home: { screen: HomeScreen },
  Second: { screen: SecondScreen },
  Last: { screen: LastScreen }
})

AppRegistry.registerComponent('PerformanceExample', () => Root)
