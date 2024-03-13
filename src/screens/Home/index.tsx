import {View ,Text, TouchableOpacity, TextInput, ScrollView, FlatList, Alert} from 'react-native'
import {styles} from './style'
import { Participant } from '../../components/Participant'
import { useState } from 'react'

export function Home(){

  //const participants = ['Joilson', 'Antonio', 'Idalina', 'Sandra', 'Sirila', 'Dadiva', 'Domingas', 'Selma', 'Maria', 'Antonio1', 'Idalina2', 'Sandra3', 'Sirila4']
  
  const [participants, setParticipants] = useState<string[]>([])
  const [participant, setParticipant] = useState('')  

  function handleAddParticipant(){
    if(participants.includes(participant)){
      return Alert.alert('Adicionar', `O participant ${participant} ja existe`)
    }

    setParticipants(prevState => [...prevState, participant])
    setParticipant('')
  }

  function handleRemoveParticipant(name: String){
    Alert.alert('Remover', `Deseja Remover ${name} da lista de participantes`, [
      {
        text: 'Sim',
        onPress: ()=> participants.pop()
      },
      {
        text: 'Nao',
        style: 'cancel'
      }
    ])
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
          onChangeText={newParticipant => setParticipant(newParticipant)}
          value={participant}
          //keyboardType='aqui coloca-se o tipo de teclado'
        />

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant} >
          <Text style={styles.buttonAdd}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Lista Usando FlatList */}

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Participant 
              key={item}
              name={item}
              onRemove={()=> handleRemoveParticipant(item)}/>

        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={()=>(
          <Text style={styles.ListEmpty}>Ainda nao tem participantes no evento</Text>
          )}
      />


      {/*
      Lista Usando ScrollView

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
      */}

    </View>
  )
}