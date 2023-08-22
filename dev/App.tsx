import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

import Hello from './dist';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Hello />
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
