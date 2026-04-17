import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const DISCIPLINAS = [
  { id: '1', nome: 'Matemática', professor: 'Pereirão' },
  { id: '2', nome: 'Português', professor: 'Nenete' },
  { id: '3', nome: 'Banco de Dados', professor: 'Mamprim' },
  { id: '4', nome: 'React Native', professor: 'Dudu rei' },
];

export default function DisciplinasScreen() {
  
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.iconPlaceholder}>
        <Text style={styles.iconText}>{item.nome.substring(0, 1)}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.tituloMatéria}>{item.nome}</Text>
        <Text style={styles.subtitulo}>{item.professor}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DISCIPLINAS}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listPadding}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listPadding: {
    padding: 15,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  iconPlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#6200ee',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  iconText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  infoContainer: {
    flex: 1,
  },
  tituloMatéria: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitulo: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  salaText: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
});
