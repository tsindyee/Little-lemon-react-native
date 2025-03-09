import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  View,
  Image,
  useColorScheme,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

export default function LoginScreen() {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [loggedIn, onLogin] = useState(false);
  const colorScheme = useColorScheme();

  const isDarkMode = colorScheme === 'dark';

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView 
          contentContainerStyle={[styles.container, {backgroundColor: isDarkMode ? '#333333' : '#FFFFFF'}]}
          keyboardShouldPersistTaps="handled"
        >
          <Image
            source={require('../assets/little-lemon-logo-grey.png')}
            style={styles.logo}
          />
          <Text style={[styles.headerText, {color: isDarkMode ? '#EDEFEE' : '#333333'}]}>
            Welcome to Little Lemon
          </Text>
          {loggedIn && (
            <Text style={[styles.successText, {color: isDarkMode ? '#32CD32' : '#228B22'}]}>
              You are logged in!
            </Text>
          )}

          {!loggedIn && (
            <View style={styles.formContainer}>
              <Text style={[styles.regularText, {color: isDarkMode ? '#EDEFEE' : '#333333'}]}>
                Login to continue
              </Text>
              <TextInput
                style={[styles.inputBox, {backgroundColor: isDarkMode ? '#EDEFEE' : '#FFFFFF', color: isDarkMode ? '#333333' : '#000000'}]}
                value={email}
                onChangeText={onChangeEmail}
                placeholder="Email"
                placeholderTextColor={isDarkMode ? '#888' : '#666'}
                keyboardType="email-address"
              />
              <TextInput
                style={[styles.inputBox, {backgroundColor: isDarkMode ? '#EDEFEE' : '#FFFFFF', color: isDarkMode ? '#333333' : '#000000'}]}
                value={password}
                onChangeText={onChangePassword}
                placeholder="Password"
                placeholderTextColor={isDarkMode ? '#888' : '#666'}
                keyboardType="default"
                secureTextEntry={true}
              />
              <Pressable
                onPress={() => onLogin(!loggedIn)}
                style={({ pressed }) => [
                  styles.button,
                  {backgroundColor: isDarkMode ? '#EE9972' : '#FFB84D'},
                  pressed && { opacity: 0.8 },
                ]}
              >
                <Text style={styles.buttonText}>Log in</Text>
              </Pressable>
            </View>
          )}
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 30,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  successText: {
    fontSize: 24,
    marginBottom: 20,
  },
  formContainer: {
    width: '80%',
    alignItems: 'center',
  },
  inputBox: {
    width: '100%',
    height: 50,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#EDEFEE',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  button: {
    width: '100%',
    paddingVertical: 15,
    marginTop: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
