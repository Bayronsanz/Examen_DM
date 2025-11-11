import { createContext } from "react";
import { Platos } from "../Models/Platos";

export const PlatosContext = createContext({
    listaPlatos: [] as Platos[],
    agregarPlato: (plato: Platos) => {},
    eliminarPlato: (index: number) => {},
    eliminados: [] as Platos[]
})              