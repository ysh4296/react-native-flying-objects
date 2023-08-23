import React, { useMemo, useState } from 'react';
import {Text,StyleSheet, SafeAreaView, Pressable, Easing} from 'react-native';

import FlyingView from 'react-native-flying-objects';

const App = () => {
  const [object, setObject] = useState<ObjectConfig[]>([]);
  const objectConfig = useMemo(
    () => ({
      right: {
        fromValue: 15,
        toValue: Math.floor(Math.random() * 30),
        duration: 1200,
        easing:Easing.bezier(
          Math.floor(Math.random() * 10) / 10,
          Math.floor(Math.random() * 10) / 10 + 0.7,
          Math.floor(Math.random() * 10) / 10,
          Math.floor(Math.random() * 10) / 10 + 0.7,
        ),
      },
      top: {
        fromValue: 100,
        toValue: 35,
        duration: 1200,
        easing: Easing.bezier(0.5, 1.0, 0.5, 1.0),
      },
      show: {
        fromValue: 0,
        toValue: 1,
      },
      hide:{
        fromValue: 1,
        toValue: 0,
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [object]
  );

  return (
    <SafeAreaView style={styles.container}>
        <FlyingView object={object} containerProps={{style:{  borderWidth:2,borderColor:'black'}}}>
          <Text>hello</Text>
        </FlyingView>
        <Pressable
          onPress={() => {
            console.log(objectConfig);
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
