import { View, Text } from 'react-native'
import React from 'react'

export default function RowText(props) {
  return (
    <View style={props.wrapperStyles}>
      <Text style={props.styles1}>{props.msg1}</Text>
      <Text style={props.styles2}>{props.msg2}</Text>
    </View>
  )
}
