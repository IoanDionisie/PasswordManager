import { StyleSheet, Text, View } from 'react-native';

export default function FormHeader ({leftHeading, rightHeading, subHeading})  {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.heading}>{leftHeading} </Text>
                <Text style={styles.heading}>{rightHeading}</Text>
            </View>
            <Text style={styles.subHeading}>{subHeading}</Text>
        </>  
    );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#1b1b33'
    },
    subHeading: {
        fontSize: 18,
        color: '#1b1b33',
        textAlign: 'center'
    }
});
  