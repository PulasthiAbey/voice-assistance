import React from "react";
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

const propTypes = {};

const defaultProps = {};
const name = "";

export default class App extends React.Component {
    // constructor
    constructor(props) {
        super(props);
        Voice.onSpeechResults = (res) => {
            this.name = JSON.stringify(res);
            handleCheck(name);
        };
    }

    handleCheck(name) {
        if (name === "call car") {
            handleCar();
        } else if (name === "call bike") {
            handleBike();
        } else if (name === "call test") {
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
        // Voice.start("en-us")
    render() {
        return ( <
            SafeAreaView style = { styles.container } >
            <
            View style = { styles.container } >
            <
            TouchableHighlight onPress = {
                () => handleCar() } >
            <
            Image style = { styles.imageButton }
            source = {
                {
                    uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/microphone.png",
                }
            }
            />{" "} <
            /TouchableHighlight>{" "} <
            /View>{" "} <
            /SafeAreaView>
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