import React, { useState } from "react";
import {
  LayoutAnimation,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from "react-native";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function LayoutAnimationAPI() {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={style.container}>
      <TouchableOpacity
        onPress={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          setExpanded(!expanded);
        }}
      >
        <Text style={{ fontSize: 32 }}>
          Press me to {expanded ? "collapse" : "expand"}!
        </Text>
      </TouchableOpacity>
      {expanded && (
        <View style={style.tile}>
          <Text style={{ fontSize: 32 }}>I disappear sometimes!</Text>
        </View>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  tile: {
    backgroundColor: "lightgrey",
    borderWidth: 0.5,
    borderColor: "#d6d7da",

    margin: 30,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
});
