import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";

// import Voice
import Voice from "react-native-voice";

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.textStyle}>Press mike to start Recognition</Text>
          Touchable image for the
          <TouchableHighlight onPress={() => Voice.start("en-us")}>
            <Image
              style={styles.imageButton}
              source={{
                uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/microphone.png",
              }}
            />
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: 5,
  },

  imageButton: {
    width: 50,
    height: 50,
  },
});
