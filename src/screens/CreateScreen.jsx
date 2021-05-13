import React, { useContext, useState } from 'react';

import { Form } from '../components';
import { Context } from '../context/BlogContext';

export const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addBlogPost } = useContext(Context);

  return (
    <Form
      title={title}
      setTitle={setTitle}
      content={content}
      setContent={setContent}
      onButtonPress={() =>
        addBlogPost(title, content, () => navigation.navigate('Index'))
      }
    />
  );
};
