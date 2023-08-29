import React, { useState } from 'react';
import {Text,StyleSheet, SafeAreaView, Pressable} from 'react-native';

import {FlyingView, ObjectConfig} from 'react-native-flying-objects';

const App = () => {
  const [object, setObject] = useState<ObjectConfig[]>([]);

  return (
    <SafeAreaView style={styles.container}>
        <FlyingView object={object} containerProps={{style:{  borderWidth:2,borderColor:'black'}}} />
        <Pressable
          onPress={() => {
            setObject((prev) => [...prev,{object:<Text>hello</Text>}]);
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
