import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { leisGCM } from '../data/lawsGCM';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'GCMLaws'>;

export default function GCMLawsScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp>();

  const renderItem = ({ item }: { item: typeof leisGCM[0] }) => (
    <TouchableOpacity 
      style={styles.card}
      onPress={() => navigation.navigate('GCMLawDetail' as any, { title: item.title, text: item.text })}
    >
      <View style={styles.cardIcon}>
        <Text style={{ fontSize: 24 }}>🏛️</Text>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDesc}>{item.description}</Text>
      </View>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Leis e Estatutos</Text>
        <View style={{ width: 60 }} />
      </View>
      
      <FlatList
        data={leisGCM}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#1e293b',
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backBtn: {
    padding: 8,
  },
  backBtnText: {
    color: '#60a5fa',
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f8fafc',
    textAlign: 'center',
  },
  listContainer: {
    padding: 20,
  },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#334155',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    color: '#f8fafc',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardDesc: {
    color: '#94a3b8',
    fontSize: 13,
  },
  arrow: {
    color: '#64748b',
    fontSize: 24,
    marginLeft: 10,
  }
});
