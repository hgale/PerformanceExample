import { StyleSheet,  } from 'react-native'

export default StyleSheet.create({
  imageCellsContainer: {
    flexDirection: 'column',
    flex:1,
    justifyContent:'center',
    paddingTop: 20,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 36,
    elevation: 2,
    marginBottom: 20
  },
  cellContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 24,
    paddingRight: 24,
    elevation: 2
  },
  imageContainer: {
    height: 200,
    flex: 0.8,
    justifyContent:'flex-end'
  },
  cellTitle: {
    color: 'black',
    fontSize: 29,
    alignSelf: 'center',
    marginBottom: 16
  },
  baseView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 80,
    paddingRight: 12,
    paddingBottom: 20,
    paddingLeft: 12
  },
  pageBackground: {
    flex: 1,
    width: null,
    height: null
  }
})
