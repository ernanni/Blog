import React from 'react';
import { View, Button } from 'react-native';

import { Label, Input } from '../atoms';

export const Form = ({
  title,
  setTitle,
  content,
  setContent,
  onButtonPress,
}) => {
  return (
    <View style={viewStyled}>
      <Label value='Title' />
      <Input value={title} onChangeText={setTitle} />
      <Label value='Content' />
      <Input value={content} onChangeText={setContent} />
      <Button title='Save' onPress={onButtonPress} />
    </View>
  );
};

Form.defaultProps = {
  title: '',
  description: '',
};

const viewStyled = {
  padding: 16,
};
