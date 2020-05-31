import React from 'react';
import {StyleSheet,TextInput} from 'react-native';

const Input = (props) =>{

    return(
        <>
            <TextInput  
            autoCapitalize="none"
            autoCorrect ={false}
            {...props}
            style = {{...styles.InputStyles, ...props.style}}
            />
        </>
    );
};

const styles = StyleSheet.create({
    InputStyles:{
        //fontWeight:"bold",
        fontSize:20,
    }
});

export default Input;