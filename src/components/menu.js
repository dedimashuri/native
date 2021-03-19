import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';

export const MenuIcon = props => {
    return (
        <View 
        style = {{
            width: '25%',
            height: 75,
            justifyContent: 'center',
            alignItems:'center',
        }}>
        <Icon name={props.data.name}
        color={props.data.color}
        size={30}/>
        <Text>{props.data.text}</Text>
        </View>
    )
}