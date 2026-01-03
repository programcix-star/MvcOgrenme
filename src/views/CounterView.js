import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Dikkat: Dışarıdan count, onIncrement ve onDecrement bilgilerini alıyoruz
export const CounterView = ({ count, onIncrement, onDecrement }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>MVC SAYACIM</Text>
      
      {/* Sayıyı burada gösteriyoruz */}
      <Text style={styles.countText}>{count}</Text>
      
      <View style={styles.buttonRow}>
        {/* Azaltma butonu: onDecrement emrini tetikler */}
        <TouchableOpacity style={styles.button} onPress={onDecrement}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        {/* Artırma butonu: onIncrement emrini tetikler */}
        <TouchableOpacity style={[styles.button, styles.incrementBtn]} onPress={onIncrement}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Tasarım (CSS benzeri yapımız)
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' },
  label: { fontSize: 18, color: '#666', marginBottom: 10 },
  countText: { fontSize: 80, fontWeight: 'bold', marginBottom: 40 },
  buttonRow: { flexDirection: 'row', gap: 20 },
  button: { backgroundColor: '#FF3B30', width: 70, height: 70, borderRadius: 35, justifyContent: 'center', alignItems: 'center' },
  incrementBtn: { backgroundColor: '#34C759' },
  buttonText: { color: 'white', fontSize: 30, fontWeight: 'bold' }
});