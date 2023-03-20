import { StyleSheet, Text } from 'react-native';
import FormContainer from './FormContainer';
import FormInput from './FormInput';
import FormSubmitButton from './FormSubmitButton';

export default function RegisterForm() {
   return (
    <>
        <FormContainer>
            <FormInput title='Username' placeholder='JohnSmith'/>
            <FormInput title='Email' placeholder='example@email.com'/>
            <FormInput title='Password' placeholder='********'/>
            <FormInput title='Confirm Password' placeholder='********'/>
            <FormSubmitButton title='Register'/>
        </FormContainer>
    </>
   ) 
}

const styles = StyleSheet.create({});