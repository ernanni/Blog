import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

import { Context } from '../context/BlogContext';

export const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addBlogPost } = useContext(Context);

  return (
    <View style={styles.viewStyled}>
      <Text style={styles.labelStyle}>Enter Title:</Text>
      <TextInput
        style={styles.inputStyle}
        value={title}
        onChangeText={setTitle}
      />
      <Text style={styles.labelStyle}>Enter content:</Text>
      <TextInput
        style={styles.inputStyle}
        value={content}
        onChangeText={setContent}
      />
      <Button
        title='Add blog post'
        onPress={() => {
          addBlogPost(title, content, () => navigation.navigate('Index'));
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyled: {
    padding: 16,
  },
  inputStyle: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 16,
    padding: 8,
  },
  labelStyle: {
    fontSize: 20,
    marginBottom: 5,
  },
});
