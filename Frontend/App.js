import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import FormHeader from './components/FormHeader';
import FormSelectorButton from './components/FormSelectorButton';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

export default function App() {
  const appTitle = 'Password Manager';
  return (
  <View style={{flex: 1, paddingTop: 60, height: '100%'}}>
      <View style={{height: 80}}>
        <FormHeader leftHeading='Welcome' rightHeading='Back' subHeading={appTitle}/>
      </View>
      <View style={{flexDirection: "row",  paddingHorizontal: 20, marginBottom: 20}}>
        <FormSelectorButton 
        backgroundColor="rgba(27,27,51,1)" 
        title="Login"
        style={styles.borderLeft} />
        <FormSelectorButton 
        backgroundColor="rgba(27,27,51,0.4)" 
        title="Register"  
        style={styles.borderRight} />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <LoginForm/>
        <RegisterForm/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderLeft: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  }, 
  borderRight: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8
  }
});
