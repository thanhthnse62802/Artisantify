import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const image = { uri: "https://reactjs.org/logo-og.png" };

export const HomePage = () => (
    <View style={styles.container}>
        <ImageBackground source={require('./background.jpg')} style={styles.image}>
        </ImageBackground>
    </View>
);
