import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const EditScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Edit Screen - {navigation.getParam('id')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
