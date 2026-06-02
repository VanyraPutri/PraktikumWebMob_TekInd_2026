import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

function TambahScreen({ navigation }) {
  const [namaBarang, setNamaBarang] = useState('');
  const [stok, setStok] = useState('');
  const [lokasi, setLokasi] = useState('');

  const handleSimpan = () => {
    if (!namaBarang || !stok || !lokasi) {
      Alert.alert("Error", "Semua field harus diisi!");
      return;
    }

    Alert.alert(
      "Berhasil",
      `Barang "${namaBarang}" ditambahkan!`,
      [{ text: "OK", onPress: () => navigation.goBack() }]
    );
    
    // Reset form
    setNamaBarang('');
    setStok('');
    setLokasi('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Tambah Barang Baru</Text>
        
        <Text style={styles.label}>Nama Barang</Text>
        <TextInput
          style={styles.input}
          placeholder="Contoh: Baut M12"
          value={namaBarang}
          onChangeText={setNamaBarang}
        />
        
        <Text style={styles.label}>Jumlah Stok</Text>
        <TextInput
          style={styles.input}
          placeholder="Contoh: 100"
          keyboardType="numeric"
          value={stok}
          onChangeText={setStok}
        />
        
        <Text style={styles.label}>Lokasi Rak</Text>
        <TextInput
          style={styles.input}
          placeholder="Contoh: Rak C-4"
          value={lokasi}
          onChangeText={setLokasi}
        />
        
        <View style={styles.buttonContainer}>
          <Button title="Simpan Barang" onPress={handleSimpan} color="#27ae60" />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Batal" onPress={() => navigation.goBack()} color="#7f8c8d" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2c3e50',
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default TambahScreen;