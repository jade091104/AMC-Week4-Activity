import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

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
    title: '3. Make a Boffee',
  },
  {
        id: 'todo4',
    title: '4. Make a Breakfast',
  },
   {
        id: 'todo5',
    title: '5. Watch News',
  },
];
const afternoon = [
  {
    id: 'todo6',
    title: '6. Take a shower',
  },
  {
    id: 'todo7',
    title: '7. Go to Work',
  },
  {
    id: 'todo8',
    title: '8. Do my job as a Service Crew',
  },
  {
        id: 'todo9',
    title: '9. Go to Home After Work',
  },
   {
        id: 'todo10',
    title: '10. Prepare my clothes for school',
  },
];

const evening = [
  {
    id: 'todo11',
    title: '11. Go to School',
  },
  {
    id: 'todo12',
    title: '12. Take Notes',
  },
  {
    id: 'todo13',
    title: '13. Go Home',
  },
  {
        id: 'todo14',
    title: '14. Preapare Dinner',
  },
   {
        id: 'todo15',
    title: '15. Goto bed',
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
    <Text       style={{
          borderColor: 'black',
          borderWidth: 5,
          textAlign: 'center',
          padding: '10px',
          fontSize: '20px',
        }}> Morning </Text>
      <FlatList
        data={morning}
        renderItem={({item}) => <Item title={item.title}  />}
        keyExtractor={item => item.id}
      />
    <Text
    style={{
          borderColor: 'black',
          borderWidth: 5,
          textAlign: 'center',
          padding: '10px',
          fontSize: '20px',
        }}> Afternoon </Text>

      <FlatList
        data={afternoon}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
      <Text
      style={{
          borderColor: 'black',
          borderWidth: 5,
          textAlign: 'center',
          padding: '10px',
          fontSize: '20px',
        }}> Evening </Text>

      <FlatList
        data={evening}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
 
});

export default App;