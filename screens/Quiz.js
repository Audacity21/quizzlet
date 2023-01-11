import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";

const Quiz = ({ navigation }) => {
  const [quesno, setQuesno] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);

  const shufflearray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const getQuestion = async () => {
    setIsLoading(true);
    const url =
      "https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986";
    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.results);
    genetateOptions(data.results[0]);
    setIsLoading(false);
  };

  const handleOptions = (option) => {
    if (option === questions[quesno].correct_answer) {
      setScore(score + 1);
    }
    if (quesno !== 9) handlenext();
    else handleSubmit();
  };

  const handlenext = () => {
    setQuesno(quesno + 1);
    genetateOptions(questions[quesno + 1]);
  };

  const handleSubmit = () => {
    navigation.navigate("Result", { score: score });
  };

  const genetateOptions = (question) => {
    const options = [];
    options.push(question.correct_answer);
    question.incorrect_answers.forEach((option) => {
      options.push(option);
    });
    shufflearray(options);
    setOptions(options);
  };

  useEffect(() => {
    getQuestion();
  }, []);

  return (
    <View style={styles.container}>
      {!isLoading && (
        <>
          <View style={styles.header}>
            <Text style={styles.question}>
              Q. {decodeURIComponent(questions[quesno].question)}
            </Text>
          </View>
          <View style={styles.body}>
            <TouchableOpacity onPress={() => handleOptions(options[0])}>
              <Text style={styles.option}>
                A) {decodeURIComponent(options[0])}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleOptions(options[1])}>
              <Text style={styles.option}>
                B) {decodeURIComponent(options[1])}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleOptions(options[2])}>
              <Text style={styles.option}>
                C) {decodeURIComponent(options[2])}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleOptions(options[3])}>
              <Text style={styles.option}>
                D) {decodeURIComponent(options[3])}
              </Text>
            </TouchableOpacity>
          </View>
          {quesno !== 9 && (
            <>
              <View style={styles.footer1}>
                <TouchableOpacity style={styles.button1} onPress={handlenext}>
                  <Text
                    style={{ color: "#fff", fontSize: 20, fontWeight: "600" }}
                  >
                    SKIP
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} onPress={handlenext}>
                  <Text
                    style={{ color: "#fff", fontSize: 20, fontWeight: "600" }}
                  >
                    NEXT
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}

          {quesno === 9 && (
            <>
              <View style={styles.footer2}>
                <TouchableOpacity style={styles.button3} onPress={handleSubmit}>
                  <Text
                    style={{ color: "#fff", fontSize: 20, fontWeight: "600" }}
                  >
                    SUBMIT
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </>
      )}
      {isLoading && (
        <>
          <Text>Loading...</Text>
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
