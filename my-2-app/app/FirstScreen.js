import React from "react"; //imrc
import { View } from "react-native";
import MyButton from "./MyButton";

export default class FirstScreen extends React.Component {
  //header
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#004466"
        }}
      >
        <MyButton
          onPress={() =>
            this.props.navigation.navigate("Game", {
              button: "A",
              screen: "FirstScreen"
            })
          }
          text={"QUIZ APP"}
        />
      </View>
    );
  }
}
