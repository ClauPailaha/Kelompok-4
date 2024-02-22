import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

const Regis = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showResult, setShowResult] = useState(false); // State to control the visibility of result

  const onPress = () => {
    if (!name || !username || !email || !address || !phoneNumber) {
      alert('Please fill in all fields');
      return; // Exit the function early if any field is empty
    }
    setShowResult(true); // Set showResult to true when the button is pressed
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.th}>Registration</Text>
      </View>
      <View style={styles.u}>
        <Text style={styles.username}>Nama</Text>
      </View>
      <TextInput
        placeholder="Enter your name"
        style={styles.input}
        value={name}
        onChangeText={text => setName(text)}
      />
      <View style={styles.u}>
        <Text style={styles.username}>Username</Text>
      </View>
      <TextInput
        placeholder="Enter your username"
        style={styles.input}
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <View style={styles.u}>
        <Text style={styles.username}>Email</Text>
      </View>
      <TextInput
        placeholder="Enter your email"
        style={styles.input}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <View style={styles.u}>
        <Text style={styles.username}>Address</Text>
      </View>
      <TextInput
        placeholder="Enter your address"
        style={styles.input}
        value={address}
        onChangeText={text => setAddress(text)}
      />
      <View style={styles.u}>
        <Text style={styles.username}>Phone Number</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Masukkan nomor HP anda"
        keyboardType="numeric"
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
      />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.s}> Register </Text>
      </TouchableOpacity>

      {showResult && (
        <List
          style={styles.resultText}
          name={name}
          username={username}
          email={email}
          address={address}
          phoneNumber={phoneNumber}
        />
      )}
    </View>
  );
};

export default Regis;