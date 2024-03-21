import React from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'
import useAuth from '../../hooks/useAuth'

export default function UserData() {
    const { auth, logout } = useAuth();
    return (
        <View style={styles.content}>
            <View style={styles.titleBlock}>
                <Text style={styles.title}>Bienvenido,</Text>
                <Text style={styles.title}>{`${auth.firstName} ${auth.lastName}`}</Text>
            </View>

            <View style={styles.dataContent}>
                <ItemMenu title="Nombre" text={`${auth.firstName} ${auth.lastName}`} />
                <ItemMenu title="Username" text={auth.username} />
                <ItemMenu title="Email" text={auth.email} />
                <ItemMenu title="Total Favoritos" text={`0 Pokemons`} />
            </View>

            {/* <View style={styles.btnLogout}>
                <Button title='Cerrar sesión' onPress={logout} />
            </View> */}

            <CustomBtn title="Logout" handleOnPress={logout} />

        </View>
    )
}

function ItemMenu(props) {
    const { title, text } = props;

    return (
        // <View style={styles.contentComp}>
        //     <Text style={styles.textComp}>{title}: </Text>
        //     <Text style={styles.textComp}>{text}</Text>
        // </View>
        <View style={styles.itemMenu}>
            <Text style={styles.itemMenuTitle}>{title}:</Text>
            <Text>{text}</Text>
        </View>
    )
}

export function CustomBtn(props) {
    const { title, handleOnPress } = props;
    return (
       <View style={styles.contentBtn}>
         <TouchableOpacity
            style={styles.btnCustom}
            onPress={handleOnPress}
        >
            <Text style={styles.textBtn}>{title}</Text>
        </TouchableOpacity>
       </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    titleBlock: {
        marginBottom: 30,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
    },
    dataContent: {
        marginBottom: 20,
        // backgroundColor: '#949fa4',
        // borderRadius: 5,
        // padding: 8
    },
    contentComp: {
        flexDirection: 'row',
        margin: 1,
    },
    textComp: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'normal',
    },
    itemMenu: {
        flexDirection: 'row',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: '#CFCFCF',
    },
    itemMenuTitle: {
        fontWeight: 'bold',
        paddingRight: 10,
        width: 120,
    },
    btnLogout: {
        paddingTop: 40,
        borderRadius: 10
    },
    contentBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
    },
    btnCustom: {
        width: "100%",
        marginTop: 30,
        backgroundColor: "#66ace8",
        padding: 10,
        borderRadius: 8,
        alignItems: 'center'
    },
    textBtn: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
})