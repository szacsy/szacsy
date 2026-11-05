import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';

import Bejegyzes from './components/Bejegyzes';

const bejegyzesek = [
  {
    id: '1',
    cim: 'Budapesti kirándulás',
    hely: 'Budapest, Magyarország',
    leiras: 'Dunai hajózás és sétálás a Várnegyedben.',
  },
  {
    id: '2',
    cim: 'Tengerparti pihenés',
    hely: 'Split, Horvátország',
    leiras: 'Naplemente a rakparton és friss halételek.',
  },
  {
    id: '3',
    cim: 'Hegyi túra',
    hely: 'Tátra, Szlovákia',
    leiras: '',
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.lista}>
        {bejegyzesek.map((bejegyzes) => (
          <Bejegyzes key={bejegyzes.id} cim={bejegyzes.cim} hely={bejegyzes.hely} leiras={bejegyzes.leiras} />
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  lista: {
    paddingBottom: 24,
  },
});
