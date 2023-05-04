import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Image } from 'react-native';
import { Switch } from 'react-native-gesture-handler';

const ID_USERNAME = 'luuvinhloi';
const IO_KEY = 'aio_Rfog39RrGKFpQcr1Ef5lIolycj9S';


const Control = props => {
    const [light, setLight] = useState(false)
    const toggleLight = (value) => {
        setLight(value)
    }

    const [pump, setPump] = useState(false)
    const togglePump = (value) => {
        setPump(value)
    }

    const [warn, setWarn] = useState(false)
    const toggleWarn = (value) => {
        setWarn(value)
    }

    const sendSignalLight = async (lightValue) => {
        try {
        let signal = 0;
        if (lightValue === true) {
            signal = 1
        }
        else signal = 0
        const response = await fetch(`https://io.adafruit.com/${ID_USERNAME}/feeds/button-1/data`, {
            method: 'POST',
            headers: {
            'Content-Type': 'app.js',
            'X-AIO-Key': IO_KEY
            },
            body: JSON.stringify({ value: signal  })
        })
        const data = await response.json()
        console.log(data)
        } catch (error) {
        console.log(error)
        }
    }

    const sendSignalPump = async (pumpValue) => {
        try {
        let signal = 0;
        if (pumpValue === true) {
            signal = 1
        }
        else signal = 0
        const response = await fetch(`https://io.adafruit.com/${ID_USERNAME}/feeds/button-2/data`, {
            method: 'POST',
            headers: {
            'Content-Type': 'app.js',
            'X-AIO-Key': IO_KEY
            },
            body: JSON.stringify({ value: signal  })
        })
        const data = await response.json()
        console.log(data)
        } catch (error) {
        console.log(error)
        }
    }

    const sendSignalWarn = async (warnValue) => {
        try {
        let signal = 0;
        if (warnValue === true) {
            signal = 1
        }
        else signal = 0
        const response = await fetch(`https://io.adafruit.com/${ID_USERNAME}/feeds/button-3/data`, {
            method: 'POST',
            headers: {
            'Content-Type': 'app.js',
            'X-AIO-Key': IO_KEY
            },
            body: JSON.stringify({ value: signal  })
        })
        const data = await response.json()
        console.log(data)
        } catch (error) {
        console.log(error)
        }
    }

    return (
        <View style={styles.container}>
        <View style={styles.frame}>
            <Image
                source={require('../Device/image/light-icon.png')}
                style={styles.image}
            />
            <View style={styles.textContainer}>
                <Text style={styles.title}>HỆ THỐNG ĐÈN</Text>
                <Switch value={light} onValueChange={toggleLight} />
            </View>
        </View>
        <View style={styles.frame}>
            <Image
                source={require('../Device/image/watering-system-icon.png')}
                style={styles.image}
            />
            <View style={styles.textContainer}>
                <Text style={styles.title}>HỆ THỐNG TƯỚI</Text>
                <Switch value={pump} onValueChange={togglePump} />
            </View>
        </View>
        <View style={styles.frame}>
            <Image
                source={require('../Device/image/warning-icon.png')}
                style={styles.image}
            />
            <View style={styles.textContainer}>
                <Text style={styles.title}>HỆ THỐNG CẢNH BÁO</Text>
                <Switch value={warn} onValueChange={toggleWarn} />
            </View>
        </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 40,
    },
    
    frame: {
        width: 290,
        height: 150,
        borderRadius: 10,
        backgroundColor: '#f7f7f7',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 25,
        flexDirection: 'row',
        alignItems: 'center',
    },
    
    image: {
        width: 65,
        height: 65,
        marginLeft: 20,
        marginRight: 10,
        resizeMode: 'contain',
    },
    
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    
    title: {
        fontSize: 20,
        color: 'green',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default Control;