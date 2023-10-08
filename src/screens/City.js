import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
import React from 'react';
import IconText from '../components/IconText';

export default function City() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.cityName, styles.cityText]}>London</Text>
      <Text style={[styles.countyName, styles.cityText]}>UK</Text>
      <IconText wrapperStyles={styles.populationWrapper} name='account' size={40} color='#f55' text='8000' styles={styles.populationText} />
      <View style={styles.riseSetWrapper}>
        <IconText wrapperStyles={styles.riseSetWrapper} name='weather-sunset-up' size={36} color='#eee' text='8:46am' styles={styles.riseSetText} />
        <IconText wrapperStyles={styles.riseSetWrapper} name='weather-sunset-down' size={36} color='#eee' text='5:24pm' styles={styles.riseSetText} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
  },
  cityName: {
    fontSize: 40,
  },
  countyName: {
    fontSize: 35,
  },
  cityText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: '#eee',
  },
  populationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: '#f55',
  },
  riseSetWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 20,
    marginTop: 30,
  },
  riseSetText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#eee',
    padding: 5
  }
})
