import {View,Text, StyleSheet, Button} from 'react-native'
import { FormikInput } from '../components/FormikInput.jsx'
import { Formik } from 'formik'
import { registerValidationSchema } from '../schemas/registerSchema.js'
export const Register = () => {

    const initialValues = {
        username: '',
        email: '',
        password: ''
    }

    return (
        <Formik validationSchema={registerValidationSchema} initialValues={initialValues}>
            {({handleSubmit}) => {
                return (
                    <View style={styles.container}>
                    <Text style={{fontSize: 20, alignSelf: 'center', color: 'white'}}>Register</Text>
                    <Text style={styles.Text}>Username</Text>
                    <FormikInput style={styles.textInput} name='username'/>
                    <Text style={styles.Text}>Email</Text>
                    <FormikInput style={styles.textInput} name='email'/>
                    <Text style={styles.Text}>Password</Text>
                    <FormikInput style={styles.textInput} name='password'/>
                    <View style={styles.Button}>
                        <Button color='black' onPress={handleSubmit} title="Register"/>
                    </View>
                </View>
                )
            }}
        </Formik>

    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        backgroundColor: 'grey',
        marginHorizontal: 20,
        borderRadius: 20
    },
    Text: {
        color: 'white',
        marginStart: 55
    },
    textInput: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#999',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 10,
        width: 300,
        alignSelf: 'center',
        color: 'white'
    },
    Button: {
        alignSelf: 'center',
        marginVertical: 50,
        borderRadius: 50
    },
})