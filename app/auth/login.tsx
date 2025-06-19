import {
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform, KeyboardAvoidingView, ScrollView
} from 'react-native';


interface User {
  email: string;
  password: string;
}

import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
const users: User[] = require('../../assets/mock/users.json');

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    Alert.alert('Login Info', `Email: ${email}\nPassword: ${password}`);

  const matchedUser = users.find(
    (u) => u.email === email && u.password === password
  );

  if (matchedUser) {
  Alert.alert('Success Logged In Successfully', `Email: ${email}\nPassword: ${password}`); 
    router.push({
      pathname: '/home',
      params: { email, password },
    });
 } else {
    Alert.alert('Login Failed', 'Invalid email or password.');
  }
  };
return (
  <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
  >
    <ScrollView contentContainerStyle={{ flexGrow: 1}}
    keyboardShouldPersistTaps="handled">
      <View style={styles.container}> 
        <View style={styles.header}>
          <Image source={require('../../assets/images/logo.png')} style={styles.logoImage} />
          <Text style={styles.title}>Welcome Back</Text>
        </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={setEmail}
        value={email}
      />

      <View style={styles.passwordWrapper}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry={hidePassword}
          onChangeText={setPassword}
          value={password}
        />
        <TouchableOpacity
          onPress={() => setHidePassword(!hidePassword)}
          style={styles.eyeIcon}
        >
          <Ionicons
            name={hidePassword ? 'eye-off-outline' : 'eye-outline'}
            size={22}
            color="#003366"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Alert.alert('Reset link sent!')}>
        <Text style={styles.link}>Forgot Password?</Text>
      </TouchableOpacity>

<View style={styles.bottomRow}>
  <Text style={styles.bottomText}>
    New here?
  </Text>
  <TouchableOpacity onPress={() => router.push('/auth/signup')}>
    <Text style={styles.link}> Create Account</Text>
  </TouchableOpacity>
</View>

</View></ScrollView>
  </KeyboardAvoidingView>
);

}

const styles = StyleSheet.create({
container: {
  flexGrow: 1,
  justifyContent: 'center',
  backgroundColor: '#fff',
  paddingHorizontal: 24,
  paddingBottom: 40, // space below inputs for keyboard
},
  header: {
  alignItems: 'center',
  marginBottom: 22,
},

  title: {
    fontSize: 28,
    color: '#003366',
    fontWeight: '700',
    marginBottom: 32,
    textAlign: 'center',
  },
    logoImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 60,
  },
  input: {
    borderWidth: 1,
    borderColor: '#003366',
    padding: 14,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
    color: '#333',
  },
  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#003366',
    borderRadius: 8,
    marginBottom: 16,
    paddingRight: 12,
  },
  passwordInput: {
    flex: 1,
    padding: 14,
    fontSize: 16,
    color: '#333',
  },
  eyeIcon: {
    paddingLeft: 8,
  },
  button: {
    backgroundColor: '#003366',
    padding: 16,
    borderRadius: 8,
    marginTop: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  link: {
    color: '#003366',
    textAlign: 'center',
    marginBottom: 12,
    textDecorationLine: 'underline',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
  },
  bottomText: {
    color: '#555',
  },
});
