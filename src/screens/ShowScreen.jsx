import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { EvilIcons } from '@expo/vector-icons';

import { Context } from '../context/BlogContext';
import { Description, Title } from '../components';

export const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam('id')
  );

  return (
    <View style={styles.viewWrapper}>
      <Title value={blogPost.title} />
      <Description value={blogPost.content} />
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Edit', { id: navigation.getParam('id') })
        }
      >
        <EvilIcons name='pencil' size={35} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  viewWrapper: {
    padding: 16,
  },
});
