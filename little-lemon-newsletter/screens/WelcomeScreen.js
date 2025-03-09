import * as React from 'react';
import { View, Image, StyleSheet, Text, Pressable, useColorScheme } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <View style={[styles.container, {backgroundColor: isDarkMode ? '#333333' : '#FFFFFF'}]}>
      <Image style={styles.logo} source={require('../assets/little-lemon-logo.png')} />
      <Text style={[styles.regularText, {color: isDarkMode ? '#EDEFEE' : '#333333'}]}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Pressable
        onPress={() => navigation.navigate('Subscribe')}
        style={({ pressed }) => [
          styles.button,
          {backgroundColor: isDarkMode ? '#EE9972' : '#FFB84D'},
          pressed && { opacity: 0.8 },
        ]}
      >
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
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
    fontSize: 26,
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
