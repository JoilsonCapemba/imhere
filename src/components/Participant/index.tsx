import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

type ParticipantProps = {
  name: String,
  onRemove: ()=> void
}

export function Participant({name, onRemove}: ParticipantProps){
  return(
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
      </Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonAdd}> - </Text>
      </TouchableOpacity>
    </View>
  )
}