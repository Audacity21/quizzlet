import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const Quiz = ({ navigation }) => {
  const [quesno, setQuesno] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.question}>
          Q. This is question number {quesno + 1}
        </Text>
      </View>
      <View style={styles.body}>
        <TouchableOpacity>
          <Text style={styles.option}>A) Answer 1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.option}>B) Answer 2</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.option}>C) Answer 3</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.option}>D) Answer 4</Text>
        </TouchableOpacity>
      </View>
      {quesno !== 9 && (
        <>
          <View style={styles.footer1}>
            <TouchableOpacity
              style={styles.button1}
              onPress={() => setQuesno(0)}
            >
              <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600" }}>
                SKIP
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button2}
              onPress={() => setQuesno(quesno + 1)}
            >
              <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600" }}>
                NEXT
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}

      {quesno === 9 && (
        <>
          <View style={styles.footer2}>
            <TouchableOpacity
              style={styles.button3}
              onPress={() => navigation.navigate("Result")}
            >
              <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600" }}>
                SUBMIT
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
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
    backgroundColor: "#662E9B",
    padding: 40,
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
  footer1: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  footer2: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
    alignItems: "center",
  },
  button2: {
    backgroundColor: "#F86624",
    padding: 15,
    width: 100,
    alignItems: "center",
    borderRadius: 15,
  },
  button3: {
    backgroundColor: "#F86624",
    padding: 15,
    width: 150,
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
