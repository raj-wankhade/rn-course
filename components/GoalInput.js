import { useState } from "react";
import { StyleSheet, TextInput, Button, View, Modal } from "react-native";

const GoalInput = ({ onAddGoal, visible }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  function goalInputHandler(enteredGoalText) {
    setEnteredGoal(enteredGoalText);
  }
  function addGoalHandler() {
    onAddGoal(enteredGoal);
    setEnteredGoal("");
  }

  return (
    <Modal visible={visible}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={goalInputHandler}
          placeholder="Enter Your Goal ..."
          value={enteredGoal}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
});

export default GoalInput;
