import React from 'react';
import {StyleSheet,View} from 'react-native';


const Spacer = ({children}) => {

    return (
        <View style = {styles.SpacerStyle}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    
    SpacerStyle:{
        marginVertical:12,
    }
    
});

export default Spacer;