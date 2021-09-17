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
    this.state = { string: "Sample String", callName: "Sample Call Name" };
    Voice.onSpeechResults = (res) => {
      const name = JSON.stringify(res);
      this.handleCheck(res);
      this.setState({ string: name });
    };
  }

  handleCheck(name) {
    console.log(this.state.string);
    if (
      name.value.includes("call car") ||
      name.value.includes("cal ka") ||
      name.value.includes("call ka") ||
      name.value.includes("call CA") ||
      name.value.includes("kolka") ||
      name.value.includes("Kolkata") ||
      name.value.includes("cal car")
    ) {
      this.handleCar();
    } else if (
      name.value.includes("call bike") ||
      name.value.includes("cal bike") ||
      name.value.includes("call back") ||
      name.value.includes("callbike") ||
      name.value.includes("callback") ||
      name.value.includes("call mike") ||
      name.value.includes("calbike") ||
      name.value.includes("call byk") ||
      name.value.includes("koi bike") ||
      name.value.includes("calback")
    ) {
      this.handleBike();
    } else if (
      name.value.includes("call test") ||
      name.value.includes("cal test") ||
      name.value.includes("call rest") ||
      name.value.includes("coldest") ||
      name.value.includes("call dost")
    ) {
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
  // this.handleCheck(
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
