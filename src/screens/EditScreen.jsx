import React, { useState, useContext } from 'react';

import { Form } from '../components';
import { Context } from '../context/BlogContext';

export const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const id = navigation.getParam('id');
  const blogPost = state.find((blogPost) => blogPost.id === id);

  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  return (
    <Form
      title={title}
      setTitle={setTitle}
      content={content}
      setContent={setContent}
      onButtonPress={() => console.log('pressed')}
    />
  );
};
