import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useContextPlatos } from '../Providers/ProviderPlatos'

export default function Eliminados() {

  const { eliminados } = useContextPlatos();

  return (
    <View style={{ padding: 15 }}>
      <Text style={{ fontSize: 20 }}>Platos Eliminados</Text>

      <FlatList
        data={eliminados}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 6 }}>
            <Text>{item.NombrePlato} - L. {item.Precio}</Text>
          </View>
        )}
      />

      <Text style={{ marginTop: 10 }}>Total eliminados: {eliminados.length}</Text>
    </View>
  )
}
