import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert, Image, TouchableOpacity } from 'react-native';

function DetailInspeksi({ route, navigation }) {
  const { itemData, updateStatus } = route.params;
  const [status, setStatus] = useState(itemData.status);

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    updateStatus(itemData.id, newStatus);
    
    const message = newStatus === 'Lolos' 
      ? `${itemData.nama} dinyatakan LOLOS inspeksi! ✅` 
      : `${itemData.nama} dinyatakan GAGAL inspeksi! ❌`;
    
    Alert.alert(
      "Status Inspeksi Diperbarui",
      message,
      [{ text: "OK", onPress: () => navigation.goBack() }]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Gambar Placeholder Item */}
        <View style={styles.imagePlaceholder}>
          <Text style={styles.imageText}>📷</Text>
          <Text style={styles.imageSubText}>Foto Item: {itemData.nama}</Text>
        </View>
        
        <Text style={styles.title}>{itemData.nama}</Text>
        <Text style={styles.detail}>ID: {itemData.id}</Text>
        
        <View style={styles.standarContainer}>
          <Text style={styles.label}>Standar Kualitas:</Text>
          <Text style={styles.standarValue}>{itemData.standar}</Text>
        </View>
        
        <View style={styles.standarContainer}>
          <Text style={styles.label}>Status Saat Ini:</Text>
          <Text style={[
            styles.statusValue,
            status === 'Lolos' && styles.statusLolos,
            status === 'Gagal' && styles.statusGagal,
          ]}>
            {status}
          </Text>
        </View>
        
        <View style={styles.divider} />
        
        <Text style={styles.sectionTitle}>Pilih Hasil Inspeksi:</Text>
        
        <View style={styles.buttonGroup}>
          <TouchableOpacity 
            style={[styles.statusButton, styles.lolosButton]}
            onPress={() => handleStatusChange('Lolos')}
          >
            <Text style={styles.buttonText}>✅ LOLOS</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.statusButton, styles.gagalButton]}
            onPress={() => handleStatusChange('Gagal')}
          >
            <Text style={styles.buttonText}>❌ GAGAL</Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>← Kembali ke Daftar</Text>
        </TouchableOpacity>
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
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imagePlaceholder: {
    width: '100%',
    height: 150,
    backgroundColor: '#ecf0f1',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#bdc3c7',
    borderStyle: 'dashed',
  },
  imageText: {
    fontSize: 50,
  },
  imageSubText: {
    fontSize: 12,
    color: '#7f8c8d',
    marginTop: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2c3e50',
  },
  detail: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 15,
  },
  standarContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    width: 120,
  },
  standarValue: {
    fontSize: 16,
    color: '#555',
    flex: 1,
  },
  statusValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statusLolos: {
    color: '#27ae60',
  },
  statusGagal: {
    color: '#e74c3c',
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  statusButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  lolosButton: {
    backgroundColor: '#27ae60',
  },
  gagalButton: {
    backgroundColor: '#e74c3c',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 10,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#34495e',
  },
  backButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default DetailInspeksi;