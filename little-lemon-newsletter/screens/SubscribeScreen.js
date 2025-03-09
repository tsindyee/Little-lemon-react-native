import React, { useState } from 'react';
import { 
  View, 
  StyleSheet, 
  Text, 
  Pressable, 
  Image, 
  TextInput, 
  Alert, 
  useColorScheme, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView 
} from 'react-native';
import { validateEmail } from '../utils';

const SubscribeScreen = () => {
  const [email, onChangeEmail] = useState('');
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView 
        contentContainerStyle={[styles.container, { backgroundColor: isDarkMode ? '#333333' : '#FFFFFF' }]}
        keyboardShouldPersistTaps="handled"
      >
        <Image style={styles.logo} source={require('../assets/little-lemon-logo-grey.png')} />
        <Text style={[styles.regularText, { color: isDarkMode ? '#EDEFEE' : '#333333' }]}>
          Subscribe to our newsletter for our latest delicious recipes!
        </Text>
        <TextInput
          style={[styles.inputBox, { backgroundColor: isDarkMode ? '#EDEFEE' : '#FFFFFF', color: isDarkMode ? '#333333' : '#000000' }]}
          value={email}
          onChangeText={onChangeEmail}
          placeholder={'email'}
          placeholderTextColor={isDarkMode ? '#888' : '#666'}
          keyboardType={'email-address'}
        />
        <Pressable
          onPress={() => {
            Alert.alert('Thank you for subscribing, stay tuned!');
          }}
          style={({ pressed }) => [
            styles.button,
            validateEmail(email) ? styles.buttonEnabled : styles.buttonDisabled,
            pressed && { opacity: 0.8 }
          ]}
          disabled={!validateEmail(email)}
        >
          <Text style={styles.buttonText}>Subscribe</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    width: '80%',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 20,
    borderWidth: 2,
  },
  buttonEnabled: {
    backgroundColor: '#EE9972',
    borderColor: '#EE9972',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
    borderColor: '#ccc',
  },
  inputBox: {
    width: '80%',
    height: 50,
    marginVertical: 10,
    borderWidth: 1,
    paddingHorizontal: 15,
    fontSize: 16,
    borderColor: '#EDEFEE',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default SubscribeScreen;
