import React, { useState } from 'react';
import {Text,StyleSheet, SafeAreaView, Pressable} from 'react-native';

import {FlyingView} from 'react-native-flying-objects';

const App = () => {
  const [object, setObject] = useState<ObjectConfig[]>([]);

  return (
    <SafeAreaView style={styles.container}>
        <FlyingView object={object} containerProps={{style:{  borderWidth:2,borderColor:'black'}}}>
          <Text>hello</Text>
        </FlyingView>
        <Pressable
          onPress={() => {
            setObject((prev) => [...prev,{}]);
          }}
          style={{ backgroundColor : 'yellow' }}
        >
          <Text>button</Text>
        </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
