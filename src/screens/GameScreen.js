import React, { useState ,useRef,useEffect} from 'react';
import {StyleSheet,Text,View,Button,Alert} from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import Spacer from '../components/Spacer';

const generateNumberHandler = (pLowerLimit,pHigherLimit,pExclude=-34) => {

    let generated_number =0 ;
    generated_number = ( Math.floor ( Math.random() * (pHigherLimit - pLowerLimit )) + pLowerLimit);

    if (generated_number === pExclude) {
        return;
    }

    return generated_number;
};

const GameScreen = (props) => {

    //state declarations
    const [randomNumber,SetRandomNumber]=useState(generateNumberHandler(0,100));
    const [guessCount,SetGuessCount] = useState(0);
    const currentHigh = useRef(100);
    const currentLow = useRef(1);
    
    //functions
    const directionHandler = (pDirection) => {

        if ((pDirection === "lower" && randomNumber<props.number_passed) || (pDirection === "greater" && randomNumber>props.number_passed)) {
            Alert.alert('Liar spotted!!','jhooth bolna paap hai',[{text:'wapis karo!!',style:'cancel'}]);
            return;
        }

        if (pDirection === "lower") {
            currentHigh.current = randomNumber;
        } else if(pDirection === "higher"){
            currentLow.current = randomNumber;
        }

        const nextNumber = generateNumberHandler(currentLow.current,currentHigh.current);
        SetRandomNumber(nextNumber);
        SetGuessCount(guessCount+1);
    };

    const {number_passed,guessNUmberFunc} = props;
    useEffect(()=>{
        console.log(randomNumber);
        console.log(number_passed);
        if (randomNumber===number_passed) {
            guessNUmberFunc(guessCount);
        }
    },[randomNumber,number_passed,guessCount]);

    return(
        <View style = {styles.container}>
            <Spacer />
            <Card style = {styles.cardStyle}>
                <Text style={styles.textStyle}>Computer's Guess</Text>
                <NumberContainer>
                    <Text>{randomNumber}</Text>
                </NumberContainer>
            </Card>
            <Spacer/>
            <Spacer/>
            <View><Text style={styles.textStyle}>My Number is:</Text></View>
            <Spacer/>

            <View style={styles.buttonContainer}>
                <View style = {styles.buttonStyle}><Button title="Smaller" onPress={()=>directionHandler("lower")}/></View>
                <View style = {styles.buttonStyle}><Button title="Higher" onPress={()=>directionHandler("higher")}/></View>
            </View>

            <Spacer />
            <Spacer />
            <View style = {styles.gotoStartStyles}>
                <Button title="GO BACK to start!!" onPress = {()=>props.numHandler('')}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    
    container:{
        flex:1,
        borderColor:'red',
        borderWidth:2,
    },
    textStyle:{
        justifyContent:"center",
        alignSelf:"center",
        fontWeight:"bold",
        fontSize:19,
    },
    cardStyle:{
        padding:25,
        justifyContent:"center",
        alignSelf:"center",
    },
    buttonContainer:{
        flexDirection:"row",
        justifyContent:"space-around",
    },
    buttonStyle:{
        width:90,
        height:80,

    },
    gotoStartStyles:{
        alignSelf:"center",
        width:120,
    }
});

export default GameScreen;