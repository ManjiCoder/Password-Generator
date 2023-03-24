import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
// Form validation
import * as Yup from 'yup';

const App = () => {
  // Yup Schema
  const passwordSchema = Yup.object().shape({
    passwordLength: Yup.number()
      .min(4, 'should be min of 4 characters')
      .max(16, 'should be max of 16 characters')
      .required('Length is required'),
  });
  return (
    <View style={styles.container}>
      <Text>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
});
