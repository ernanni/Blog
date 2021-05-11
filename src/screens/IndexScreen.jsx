import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';

import { Feather } from '@expo/vector-icons';

import { Context as BlogContext } from '../context/BlogContext';

export const IndexScreen = ({ navigation }) => {
  console.log(navigation);
  const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Button title='Add Post' onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Show')}>
              <View style={styles.row}>
                <Text style={styles.titleStyled}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather style={styles.iconStyle} name='trash' />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  titleStyled: {
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 24,
  },
});
