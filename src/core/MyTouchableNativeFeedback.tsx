import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableNativeFeedback,
  StatusBar,
} from "react-native";

// apenas para androi! gera o efeito de ondas quando pressionado
export default function MyTouchableNativeFeedback() {
  const [rippleColor, setRippleColor] = useState(randomHexColor());
  const [rippleOverflow, setRippleOverflow] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <TouchableNativeFeedback
          onPress={() => {
            setRippleColor(randomHexColor());
            setRippleOverflow(!rippleOverflow);
          }}
          background={TouchableNativeFeedback.Ripple(
            rippleColor,
            rippleOverflow
          )}
        >
          <View style={styles.touchable}>
            <Text style={styles.text}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </>
  );
}

const randomHexColor = () => {
  return "#000000".replace(/0/g, function () {
    return (~~(Math.random() * 16)).toString(16);
  });
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "80%",
    justifyContent: "center",
    alignItems: "stretch",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  touchable: { flex: 0.8, borderColor: "black", borderWidth: 1 },
  text: { alignSelf: "center" },
});
