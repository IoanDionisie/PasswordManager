import { Dimensions, StyleSheet, Text, View } from 'react-native';
import FormContainer from './FormContainer';

export default function LoginForm() {
   return (
    <>
        <FormContainer>
            <Text style={{fontSize: 50, fontWeight: "bold"}}>Login</Text>
        </FormContainer>
    </>
   ) 
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "black",
        width: Dimensions.get('window').width
    }
});