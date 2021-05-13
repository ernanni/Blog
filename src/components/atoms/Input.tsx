import React, { useState } from 'react';
import { TextInput } from 'react-native';

export const Input = ({ value, onChangeText }) => {
  return (
    <TextInput style={inputStyle} value={value} onChangeText={onChangeText} />
  );
};

const inputStyle = {
  fontSize: 16,
  borderWidth: 1,
  borderColor: 'black',
  marginBottom: 16,
  padding: 8,
};
