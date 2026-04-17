import { View, Text, StyleSheet, FlatList } from 'react-native';

const tarefas = [
  {
    id: '1',
    titulo: 'Entregar atividade de lógica',
    descricao: 'Resolver os exercícios de algoritmos do capítulo 3.',
    prazo: 'Amanhã, 23:59',
  },
  {
    id: '2',
    titulo: 'Revisar navegação',
    descricao: 'Ajustar as rotas do Drawer e conferir os nomes das telas.',
    prazo: '18/04/2026',
  },
  {
    id: '3',
    titulo: 'Configurar FlatList',
    descricao: 'Implementar a listagem dinâmica de disciplinas no app.',
    prazo: 'Segunda-feira',
  },
];

export default function TarefasScreen() {
  
  const renderTarefa = ({ item }) => (
    <View style={styles.tarefaCard}>
      <View style={styles.statusIndicator} />
      <View style={styles.textoContainer}>
        <Text style={styles.titulo}>{item.titulo}</Text>
        <Text style={styles.descricao}>{item.descricao}</Text>
        <Text style={styles.prazo}>📅 Prazo: {item.prazo}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Atividades</Text>
      <FlatList
        data={tarefas}
        keyExtractor={item => item.id}
        renderItem={renderTarefa}
        contentContainerStyle={styles.listPadding}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 20,
    color: '#333',
  },
  listPadding: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  tarefaCard: {
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    padding: 15,
    marginBottom: 12,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#EEE',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  statusIndicator: {
    width: 5,
    backgroundColor: '#FF9800', 
    borderRadius: 10,
    marginRight: 15,
  },
  textoContainer: {
    flex: 1,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  descricao: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  prazo: {
    fontSize: 12,
    color: '#999',
    marginTop: 8,
    fontStyle: 'italic',
  },
});
