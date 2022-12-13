import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.title}>Quizzlet</Text>
      </View>
      <View style={styles.body}>
        <Text style={{ color: "#fff", fontSize: 36 }}>Let's play!</Text>
        <Text style={{ color: "#fff", fontSize: 22 }}>Are you ready?</Text>
      </View>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity style={styles.button}>
          <Text
            style={{ color: "#fff", fontSize: 24, fontWeight: "600" }}
            onPress={() => navigation.navigate("Quiz")}
          >
            PLAY
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#662E9B",
    padding: 40,
  },
  header: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#662E9B",
  },
  logo: {
    width: 300,
    height: 300,
  },
  title: {
    fontSize: 46,
    fontFamily: "Roboto",
    fontWeight: "bolder",
    color: "#F9C80E",
  },
  body: {
    color: "#fff",
    alignItems: "center",
    padding: 40,
    marginBottom: 200,
  },
  button: {
    backgroundColor: "#F86624",
    padding: 20,
    width: "90%",
    alignItems: "center",
    borderRadius: 20,
  },
});
