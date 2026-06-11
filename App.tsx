import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import PlateSearchScreen from './src/screens/PlateSearchScreen';
import { Infraction } from './src/data/infractions';

// Tipo de parâmetros do Stack (Infrações)
export type RootStackParamList = {
  Home: undefined;
  Detail: { infraction: Infraction };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

// Stack de Infrações (Home -> Detail)
function InfractionsStack() {
  return (
    <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#0f172a' }
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

// O componente que contém as abas
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1e293b',
          borderTopColor: '#334155',
          height: 60,
          paddingBottom: 10,
        },
        tabBarActiveTintColor: '#f59e0b',
        tabBarInactiveTintColor: '#64748b',
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
        }
      }}
    >
      <Tab.Screen 
        name="Infrações" 
        component={InfractionsStack} 
        options={{
          tabBarIcon: () => <></>,
          tabBarLabel: '📚 Infrações'
        }}
      />
      <Tab.Screen 
        name="Consulta Placa" 
        component={PlateSearchScreen} 
        options={{
          tabBarIcon: () => <></>,
          tabBarLabel: '🔎 Placas'
        }}
      />
    </Tab.Navigator>
  );
}

// Navegação Principal com Hack Absoluto para o Rodapé
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <View style={{ flex: 1, backgroundColor: '#0f172a' }}>
          <MainTabs />
          {/* Este bloco vazio empurra tudo para cima, garantindo espaço físico para os botões do Android */}
          <View style={{ height: 40, backgroundColor: '#1e293b' }} />
        </View>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
