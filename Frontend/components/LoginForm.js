import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import FormContainer from './FormContainer';
import FormInput from './FormInput';
import FormSubmitButton from './FormSubmitButton';

export default function LoginForm() {
   return (
    <>
        <FormContainer>
           <FormInput title='Email' placeholder='example@email.com'/>
           <FormInput title='Password' placeholder='********'/>
           <FormSubmitButton title='Login'/>
        </FormContainer>
    </>
   ) 
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center", 
        alignItems: "center", 
        width: Dimensions.get('window').width
    }
});