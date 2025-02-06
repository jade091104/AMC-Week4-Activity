import React, {useState} from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const morning = [
  {
    id: 'todo1',
    title: '1. Wake-up',
  },
  {
    id: 'todo2',
    title: '2. Turn off alarm',
  },
  {
    id: 'todo3',
    title: '3. Make a Coffee',
  },
  {
        id: 'todo4',
    title: '4. Make a Breakfast',
  },
   {
        id: 'todo5',
    title: '5. Watch News',
  },
     {
        id: 'todo6',
    title: '6. Play BasketBall',
  },
     {
        id: 'todo7',
    title: '7. Workout',
  },
];
const afternoon = [
  {
    id: 'todo8',
    title: '8. Take a shower',
  },
  {
    id: 'todo9',
    title: '9. Go to Work',
  },
  {
    id: 'todo10',
    title: '10. Do my job as a Service Crew',
  },
  {
        id: 'todo11',
    title: '11. Go to Home After Work',
  },
   {
        id: 'todo12',
    title: '12. Prepare my clothes for school',
  },
];

const evening = [
  {
    id: 'todo13',
    title: '13. Go to School',
  },
  {
    id: 'todo14',
    title: '14. Take Notes',
  },
  {
    id: 'todo15',
    title: '15. Go Home',
  },
  {
        id: 'todo16',
    title: '16. Preapare Dinner',
  },
   {
        id: 'todo17',
    title: '17. Goto bed',
  },
];

const morningColors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#9B59B6'];
const afternoonColors = ['#FFC300', '#FF5733', '#DAF7A6', '#33FF57', '#C70039'];
const eveningColors = ['#581845', '#900C3F', '#C70039', '#FF5733', '#FFBD33'];

const Item = ({ item, onPress, backgroundColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item, index, sectionColors }) => {
    const backgroundColor = item.id === selectedId ? 'blue' : sectionColors[index % sectionColors.length];
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.sectionHeader}>Morning</Text>
        <FlatList
          data={morning}
          renderItem={({ item, index }) => renderItem({ item, index, sectionColors: morningColors })}
          keyExtractor={item => item.id}
        />

        <Text style={styles.sectionHeader}>Afternoon</Text>
        <FlatList
          data={afternoon}
          renderItem={({ item, index }) => renderItem({ item, index, sectionColors: afternoonColors })}
          keyExtractor={item => item.id}
        />

        <Text style={styles.sectionHeader}>Evening</Text>
        <FlatList
          data={evening}
          renderItem={({ item, index }) => renderItem({ item, index, sectionColors: eveningColors })}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionHeader: {
    textAlign: 'center',
    padding: 10,
    fontSize: 20,
  },
  item: {
    padding: 20,
    margin: 2,
  },
  title: {
    fontSize: 18,
    color: '#ffffff',
  },
});

export default App;