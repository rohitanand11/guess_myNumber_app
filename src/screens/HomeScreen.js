import React ,{useState} from 'react';
import {StyleSheet,View} from 'react-native';

import Header from '../components/Header';
import StartGameScreen from '../screens/StartGameScreen';
import GameScreen from './GameScreen';
import GameOverScreen from './GameOverScreen';

const HomeScreen = () => {

    const [useNumber,SetUseNumber] = useState('');
    const [guessCountInHomeScreen,SetguessCountInHomeScreen] =  useState(0);

    let Choose_screen;

    const useNumberHandler = (pInput) => {    
        SetUseNumber (pInput);
    };

    const noOfGuessesHandler = (pValue) => {
        SetguessCountInHomeScreen(pValue);
    };
    
    if(useNumber==='') {
        Choose_screen = <StartGameScreen numHandler = {useNumberHandler}/>;
    } else {
        Choose_screen = <GameScreen numHandler = {useNumberHandler} number_passed = {useNumber} guessNUmberFunc = {noOfGuessesHandler}/>
    } 

    if(guessCountInHomeScreen>0){
        Choose_screen= <GameOverScreen guess_count = {guessCountInHomeScreen}/>;
    }

    return (
        <View style = {styles.container}>
            <Header />
            {Choose_screen}
        </View>
    );
};

const styles = StyleSheet.create({
    
    container:{
        flex:1,
        //borderColor:'green',
        //borderWidth:5,
    }
});

export default HomeScreen;