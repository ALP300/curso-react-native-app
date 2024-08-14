import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";

const App = () => {
  const [timesPressed, setTimesPressed] = useState(0);
  const colors = ["lightblue", "pink", "lightgreen", "lightyellow"];
  const [colorIndex, setColorIndex] = useState(0);

  let textLog = "";
  if (timesPressed > 1) {
    textLog = timesPressed + "x onPress";
  } else if (timesPressed > 0) {
    textLog = "onPress";
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://img.redbull.com/images/c_crop,x_585,y_0,h_1230,w_922/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2021/3/23/zqu2tz4snaevtqw6vv54/zelda-35-aniversario",
        }}
        style={styles.image}
      />
      <Pressable
        onPress={() => {
          setTimesPressed((current) => current + 1);
          setColorIndex((colorIndex + 1) % colors.length);
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? "rgb(255, 192, 203)"
              : colors[colorIndex],
          },
          styles.wrapperCustom,
        ]}
      >
        {({ pressed }) => (
          <Text style={styles.text}>{pressed ? "Pressed!" : "Press Me"}</Text>
        )}
      </Pressable>
      <View style={styles.logBox}>
        <Text testID="pressable_press_console">{textLog}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0000FF", // Blue background
  },
  text: {
    fontSize: 16,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
    // The background color is dynamically handled
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#f0f0f0",
    backgroundColor: "#f9f9f9",
  },
});

export default App;
