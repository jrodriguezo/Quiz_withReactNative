import React from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";

export default class MyButton extends React.Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    padding: 15,
    margin: 10,
    backgroundColor: "white",
    color: "black",
    borderWidth: 3,
    borderColor: "black",
    fontSize: 25,
    textAlign: "center"
  }
});
