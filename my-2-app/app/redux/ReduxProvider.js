import { Provider } from "react-redux";
import GlobalState from "./reducers";
import { createStore } from "redux";
import { questions } from "./mock-data";
import React from "react";
import GameScreen from "../GameScreen";
export default class ReduxProvider extends React.Component {
  constructor(props) {
    super(props); //para tener acceso al objeto this
    this.initialState = {
      score: 0,
      finished: false,
      currentQuestion: 0,
      questions: [...questions] /* estamos utilizando las de la web*/
    }; //estos dos puntos no están en el pdf OJO CON ELLOS
    this.store = this.configureStore();
  }
  render() {
    return (
      <Provider store={this.store}>
        <GameScreen />
      </Provider>
    );
  }
  configureStore() {
    //unica fuente de verdad inmutable
    return createStore(GlobalState, this.initialState);
  }
}
