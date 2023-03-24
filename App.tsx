/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

// Form validation
import * as Yup from 'yup';

const App = () => {
  // Yup Schema like Mongoose Model Schema like Express Validator
  const passwordSchema = Yup.object().shape({
    passwordLength: Yup.number()
      .min(4, 'should be min of 4 characters')
      .max(16, 'should be max of 16 characters')
      .required('Length is required'),
  });

  // States
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbols, setSymbols] = useState(false);

  // Functions
  const generatedPasswordString = (passwordLength: number) => {
    //
  };

  // Bussiness Logic
  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };

  const resetPasswordState = () => {
    //
  };
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
