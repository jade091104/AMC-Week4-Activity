import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, ScrollView} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const onPress = () => setCount(prevCount => prevCount + 1);

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

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (


  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>

    <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text       style={{
          borderColor: 'black',
          borderWidth: 5,
          textAlign: 'center',
          padding: '10px',
          fontSize: '20px',
        }}> Morning </Text>
    </TouchableOpacity>
    
    <ScrollView>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <FlatList
        data={morning}
        renderItem={({item}) => <TouchableOpacity><Item title={item.title}  /></TouchableOpacity>}
        keyExtractor={item => item.id}
      />
      </TouchableOpacity>
    </ScrollView>
      <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text
    style={{
          borderColor: 'black',
          borderWidth: 5,
          textAlign: 'center',
          padding: '10px',
          fontSize: '20px',
        }}> Afternoon </Text>
      </TouchableOpacity>

    <ScrollView>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <FlatList
        data={afternoon}
        renderItem={({item}) => <TouchableOpacity><Item title={item.title}  /></TouchableOpacity>}
        keyExtractor={item => item.id}
      />
      </TouchableOpacity>
    </ScrollView>

      <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text
      style={{
          borderColor: 'black',
          borderWidth: 5,
          textAlign: 'center',
          padding: '10px',
          fontSize: '20px',
        }}> Evening </Text>
      </TouchableOpacity>

      <FlatList
        data={evening}
        renderItem={({item}) => <TouchableOpacity><Item title={item.title}  /></TouchableOpacity>}
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