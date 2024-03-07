import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container:{
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },
  name:{
    color: '#fff',
    fontSize: 16,
    flex: 1,
    marginLeft: 5
  },
  button:{
    backgroundColor: 'red',
    borderRadius: 5,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonAdd:{
    color: '#fff',
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },
})