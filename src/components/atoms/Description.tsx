import React from 'react';
import { Text } from 'react-native';

export const Description = ({ value }) => {
  return <Text style={DescriptionStyle}>{value}</Text>;
};

const DescriptionStyle = {
  fontSize: 18,
};
