import React , {useState} from 'react';
import {View,Text,StyleSheet, Button,TouchableWithoutFeedback,Keyboard,Alert} from 'react-native';

import Card from '../components/Card';
import Spacer from '../components/Spacer';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = (props) => {

//console.log(props);
//states
const [textState,setTextState]      = useState('');
const [isConfirmed,setIsConfirmed]  = useState(false);
const [confirmedNumber,setConfirmedNumber] = useState('');

//handler functions
const validateText = (pInput) => {
    setTextState (pInput.replace(/[^0-9]/g,''))
};

const resetHandler = () => {
    setTextState('');
};

const confirmhandler = () => {

    var tempNum = parseInt(textState);
    if(isNaN(tempNum) === true ||  tempNum >=100 || tempNum <=0) {
        Alert.alert('number likh','mazak mat kar bhai,bahot mehnat laga hai',[{text:'Okay!!',style:'destructive',onPress:resetHandler}]);
        setConfirmedNumber('');

        if(isConfirmed){
            setIsConfirmed(false);
        }
    } else {
        setIsConfirmed(true);
        setConfirmedNumber(tempNum);
        setTextState('');
        Keyboard.dismiss();
    }
};

let confirmMessage;

(isConfirmed )
? confirmMessage =
    <>
        <Card style = {styles.confirmMessageCard}>
            <Text style={styles.confirmMessageStyle}>
                Your number ->
            </Text>
            <NumberContainer>{confirmedNumber}</NumberContainer>
        </Card>
        <View style = {styles.startButtonStyles}>
            <Button title="Start" onPress={()=>props.numHandler(confirmedNumber)} />
        </View>
    </>
: confirmMessage = null;

    return (
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View style={styles.container}>
                <Text style={styles.textStyle}>Let's Start the Game</Text>

                <Spacer />
                <Card>
                    <View style={styles.cardContainer}>
                        <View style={styles.labelContainer}>
                            <Text style={styles.labelStyle}>Enter your number</Text>
                        </View>
                        <Input style={styles.textInputStyle}
                            keyboardType="number-pad"
                            blurOnSubmit={true}
                            maxLength={2}
                            onChangeText={validateText}
                            value={textState}
                        />

                        <View style={styles.buttonContainer}>
                            <View style= {styles.buttonStyle}><Button title="reset" onPress= {resetHandler} /></View>
                            <View style= {styles.buttonStyle}><Button title="confirm" onPress={confirmhandler} /></View>
                        </View>
                    </View>
                </Card>
                {confirmMessage}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({

    container:{
        flex:1,
        padding:5,
        //borderColor:'black',
        //borderWidth:2,
    },
    textStyle: {
        fontSize: 30,
        textAlign: "center",
        color: 'red',
    },
    cardContainer:{
        //flex:1,
        //marginTop:20,
        padding:10,
        //borderColor:'black',
        //borderWidth:2,
        
    },
    labelContainer:{
        marginVertical:20,
        //borderColor:'red',
        //borderWidth:3,
    },
    labelStyle:{
        alignSelf:"center",
        fontSize:18,
        fontWeight:"bold"
    },
    textInputStyle:{
        borderBottomColor:"black",
        alignSelf:"center",
        width:35,
        borderBottomWidth:2,
        paddingVertical:3,
        //marginHorizontal:"40%",
        textAlign:"center",
        fontWeight:"bold",
        fontSize:20,
        
    },
    confirmMessageStyle:{
        marginTop:10,
        fontWeight:"bold",
        textAlign:"center",
    },
    buttonContainer:{
        flexDirection:"row",
        justifyContent:"space-around",
        marginVertical:30,
        //borderColor:'black',
        //borderWidth:2,
        //borderRadius:10,
    },
    buttonStyle:{
        width :80,
    },
    confirmMessageCard:{
        marginVertical:10,
        justifyContent:"center",
        alignSelf:"center",
        padding:20,
    },
    startButtonStyles:{
        alignSelf:"center",
        width:120,
    }

});

export default StartGameScreen;