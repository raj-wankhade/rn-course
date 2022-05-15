import { useState } from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoal, setCourseGoal] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandler() {
    setCourseGoal((currentCourseGoal) => [...currentCourseGoal, enteredGoal]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={goalInputHandler}
          placeholder="Enter Your Goal ..."
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {courseGoal.map((goal, index) => (
          <View key={index} style={styles.goalItem}>
            <Text style={styles.goalItemText}>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", // to center instead opf stretch by default
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    width: "70%",
    borderWidth: 1,
    borderColor: "#cccccc",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    padding: 8,
    margin: 8,
    backgroundColor: "#8532cf",
    color: "#fff",
    borderRadius: 6,
  },
  goalItemText: {
    color: "#fff",
  },
});
