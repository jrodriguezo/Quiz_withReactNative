import React from "react"; //el objeto y el modulo
import ReactDOM from "react-dom";
import "./index.css";
import ReduxProvider from "./redux/ReduxProvider";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<ReduxProvider />, document.getElementById("root")); //en root esta el contenedor de react

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
