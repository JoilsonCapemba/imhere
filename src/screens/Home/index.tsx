import {View ,Text, TouchableOpacity, TextInput} from 'react-native'
import {styles} from './style'
import { Participant } from '../../components/Participant'

export function Home(){

  function handleAddParticipant(){
    return console.log('testando o botao')
  }


  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento
      </Text>

      <Text style={styles.eventDate}>
        sabado 6 de Abril de 2024
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor='#fff'
          //keyboardType='aqui coloca-se o tipo de teclado'
        />

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonAdd}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant />
      <Participant />
      <Participant />
    </View>
  )
}