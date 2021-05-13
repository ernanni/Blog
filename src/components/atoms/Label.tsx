import React from 'react';
import { Text } from 'react-native';

export const Label = ({ value }) => {
  return <Text style={labelStyle}>{value}</Text>;
};

const labelStyle = {
  fontSize: 20,
  marginBottom: 5,
};
