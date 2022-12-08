import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Quiz = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.question}>Q. This is a random question.</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.option}>A) Answer 1</Text>
        <Text style={styles.option}>B) Answer 2</Text>
        <Text style={styles.option}>C) Answer 3</Text>
        <Text style={styles.option}>D) Answer 4</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button1}>
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600" }}>
            SKIP
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600" }}>
            NEXT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "space-evenly",
  },
  question: {
    textAlign: "left",
    color: "#fff",
    fontSize: 36,
    flexWrap: "wrap",
  },
  option: {
    textAlign: "left",
    color: "#fff",
    fontSize: 24,
    flexWrap: "wrap",
    padding: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  button2: {
    backgroundColor: "#F86624",
    padding: 15,
    width: 100,
    alignItems: "center",
    borderRadius: 15,
  },
  button1: {
    backgroundColor: "#EA3546",
    padding: 15,
    width: 100,
    alignItems: "center",
    borderRadius: 15,
  },
});
