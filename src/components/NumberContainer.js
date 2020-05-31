import React from 'react';
import {StyleSheet,View,Text} from 'react-native';

const NumberContainer = ({children,style}) => {

    return (
        <View style = {{...styles.NumberContainerStyle , ...style}}>
            <Text style = {styles.NumberStyle}>{children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    NumberContainerStyle:{
        borderColor:"brown",
        borderWidth:2,
        borderRadius:8,
        height:60,
        alignSelf:"center",
        marginVertical:10,
        justifyContent:"center",
        padding:10,
        
    },
    NumberStyle:{
        fontSize:40,
        //padding:3
    }
});

export default NumberContainer;