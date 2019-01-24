import React from "react";
import { StyleSheet, TouchableHighlight, Text } from "react-native";
export default class Button extends React.Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onclick}>
        <Text style={styles.text}>{this.props.boton}</Text>
      </TouchableHighlight>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    margin: 5,
    padding: 5,
    backgroundColor: "black",
    color: "white",
    borderWidth: 3,
    borderColor: "black"
  }
});
