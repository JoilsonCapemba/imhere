import { View, Text } from 'react-native';
import { styles } from './style';

export function Participant(){
  return(
    <View style={styles.container}>
      <Text style={styles.name}>
        Participante 1
      </Text>
    </View>
  )
}