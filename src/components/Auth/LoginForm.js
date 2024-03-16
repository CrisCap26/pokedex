import { StyleSheet, View, Text, TextInput, Button, Keyboard } from 'react-native'
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { initial } from 'lodash'

export default function LoginForm() {

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: (formValue) => {
            console.log("Formulario enviado...");
            console.log(formValue)
        },
    });
    return (
        <View>
            <Text style={styles.title}>Iniciar sesión</Text>
            <TextInput
                placeholder='Nombre de usuario'
                style={styles.input}
                autoCapitalize='none'
                value={formik.values.username}
                onChangeText={(text) => formik.setFieldValue('username', text) }
            />
            <TextInput
                placeholder='Contraseña'
                style={styles.input}
                autoCapitalize='none'
                secureTextEntry={true}
                value={formik.values.password}
                onChangeText={(text) => formik.setFieldValue('password', text)}
            />
            <Button title='Entrar' style={styles.button} onPress={formik.handleSubmit} />

            <Text style={styles.error}>{formik.errors.username}</Text>
            <Text style={styles.error}>{formik.errors.password}</Text>
        </View>
    )
}

function initialValues() {
    return {
        username: "",
        password: ""
    }
}

function validationSchema() {
    return {
        username: Yup.string().required("El usuario es obligatorio"),
        password: Yup.string().required("La contraseña es obligatorio"),
    }
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 15,
    },
    input: {
        height: 40,
        margin: 15,
        borderWidth: 1,
        padding: 11,
        borderRadius: 10,
    },
    button: {
        backgroundColor: "#fff"
    },
    error: {
        textAlign: 'center',
        color: '#f00',
        marginTop: 20
    },
})