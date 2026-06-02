import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

function DetailScreen({ route, navigation }) {
  const { itemData } = route.params;

  const handleRequest = () => {
    Alert.alert(
      "Request Stok Darurat",
      `Permintaan stok darurat untuk ${itemData.nama} akan diproses.`,
      [{ text: "OK", onPress: () => console.log("OK Pressed") }]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{itemData.nama}</Text>
        <Text style={styles.detail}>ID Barang: {itemData.id}</Text>
        <Text style={styles.detail}>Lokasi: {itemData.lokasi}</Text>
        
        <View style={styles.stokContainer}>
          <Text style={styles.label}>Jumlah Stok:</Text>
          <Text style={itemData.stok === 0 ? styles.stokHabis : styles.stokValue}>
            {itemData.stok} unit
          </Text>
        </View>
        
        {itemData.stok === 0 && (
          <Text style={styles.warning}>⚠️ STOK HABIS ⚠️</Text>
        )}
        
        {itemData.stok === 0 && (
          <View style={styles.buttonContainer}>
            <Button 
              title="📦 Request Stok Darurat" 
              onPress={handleRequest}
              color="#e74c3c"
            />
          </View>
        )}
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#2c3e50',
  },
  detail: {
    fontSize: 16,
    marginBottom: 8,
    color: '#555',
  },
  stokContainer: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 10,
  },
  stokValue: {
    fontSize: 16,
    color: '#27ae60',
    fontWeight: 'bold',
  },
  stokHabis: {
    fontSize: 16,
    color: '#e74c3c',
    fontWeight: 'bold',
  },
  warning: {
    color: '#e74c3c',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default DetailScreen;