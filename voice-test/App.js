import React from "react";
import { render } from "react-dom";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

// import Voice
import Voice from "react-native-voice";

const propTypes = {};

const defaultProps = {};

export default class App extends React.Component {
  name = "";
  // constructor
  constructor(props) {
    super(props);
    Voice.onSpeechResults = (res) => {
      this.name = JSON.stringify(res);
      this.handleCheck();
    };
  }

  handleCheck() {
    console.log(this.name);
    if (this.name === "call car") {
      handleCar();
    } else if (this.name === "call bike") {
      handleBike();
    } else if (this.name === "call test") {
      handleTest();
    }
  }

  handleCar() {
    alert("Car Function Called");
  }

  handleBike() {
    alert("Bike Function Called");
  }

  handleTest() {
    alert("Test Function Called");
  }
  // this.handleCheck(
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => Voice.start("en-us")}>
            <Image
              style={styles.imageButton}
              source={{
                uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/microphone.png",
              }}
            />
          </TouchableOpacity>
          {this.name}
        </View>
      </SafeAreaView>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: 5,
    paddingTop: 200,
  },

  imageButton: {
    width: 50,
    height: 50,
  },
});
