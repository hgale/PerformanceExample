
import { PropTypes } from 'react'
import { requireNativeComponent, View } from 'react-native'

var iface = {
  name: 'ImageView',
  propTypes: {
    src: PropTypes.object,
    ...View.propTypes
  },
}

module.exports = requireNativeComponent('RCTListView', iface)
