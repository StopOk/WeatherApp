import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';

import RowText from '../components/RowText';
import { weatherType } from '../utilities/weatherType';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function CurrentWeather({ weatherData }) {
  const { main: { temp, feels_like, temp_max, temp_min }, weather } = weatherData
  const weatherCondition = weather[0].main

  const {
    wrapper,
    container,
    temperature,
    feels,
    hiLowWrapper,
    hiLow,
    bodyWrapper,
    description,
    message
  } = styles

  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition]?.backgroundColor }
      ]}
    >
      <View style={container}>
        <MaterialCommunityIcons
          name={weatherType[weatherCondition]?.icon}
          size={40}
          color='#eee'
        />
        <Text style={temperature}>{`${temp}°`}</Text>
        <Text style={feels}>{`Feels like: ${feels_like}°`}</Text>
        <RowText
          messageOne={`High: ${temp_max}° `}
          messageTwo={`Low: ${temp_min}°`}
          containerStyles={hiLowWrapper}
          messageOneStyles={hiLow}
          messageTwoStyles={hiLow}
        />
      </View>
      <RowText
        messageOne={weather[0]?.description}
        messageTwo={weatherType[weatherCondition]?.message}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#1e90ff',
    borderBottomWidth: 3,
    borderBottomColor: '#eee'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 25,
  },
  currentTemp: {
    color: '#eee',
    fontSize: 48,
    textAlign: 'center',
  },
  feels: {
    color: '#eee',
    fontSize: 30,
    textAlign: 'center',
  },
  feels: {
    color: '#eee',
    fontSize: 34,
    textAlign: 'center',
  },
  highLow: {
    color: '#eee',
    fontSize: 24,
    textAlign: 'center',
  },
  highLowWrapper: {
    flexDirection: 'row',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  desc: {
    fontSize: 30,
    color: '#eee',
  },
  msg: {
    fontSize: 24,
    color: '#eee',
  },
});

