import React from 'react';
import {StyleSheet,View,Text} from 'react-native';

const Header = () => {

    return (
        <View style ={styles.headerContainer}>
            <Text style = {styles.textStyle}>Guess It!</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    headerContainer:{
        width:"100%",
        height:80,
        //paddingTop:40,
        alignSelf:"center",
        backgroundColor:"rgb(7,94,84)",
        justifyContent:"center"
    },
    textStyle:{
        fontSize:30,
        textAlign:"center",
        color:'white',
       // borderColor:"red",
       // borderWidth:2,
        marginTop:19,
        
    }
});

export default Header;