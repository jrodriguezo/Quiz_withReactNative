import React from "react"; //imrc
import { View, TextInput, Text, StyleSheet } from "react-native";

export default class Game extends React.Component {
  //cc
  /*constructor(props) {
    super(props);
    this.state = { value: "Something?" };
  }
  _onTextInputChange(text) {
    this.setState({ value: text });
  }*/
  render() {
    return (
      <View>
        <Text
          style={{
            backgroundColor: "#0099e6",
            textAlign: "center",
            fontSize: 25,
            color: "white"
          }}
        >
          Question {this.props.texto}
        </Text>
        <Text
          style={{
            backgroundColor: "#cceeff",
            textAlign: "center",
            marginTop: 2,
            fontSize: 20
          }}
        >
          {this.props.question.question}
        </Text>

        {/*<Text>{this.state.value}</Text>*/}
        <TextInput
          style={styles.input}
          value={this.props.question.userAnswer || ""}
          placeholder="Type your answer here"
          onChangeText={this.props.onQuestionAnswer} //this._onTextInputChange.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 35,
    fontSize: 20,
    margin: 25,
    borderColor: "gray",
    borderWidth: 1
  }
});
