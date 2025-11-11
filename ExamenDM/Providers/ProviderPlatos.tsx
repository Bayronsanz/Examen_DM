import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { PlantillaReact } from '../Models/Plantilla'
import { Platos } from '../Models/Platos'
import { PlatosContext } from '../Context/PlatosContext';

export default function ProviderPlatos({ children }: PlantillaReact) {

    const [listaPlatos, setListaPLatos] = useState<Platos[]>([]);
    const [eliminados, setEliminados] = useState<Platos[]>([]);

    useEffect(() => {

        let listaInicial: Platos[] = [{
            NombrePlato: 'arroz',
            Precio: 10
        }, {
            NombrePlato: 'pizza',
            Precio: 100
        },
        {
            NombrePlato: 'baleada',
            Precio: 15
        }]

        setListaPLatos(listaInicial)

    }, []);

    function agregarPlato(plato: Platos) {
        setListaPLatos([...listaPlatos, plato])
    }

    function eliminarPlato(index: number) {
        const eliminado = listaPlatos[index];
        setEliminados([...eliminados, eliminado]);
        setListaPLatos(listaPlatos.filter((_, i) => i !== index));
    }

    return (
        <PlatosContext.Provider value={{ listaPlatos, agregarPlato, eliminarPlato, eliminados }}>
            {children}
        </PlatosContext.Provider>
    )

}

export const useContextPlatos = () => {
    return useContext(PlatosContext)
}