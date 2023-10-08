import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CurrentWeather from '../screens/CurrentWeather';
import UpcomingWeather from '../screens/UpcomingWeather';
import City from '../screens/City';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator()

export default function Tabs({ weather }) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='CurrentWeather'
        // component={CurrentWeather}
        options={{
          tabBarShowLabel: true,
          tabBarLabel: 'Weather',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="weather-cloudy" color={color} size={30} />
          ),
          headerShown: false,
        }}
      // />
      >
        {() => <CurrentWeather weatherData={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name='Upcoming'
        component={UpcomingWeather}
        options={{
          tabBarShowLabel: true,
          tabBarLabel: 'Upcoming',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="clock-outline" color={color} size={30} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='City'
        component={City}
        options={{
          tabBarShowLabel: true,
          tabBarLabel: 'City',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="city" color={color} size={30} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}