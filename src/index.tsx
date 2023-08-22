import React from 'react';
import { View, Text } from 'react-native';

const Hello = (): JSX.Element => {
  const hello: any = 'hi';
  return (
    <View>
      <Text>{hello}</Text>
    </View>
  );
};

export default Hello;
