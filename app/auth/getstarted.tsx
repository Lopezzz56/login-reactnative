import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function GetStarted() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/logo.png')} style={styles.logoImage} />

      <Text style={styles.title}>Welcome to MyApp</Text>
      <Text style={[styles.subtitle, { marginBottom: 30 }]} >Create an account to get started</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/auth/login')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/auth/login')}>
  <View style={{ flexDirection: 'row' }}>
    <Text style={styles.subtitle}>Already have an account? </Text>
    <Text style={styles.loginText}>Login</Text>
  </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoImage: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
    marginBottom: 60,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#003366', // Dark Blue
    fontFamily: 'Poppins_700Bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    fontFamily: 'Poppins_400Regular',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#003366',
    padding: 16,
    borderRadius: 8,
    width: '100%',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
  },
  loginText: {
    color: '#003366',
    textDecorationLine: 'underline',
    fontFamily: 'Poppins_400Regular',
  },
});
