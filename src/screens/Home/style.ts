import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#111',
    padding: 24,
  },

  eventName:{
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10
  },

  eventDate:{
    color: '#6b6b6b',
    marginBottom: 5
  },

  input:{
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 7,
    marginBottom: 10,
    flex: 1,
    marginRight: 5,
    color: '#fff'
  },

  button:{
    backgroundColor: 'green',
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

  //to test

  participantname:{
    color: '#fff',
    fontSize: 20,
    alignSelf: 'center'
  },

  form:{
    flexDirection: 'row',
    marginBottom: 10
  },
  ListEmpty:{
    color: '#fff',
    fontSize: 14
  }
})