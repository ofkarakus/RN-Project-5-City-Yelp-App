import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 17,
    paddingLeft: 60,
    flex: 1,
  },
  backBtn: {
    marginLeft: 5
  },
  backBtnText: {
    color: 'blue'
  },
  inputView : {
    backgroundColor: 'lightgray',
    borderRadius: 5,
    marginHorizontal: 7
  },
  input: {
    padding: 5
  }
})

export default styles;