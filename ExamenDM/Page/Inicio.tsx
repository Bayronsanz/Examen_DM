import { View, Text, FlatList, Button } from 'react-native'
import React from 'react'
import { useContextPlatos } from '../Providers/ProviderPlatos'

export default function Inicio() {

  const { listaPlatos, agregarPlato } = useContextPlatos();

  return (
    <View style={{ padding: 15 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Menú</Text>

      <FlatList
        data={listaPlatos}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 12, borderBottomWidth: 1, paddingBottom: 5 }}>
            <Text>Plato: {item.NombrePlato}</Text>
            <Text>Precio: {item.Precio}</Text>
            <Button title="Agregar al Pedido" onPress={() => agregarPlato(item)} />
          </View>
        )}
      />
    </View>
  );
}
