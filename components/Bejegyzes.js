import { StyleSheet, Text, View } from 'react-native';

export default function Bejegyzes({ cim, hely, leiras }) {
  return (
    <View style={styles.kartya}>
      <Text style={styles.cim}>{cim}</Text>
      <Text style={styles.hely}>{hely}</Text>
      {leiras ? <Text style={styles.leiras}>{leiras}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  kartya: {
    width: '100%',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: '#f2f4f7',
  },
  cim: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  hely: {
    fontSize: 14,
    color: '#555',
    marginBottom: 6,
  },
  leiras: {
    fontSize: 15,
    color: '#222',
  },
});
