import React from "react"; //imrc
import { View, TextInput, Text, StyleSheet } from "react-native";
export default class Submit extends React.Component {
  //cc
  render() {
    return (
      <Text>
        Your current score: {this.props.score}
        <Text>You have finished: {String(this.props.finished)}</Text>
      </Text>
    );
  }
}
