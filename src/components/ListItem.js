import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ListItem(props) {
  const { dt_txt, min, max, condition } = props
  return (
    <View style={styles.item}>
      <MaterialCommunityIcons name='weather-sunny' size={40} color='#ff0' />
      <Text style={styles.textTime}>{dt_txt}</Text>
      <Text style={styles.temp}>Min: {min} | Max: {max}</Text>
      <Text style={styles.textCondition}>{condition}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textTime: {
    color: '#eee',
    fontSize: 22,
  },
  temp: {
    color: '#eee',
    fontSize: 20,
  },
  textCondition: {
    color: '#eee',
    fontSize: 25,
  },
  separator: {
    height: 3,
    backgroundColor: 'royalblue'
  },
  item: {
    padding: 12,
    marginVertical: 4,
    marginHorizontal: 8,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: '#1add70'
  },
});
