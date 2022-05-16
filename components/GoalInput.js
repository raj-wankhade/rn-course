import { useState } from "react";
import { StyleSheet, TextInput, Button, View, Modal } from "react-native";

const GoalInput = ({ onAddGoal, onCancelGoal, visible }) => {
  console.log("onCancelGoal is", onCancelGoal);
  const [enteredGoal, setEnteredGoal] = useState("");

  function goalInputHandler(enteredGoalText) {
    setEnteredGoal(enteredGoalText);
  }
  function addGoalHandler() {
    onAddGoal(enteredGoal);
    setEnteredGoal("");
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={goalInputHandler}
          placeholder="Enter Your Goal ..."
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancelGoal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center", // to center instead opf stretch by default
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    padding: 16,
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 8,
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    marginHorizontal: 8,
    width: "30%",
  },
});

export default GoalInput;
