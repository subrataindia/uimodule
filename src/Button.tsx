import {View, Text} from 'react-native';
import React from 'react';

// New changes made in uimodule

const Button = ({title}) => {
  return (
    <View style={{backgroundColor: 'red', padding: 10, borderRadius: 5}}>
      <Text style={{color: '#FFFFFF'}}>{title}</Text>
    </View>
  );
};

export default Button;
