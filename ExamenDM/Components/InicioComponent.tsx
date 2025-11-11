/*import { View, Text } from 'react-native'
import React from 'react'
import { useContextPlatos } from '../Providers/ProviderPlatos'
import { TextInput, Button } from 'react-native';
import { PlatosContext } from '../Context/PlatosContext';

export default function InicioComponent() {

    const { listaPlatos } = useContextPlatos();

    function agregarPlato(p0: any) {
        throw new Error('Function not implemented.');
    }

    return (
        <View>
            <TextInput placeholder='platos'
                value={listaPlatos}
            ></TextInput>
            <Button title='Agregar' onPress={() => agregarPlato({ NombrePlato: '', Precio: 0 })}
            ></Button>
        </View>
    )

}*/