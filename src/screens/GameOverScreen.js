import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from "../components/Card";

const GameOverScreen = ({guess_count}) => {
    return (

        <View style={styles.container}>
            <Card style={styles.cardStyle}>
                <Text style={styles.text1}>Game over with:</Text>
                <NumberContainer>{guess_count}</NumberContainer>
                <Text style={styles.text2}>Guesses</Text>
            </Card>
        </View>

    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    cardStyle:{
        padding:30,
    },
    text1:{
        justifyContent:"center",
        alignSelf:"center",
        fontWeight:"bold",
        fontSize:20,
        color:"maroon",
    },
    text2:{
        justifyContent:"center",
        alignSelf:"center",
        fontWeight:"bold",
        fontSize:50,
        color:"red",
    }
});

export default GameOverScreen;