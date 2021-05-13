import React from 'react';
import { Text } from 'react-native';

export const Title = ({ value }) => {
  return <Text style={titleStyle}>{value}</Text>;
};

const titleStyle = {
  fontSize: 28,
  marginVertical: 16,
  fontWeight: 'bold',
  textAlign: 'center',
};
