import {View ,Text, TouchableOpacity, TextInput, ScrollView} from 'react-native'
import {styles} from './style'
import { Participant } from '../../components/Participant'

export function Home(){

  const participants = ['Joilson', 'Antonio', 'Idalina', 'Sandra', 'Sirila', 'Dadiva', 'Domingas', 'Selma', 'Maria', 'Antonio1', 'Idalina2', 'Sandra3', 'Sirila4']

  function handleAddParticipant(){
    return console.log('testando o botao')
  }

  function handleRemoveParticipant(name: String){
    console.log(`O participante ${name} foi removido com sucesso.`)
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

      <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map(participant =>(
            <Participant 
              key={participant}
              name={participant}
              onRemove={()=> handleRemoveParticipant(participant)}/>
            )
          )
        }
      </ScrollView>

    </View>
  )
}