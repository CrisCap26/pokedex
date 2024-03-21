import { StyleSheet, View, Text, TextInput, Button, Keyboard, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { user, userDetails } from '../../utils/userDB'
import useAuth from '../../hooks/useAuth'

export default function LoginForm() {
    const [error, setError] = useState("");
    const { login } = useAuth();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: (formValue) => {
            setError("")
            const { username, password } = formValue
            if (username !== user.username || password !== user.password) {
                setError("Usuario o contraseña incorrecto")
                //console.log("Usuario o contraseña incorrecto")
                //ToastAndroid.show("Usuario o contraseña incorrecto", ToastAndroid.SHORT)
            } else {
                //console.log("Login correcto :)");
                login(userDetails)
                ToastAndroid.show("Login correcto :)", ToastAndroid.SHORT)
                console.log(userDetails);
            }
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
                onChangeText={(text) => formik.setFieldValue('username', text)}
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

            <Text style={styles.error}>
                {formik.errors.username}{"\n"}{error}
                {"\n"}{formik.errors.password}
            </Text>

            {/* <Text style={styles.error}>{formik.errors.username}</Text>
            <Text style={styles.error}>{formik.errors.password}</Text> */}
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