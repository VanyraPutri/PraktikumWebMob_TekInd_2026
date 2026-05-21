import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform, TouchableOpacity, Alert, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" translucent={false} backgroundColor="#2c3e50" />
      {/* Bagian Header dengan Logo */}
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <Image 
            source={require('./assets/logo.png')} 
            style={styles.logo}
          />
          <View style={styles.headerText}>
            <Text style={styles.headerTitle}>PT. Manufaktur Maju</Text>
            <Text style={styles.headerSubtitle}>Aplikasi Monitoring Gudang</Text>
          </View>
        </View>
      </View>
      
      {/* Bagian Konten Utama (bisa di-scroll) */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.welcomeText}>Selamat Datang, Operator!</Text>

        {/* ===== PROFIL MESIN (dengan gambar cnc.png) ===== */}
        <Text style={styles.sectionTitle}>🛠️ Profil Mesin Produksi</Text>

        <View style={styles.machineCard}>
          {/* Foto Mesin (kiri) - pakai cnc.png */}
          <View style={styles.machinePhoto}>
            <Image 
              source={require('./assets/cnc.png')} 
              style={styles.machineImage}
            />
          </View>
          
          {/* Informasi Mesin (kanan) */}
          <View style={styles.machineInfo}>
            <Text style={styles.machineName}>CNC Milling 5-Axis</Text>
            <Text style={styles.machineYear}>Tahun: 2022</Text>
            <View style={styles.statusContainer}>
              <Text style={styles.machineStatus}>Status: </Text>
              <Text style={styles.statusRunning}>● Beroperasi</Text>
            </View>
          </View>
        </View>

        {/* ===== STATUS GUDANG ===== */}
        <Text style={styles.sectionTitle}>📦 Status Gudang</Text>

        {/* Kartu Gudang A (Bisa Diklik) */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => Alert.alert("Info", "Membuka Detail Stok Gudang A...")}
        >
          <Text style={styles.cardTitle}>Status Gudang A</Text>
          <Text style={styles.cardValue}>Kapasitas: 85%</Text>
          <Text style={styles.cardStatus}>TEKAN UNTUK DETAIL</Text>
        </TouchableOpacity>

        {/* Kartu Gudang B */}
        <View style={[styles.card, styles.cardWarning]}>
          <Text style={styles.cardTitle}>Status Gudang B</Text>
          <Text style={styles.cardValue}>Kapasitas: 95%</Text>
          <Text style={styles.cardStatus}>PENUH</Text>
        </View>

        {/* ===== INFORMASI TAMBAHAN ===== */}
        <Text style={styles.sectionTitle}>📋 Informasi Tambahan</Text>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>📍 Wilayah Layanan</Text>
          <Text style={styles.infoText}>Gudang A: Timur</Text>
          <Text style={styles.infoText}>Gudang B: Barat</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>📦 Kapasitas Maksimal</Text>
          <Text style={styles.infoText}>Gudang A: 1.000 unit</Text>
          <Text style={styles.infoText}>Gudang B: 800 unit</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>📊 Aktivitas Hari Ini</Text>
          <Text style={styles.infoText}>Barang masuk: 200 unit</Text>
          <Text style={styles.infoText}>Barang keluar: 150 unit</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>🔄 Restock</Text>
          <Text style={styles.infoText}>Perkiraan restock: 3 hari lagi</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>📞 Kontak Gudang</Text>
          <Text style={styles.infoText}>Telepon: 021-555-1234</Text>
          <Text style={styles.infoText}>Email: gudang@manufaktur.co.id</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>⏰ Jam Operasional</Text>
          <Text style={styles.infoText}>Senin - Sabtu: 08.00 - 17.00</Text>
          <Text style={styles.infoText}>Libur: Minggu & Hari Besar</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    paddingTop: Platform.OS === 'android' ? 40 : 44,
  },
  header: {
    backgroundColor: '#2c3e50',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
    elevation: 5,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
    backgroundColor: 'white',
    resizeMode: 'cover',
  },
  headerText: {
    flex: 1,
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#bdc3c7',
    fontSize: 14,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 15,
    color: '#333',
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginTop: 20,
    marginBottom: 10,
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardWarning: {
    borderLeftWidth: 5,
    borderLeftColor: '#e74c3c',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardValue: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  cardStatus: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#27ae60',
    marginTop: 5,
    textAlign: 'right',
  },
  
  // ===== STYLE UNTUK PROFIL MESIN =====
  machineCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  machinePhoto: {
    width: 80,
    height: 80,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  machineImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  machineInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  machineName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 4,
  },
  machineYear: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 4,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  machineStatus: {
    fontSize: 14,
    color: '#333',
  },
  statusRunning: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#27ae60',
  },
  
  // ===== STYLE UNTUK INFO CARD =====
  infoCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 13,
    color: '#555',
    marginBottom: 4,
  },
});