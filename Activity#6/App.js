import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App() {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Praying', done: false, icon: 'hands-pray' },
    { id: '2', title: 'Reading', done: false, icon: 'book-open-variant' },
    { id: '3', title: 'Devotion', done: false, icon: 'heart' },
    { id: '4', title: 'Go to Gym', done: false, icon: 'dumbbell' },
    { id: '5', title: 'Jogging', done: false, icon: 'run' },
    { id: '6', title: 'Cooking', done: false, icon: 'pot' },
    { id: '7', title: 'Meditation', done: false, icon: 'meditation' },
    { id: '8', title: 'Cleaning', done: false, icon: 'broom' },
    { id: '9', title: 'Practice Coding', done: false, icon: 'laptop-code' },
    { id: '10', title: 'Gaming', done: false, icon: 'controller-classic' },
    { id: '11', title: 'Relaxing/Meditation', done: false, icon: 'yoga' },
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  const doneCount = tasks.filter(task => task.done).length;
  const notDoneCount = tasks.length - doneCount;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Jade Pogi ToDo List</Text>
      <Text style={styles.status}>Done: {doneCount}</Text>
      <Text style={styles.status}>Not Done: {notDoneCount}</Text>

      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={[styles.item, item.done && styles.doneItem]}
            onPress={() => toggleTask(item.id)}
          >
            <Icon 
              name={item.icon} 
              size={24} 
              color={item.done ? '#388e3c' : '#333'} 
              style={styles.icon} 
            />
            <Text style={[styles.itemText, item.done && styles.doneText]}>
              {item.title} {item.done ? '✔' : ''}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#8C92AC',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  status: {
    fontSize: 18,
    marginBottom: 5,
    color: 'white',
  },
  item: {
    flexDirection: 'row', 
    alignItems: 'center',
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
  },
  doneItem: {
    backgroundColor: '#00A36C',
  },
  icon: {
    marginRight: 10,
    color: 'black',
  },
  itemText: {
    fontSize: 18,
  },
  doneText: {
    textDecorationLine: 'line-through',
    color: 'white',
  },
});
