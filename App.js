import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from '@env'
import { useGetWeather } from './src/hooks/useGetWeather';


export default function App() {
  const [loading, error, weather] = useGetWeather()
  console.log(loading, error, weather);
  if (weather) {
    console.log(weather);
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='xxl' color='#1e90ff' />
      </View>
    )
  }
  return (
    <NavigationContainer>
      <Tabs weather={weather} />
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
