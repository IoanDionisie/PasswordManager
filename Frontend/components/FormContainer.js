import { View, Text, Dimensions, StyleSheet } from 'react-native'

export default function FormContainer({children}) {
  return (
    <>
        <View style={styles.container}>
            <Text>{children}</Text>
        </View>
    </>
  )
}
const styles = StyleSheet.create({
    container: { 
        width: Dimensions.get('window').width,
        paddingHorizontal: 20
    }
})