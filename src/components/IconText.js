import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function IconText(props) {
  return (
    <View style={props.wrapperStyles}>
      <MaterialCommunityIcons name={props.name} size={props.size} color={props.color} />
      {props.text ?
        <Text style={props.styles}>{props.text}</Text>
        :
        <View />
      }
    </View>
  )
}
