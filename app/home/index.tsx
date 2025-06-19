// app/home.tsx
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function Home() {
  const { email, password } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.info}>Email: {email}</Text>
      <Text style={styles.info}>Password: {password}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 24,
  },
  info: {
    fontSize: 18,
    marginVertical: 6,
    color: '#333',
  },
});
