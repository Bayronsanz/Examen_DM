import { View, Text, FlatList, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { useContextPlatos } from '../Providers/ProviderPlatos'

export default function RealizarPedido() {

  const { listaPlatos, eliminarPlato } = useContextPlatos();
  const [nombre, setNombre] = useState("");

  const total = listaPlatos.reduce((acc, item) => acc + item.Precio, 0);

  function confirmar() {
    if (nombre === "") {
      Alert.alert("Debe ingresar su nombre");
      return;
    }

    Alert.alert(
      "Compra Realizada Correctamente",
      `Cliente: ${nombre}\nTotal: L. ${total}`
    );
  }

  return (
    <View style={{ padding: 15 }}>
      <Text style={{ fontSize: 20 }}>Confirmar Pedido</Text>

      <FlatList
        data={listaPlatos}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={{ marginVertical: 8, borderBottomWidth: 1 }}>
            <Text>Plato: {item.NombrePlato}</Text>
            <Text>Precio: L. {item.Precio}</Text>
            <Button title="Eliminar" onPress={() => eliminarPlato(index)} />
          </View>
        )}
      />

      <Text style={{ fontSize: 16, marginTop: 10 }}>Total: L. {total}</Text>

      <TextInput
        placeholder="Ingrese su nombre"
        value={nombre}
        onChangeText={setNombre}
        style={{ borderWidth: 1, marginTop: 10, padding: 5 }}
      />

      <Button title="Confirmar Compra" onPress={confirmar} />
    </View>
  )
}
