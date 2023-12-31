import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, FlatList, StatusBar } from 'react-native';
import ListItem from '../components/ListItem';

export default function UpcomingWeather() {

  const DATA = [
    {
      dt_txt: '2023-02-18 12:00:00',
      main: {
        temp_max: 8.55,
        temp_min: 7.55
      },
      weather: [
        {
          main: 'Clear'
        }
      ]
    },
    {
      dt_txt: '2023-02-18 15:00:00',
      main: {
        temp_max: 8.55,
        temp_min: 7.55
      },
      weather: [
        {
          main: 'Clouds'
        }
      ]
    },
    {
      dt_txt: '2023-02-18 18:00:00',
      main: {
        temp_max: 8.55,
        temp_min: 7.55
      },
      weather: [
        {
          main: 'Rain'
        }
      ]
    },
  ]

  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textTitle}>Upcoming Weather</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt_txt}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e90ff',
  },
  textTitle: {
    color: '#eee',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'blod',
    margin: 10,
  },
});

