// App.js - Ana Uygulama Bileşeni
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { AudioProvider } from './src/contexts/AudioContext';
import { UserProvider } from './src/contexts/UserContext';

// Screens
import HomeScreen from './src/screens/HomeScreen';
import LibraryScreen from './src/screens/LibraryScreen';
import PlayerScreen from './src/screens/PlayerScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import AuthorScreen from './src/screens/AuthorScreen';

// Components
import TabBarIcon from './src/components/TabBarIcon';
import { theme } from './src/theme/colors';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="Author" component={AuthorScreen} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.text.secondary,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopColor: theme.colors.border,
          height: 60,
          paddingBottom: 10,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          tabBarLabel: 'Ana Sayfa',
          tabBarIcon: ({ color, size }) => <TabBarIcon name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          tabBarLabel: 'Kütüphane',
          tabBarIcon: ({ color, size }) => <TabBarIcon name="library" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Player"
        component={PlayerScreen}
        options={{
          tabBarLabel: 'Çalar',
          tabBarIcon: ({ color, size }) => <TabBarIcon name="play" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({ color, size }) => <TabBarIcon name="person" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <UserProvider>
        <AudioProvider>
          <NavigationContainer>
            <StatusBar style="light" backgroundColor={theme.colors.primary} />
            <TabNavigator />
          </NavigationContainer>
        </AudioProvider>
      </UserProvider>
    </PaperProvider>
  );
}