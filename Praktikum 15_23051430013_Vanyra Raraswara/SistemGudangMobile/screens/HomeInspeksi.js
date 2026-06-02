import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

// Data Mock Item Inspeksi
const DATA_INSPEKSI = [
  { id: '1', nama: 'Baut M10', standar: 'Panjang 50mm ±0.5mm', status: 'Belum' },
  { id: '2', nama: 'Oli Mesin 20L', standar: 'Viskositas SAE 40', status: 'Belum' },
  { id: '3', nama: 'Packing Kayu', standar: 'Ukuran 100x50cm', status: 'Belum' },
  { id: '4', nama: 'Mur Ring 12', standar: 'Diameter 12mm ±0.2mm', status: 'Belum' },
  { id: '5', nama: 'Gear Box A', standar: 'Gigi aus < 0.5mm', status: 'Belum' },
];

function HomeInspeksi({ navigation }) {
  const [items, setItems] = useState(DATA_INSPEKSI);

  const updateStatus = (id, newStatus) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, status: newStatus } : item
    );
    setItems(updatedItems);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.itemContainer, item.status === 'Gagal' && styles.itemGagal]}
      onPress={() => navigation.navigate('DetailInspeksi', { itemData: item, updateStatus })}
    >
      <Text style={styles.itemTitle}>{item.nama}</Text>
      <Text style={styles.itemSub}>Standar: {item.standar}</Text>
      <View style={styles.statusContainer}>
        <Text style={[
          styles.statusBadge,
          item.status === 'Lolos' && styles.statusLolos,
          item.status === 'Gagal' && styles.statusGagal,
          item.status === 'Belum' && styles.statusBelum,
        ]}>
          {item.status}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🔍 QC Inspection - Lini Produksi A</Text>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    paddingHorizontal: 15,
    color: '#2c3e50',
  },
  itemContainer: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  itemGagal: {
    backgroundColor: '#ffe6e6',
    borderColor: '#e74c3c',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  itemSub: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  statusContainer: {
    marginTop: 10,
    alignItems: 'flex-end',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    fontSize: 12,
    fontWeight: 'bold',
    overflow: 'hidden',
  },
  statusLolos: {
    backgroundColor: '#27ae60',
    color: 'white',
  },
  statusGagal: {
    backgroundColor: '#e74c3c',
    color: 'white',
  },
  statusBelum: {
    backgroundColor: '#95a5a6',
    color: 'white',
  },
});

export default HomeInspeksi;