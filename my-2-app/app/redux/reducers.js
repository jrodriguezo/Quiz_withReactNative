import { combineReducers } from "redux";
import {
  QUESTION_ANSWER,
  CHANGE_QUESTION,
  SUBMIT,
  INIT_QUESTION
} from "./actions";

//import { presetToOptions } from "webpack/lib/Stats";
//import { from } from "rxjs";

//actualizan el state  es read-only
function score(state = 0, action = {}) {
  switch (action.type) {
    case SUBMIT:
      action.payload.questions.map((respuesta, index) => {
        if (respuesta.answer === respuesta.userAnswer) {
          state += 1;
        }
      });
      return state;
    case INIT_QUESTION:
      state = 0;
      return state;
    default:
      return state;
  }
}

function finished(state = false, action = {}) {
  switch (action.type) {
    case SUBMIT:
      state = true;
      return state;
    case INIT_QUESTION:
      state = false;
      return state;
    default:
      return state;
  }
}
function currentQuestion(state = 0, action = {}) {
  switch (action.type) {
    /*  switch (action.type) {
        case 'CHANGE_QUESTION':
            return {...state, currentQuestion: action.payload}; //esto te devuelve un objeto
            break;
    }
    return state;*/

    case CHANGE_QUESTION:
      return action.payload;
    default:
      return state;
  }
}

function questions(state = [], action = {}) {
  switch (action.type) {
    case INIT_QUESTION:
      return action.payload.questions;
    case QUESTION_ANSWER:
      return state.map((question, i) => {
        return {
          ...question,
          userAnswer:
            action.payload.index === i
              ? action.payload.answer
              : question.userAnswer
        };
      });
    default:
      return state;
  }
}

const GlobalState = combineReducers({
  score,
  finished,
  currentQuestion,
  questions
});
export default GlobalState;
