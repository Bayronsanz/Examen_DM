import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Page/Inicio';
import pagina2 from '../Page/RealizarPedidos';
import Inicio from '../Page/Inicio';
import RealizarPedidos from '../Page/RealizarPedidos';
import Eliminados from '../Page/Eliminados';

export default function Navegacion() {

    const tab = createBottomTabNavigator();
  return (
    
    <NavigationContainer>
        <tab.Navigator>
            <tab.Screen name='Inicio' component={Inicio}></tab.Screen>
            <tab.Screen name='REalizar Pedidos' component={RealizarPedidos}></tab.Screen>
            <tab.Screen name='Eliminados' component={Eliminados}></tab.Screen>
        </tab.Navigator>
    </NavigationContainer>

  )
}