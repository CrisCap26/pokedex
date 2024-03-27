import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { CustomBtn } from './Auth/UserData'

export default function NotLogged() {
    const navigation = useNavigation();

    const handleOnPress = () => {
        navigation.navigate("account")
    }
    return (
        <View style={styles.content}>
            <View style={styles.contentSecond}>
                <Text style={styles.text}>Para ver esta pantalla es necesario iniciar sesión</Text>
                <View>
                    <CustomBtn title='Log In' handleOnPress={handleOnPress} addStyles={styles} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        height: '100%',
        justifyContent: 'center'
    },
    contentSecond: {
        marginVertical: 50,
        paddingHorizontal: 50
    },
    text: {
        textAlign: 'center',
        fontSize: 25,
        marginBottom: 10
    },
    btn: {
        textAlign: 'center',
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
    },
})