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
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      string: [],
      carName: "call car",
      bikeName: "call bike",
      testName: "call test",
    };

    Voice.onSpeechResults = (res) => {
      // const name = JSON.stringify(res);
      this.handleStringArray();
      this.setState({ string: JSON.parse(res) }); //   this.setState({ string: name }); --> for the basic function call
    };
  }

  handleStringArray() {
    if (this.state.string[0] === "call") {
      const command = this.state.string[0] + this.state.string[1];
      handleCheck(command);
    } else if (this.state.string[0] === "change") {
      switch (this.state.string[1]) {
        case "car":
          this.state.carName = this.state.string[1];
          break;
        case "bike":
          this.state.bikeName = this.state.string[1];
          break;
        case "test":
          this.state.testName = this.state.string[1];
          break;

        default:
          break;
      }
    }
  }

  handleCheck(name) {
    console.log(name.value);
    if (name.value.includes(this.state.carName)) {
      this.handleCar();
    } else if (name.value.includes(this.state.bikeName)) {
      this.handleBike();
    } else if (name.value.includes(this.state.testName)) {
      this.handleTest();
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

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text>{this.state.string}</Text>
          <TouchableOpacity onPress={() => Voice.start("en-us")}>
            <Image
              style={styles.imageButton}
              source={{
                uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/microphone.png",
              }}
            />
          </TouchableOpacity>
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
