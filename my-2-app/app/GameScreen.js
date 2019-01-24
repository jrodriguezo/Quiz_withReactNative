import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  Image,
  FlatList,
  AsyncStorage,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import Button from "./Button";
import Game from "./Game";
import { NavigationActions } from "react-navigation";

import {
  questionAnswer,
  changeQuestion,
  submit,
  initQuestions
} from "./redux/actions";

//en los componenetes siempre usamos JSX
class GameScreen extends Component {
  /***************************************************************************************************** */
  /*         https://quiz2019.herokuapp.com/api/quizzes/random10wa?token=75bce630e75b90e53711            */
  /***************************************************************************************************** */
  constructor(props) {
    super(props);
    this.state = {
      tips: [],
      almacen: [
        /* {
          id: 0,
          question: "Loading wait ...",
          answer: "Loading",
          author: { isAdmin: false, username: "loading" },
          attachment: {
            filename: "loading",
            mime: "image/jpeg",
            url: ""
          },
          favourite: false,
          tips: []
        }*/
      ]
    };
    //this._loadState();
  }

  async _saveState() {
    try {
      var currentState = JSON.stringify(this.state.almacen);
      await AsyncStorage.setItem("@P7_2018_IWEB:quiz", currentState);
    } catch (error) {
      // Error saving state
    }
  }
  async _loadState() {
    try {
      var storedState = await AsyncStorage.getItem("@P7_2018_IWEB:quiz");
      if (storedState !== null) {
        var state = JSON.parse(storedState);
        //console.log(state);
        this.props.dispatch(initQuestions(state));
      } else {
        alert("There is no questions stored");
      }
    } catch (error) {}
  }
  async _removeState() {
    try {
      await AsyncStorage.removeItem("@P7_2018_IWEB:quiz");
      alert("Deleted successfully");
    } catch (error) {
      alert(error);
    }
  }

  componentDidMount() {
    fetch(
      "https://quiz2019.herokuapp.com/api/quizzes/random10wa?token=75bce630e75b90e53711"
    )
      .then(response => response.json())
      .then(responseOK => {
        this.state.almacen = responseOK;
        return this.props.dispatch(initQuestions(responseOK));
      })
      .then(() => this.props.dispatch(changeQuestion(0)));
  }

  nextQuestion = () => {
    this.state.tips = [];

    if (this.props.finished === true) {
      alert(
        "you have finished, press reset to start again with another random quizzes"
      );
      return;
    }

    if (this.props.currentQuestion === 9) {
      this.props.dispatch(changeQuestion(0));
      return;
    } else {
      this.props.dispatch(changeQuestion(this.props.currentQuestion + 1));
    }
  };

  returnQuestion = () => {
    this.state.tips = [];

    if (this.props.finished === true) {
      alert(
        "you have finished, press reset to start again with another random quizzes"
      );
      return;
    }

    if (this.props.currentQuestion === 0) {
      this.props.dispatch(changeQuestion(9));
      return;
    } else {
      this.props.dispatch(changeQuestion(this.props.currentQuestion - 1));
    }
  };

  submitButton = () => {
    if (this.props.finished === true) {
      alert(
        "you have finished, press reset to start again with another random quizzes"
      );
      return;
    }
    this.props.dispatch(submit(this.props.questions));
  };

  resetButton = () => {
    alert("you have reseted the quizzes");
    this.state.tips = [];
    this.componentDidMount();
    resultado = "";
  };

  render() {
    console.log(this.state.almacen);
    {
      this.props.questions[this.props.currentQuestion].tips.map((tips, idx) => {
        this.state.tips[idx] = tips;
        return;
      });
    }

    let resultado = "";
    if (this.props.finished === true) {
      resultado = "Your final scored: " + this.props.score * 10 + "%";
    }
    const backAction = NavigationActions.back({
      key: null
    });
    return (
      <View
        style={{
          flex: 1,
          marginTop: 2,
          justifyContent: "center"
        }}
      >
        <Text
          style={{
            backgroundColor: "#004466",
            fontSize: 40,
            color: "#cceeff",
            textAlign: "center"
          }}
        >
          Quiz [2018/2019]
        </Text>
        <Image
          resizeMode="contain"
          style={{ flex: 2, backgroundColor: "#005580" }}
          source={{
            uri: this.props.questions[this.props.currentQuestion].attachment.url
          }}
        />
        <Game
          texto={this.props.currentQuestion}
          question={this.props.questions[this.props.currentQuestion]}
          onQuestionAnswer={answer => {
            this.props.dispatch(
              questionAnswer(this.props.currentQuestion, answer)
            );
          }}
        />

        <View style={{ backgroundColor: "#0099e6" }}>
          <Text style={{ fontSize: 20, color: "white" }}> Tips:</Text>
          <FlatList
            style={{ marginLeft: 30 }}
            data={this.state.tips}
            renderItem={({ item }) => (
              <Text style={{ color: "white" }}># {item}</Text>
            )}
          />
        </View>
        <Text
          style={{
            backgroundColor: "yellow",
            textAlign: "center",
            fontSize: 20
          }}
        >
          {resultado}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <Button onclick={this.returnQuestion} boton="Anterior" />
          <Button onclick={this.submitButton} boton="Obtener resultados" />
          <Button onclick={this.nextQuestion} boton="Siguiente" />
          <Button onclick={this.resetButton} boton="Reset" />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <Button onclick={this._saveState.bind(this)} boton="Save" />
          <Button onclick={this._loadState.bind(this)} boton="Load" />
          <Button onclick={this._removeState.bind(this)} boton="Remove" />
        </View>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    ...state
  };
}
export default connect(mapStateToProps)(GameScreen);
