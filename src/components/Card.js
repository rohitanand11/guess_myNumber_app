import React from 'react';
import {StyleSheet,View} from 'react-native';


const Card = ({children,style}) => {

    return (
        <View style = {{...styles.cardStyle,...style}}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    
    cardStyle:{
        elevation:13,
        //borderColor:'yellow',
        //borderWidth:2,
        borderRadius:20,
        borderBottomEndRadius:10,
        padding:3,
    }
    
});

export default Card;