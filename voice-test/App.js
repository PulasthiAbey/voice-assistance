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
    this.state = { string: "Sample String" };
    Voice.onSpeechResults = (res) => {
      const name = JSON.stringify(res);
      this.handleCheck(res);
      this.setState({ string: name });
    };
  }

  handleCheck(name) {
    console.log(this.name);
    if (name.value.includes("call car")) {
      handleCar();
    } else if (name.value.includes("call bike")) {
      handleBike();
    } else if (name.value.includes("call test")) {
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
