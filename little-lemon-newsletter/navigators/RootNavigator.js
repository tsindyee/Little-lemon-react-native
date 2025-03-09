import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import WelcomeScreen from '../screens/WelcomeScreen';
import SubscribeScreen from '../screens/SubscribeScreen';
import LoginScreen from '../screens/LoginScreen';
import MenuItems from '../screens/MenuItems';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigator for Login, Welcome, and MenuItems
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Welcome') {
          iconName = 'home';
        } else if (route.name === 'Login') {
          iconName = 'log-in';
        } else if (route.name === 'Menu') {
          iconName = 'restaurant';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#EE9972',
      tabBarInactiveTintColor: 'gray',
      headerStyle: { backgroundColor: '#EE9972' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
    })}
  >
    <Tab.Screen name="Welcome" component={WelcomeScreen} />
    <Tab.Screen name="Login" component={LoginScreen} />
    <Tab.Screen name="Menu" component={MenuItems} />
  </Tab.Navigator>
);

// Stack Navigator combining the Tab Navigator and Subscribe screen
const RootNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Subscribe"
        component={SubscribeScreen}
        options={{
          title: 'Subscribe to Newsletter',
          headerStyle: { backgroundColor: '#EE9972' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootNavigator;
