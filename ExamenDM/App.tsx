import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navegacion from './Components/Navegacion';
import ProviderPlatos from './Providers/ProviderPlatos';

export default function App() {
  return (
    <ProviderPlatos>
      <Navegacion></Navegacion>
    </ProviderPlatos>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
