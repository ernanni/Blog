import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { BlogContext } from '../context/BlogContext';

export const IndexScreen = () => {
  const blogPosts = useContext(BlogContext);

  return (
    <View>
      <Text style={styles.TextStyled}>Index Screen</Text>
      <FlatList
        data={blogPosts}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  TextStyled: {
    fontSize: 18,
  },
});
