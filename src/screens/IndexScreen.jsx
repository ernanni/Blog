import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { BlogContext } from '../context/BlogContext';

export const IndexScreen = () => {
  const value = useContext(BlogContext);

  return (
    <View>
      <Text style={styles.TextStyled}>Index Screen {value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  TextStyled: {
    fontSize: 18,
  },
});
