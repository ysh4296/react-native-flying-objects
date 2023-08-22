import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import FlyingEmoticons from './FlyingEmoticons';

const Hello = (): JSX.Element => {
  const [animate, setAnimate] = useState<string[]>([]);
  return (
    <View>
      <>
        <Pressable
          onPress={() => {
            setAnimate((prev) => ['lit', ...prev]);
          }}
        >
          <Text>button</Text>
        </Pressable>
        <View
          pointerEvents="none"
          style={{
            width: 50,
            height: 100,
            position: 'absolute',
            bottom: 20,
          }}
        >
          {animate.map((item, index) => (
            <FlyingEmoticons key={index} />
          ))}
        </View>
      </>
    </View>
  );
};

export default Hello;
