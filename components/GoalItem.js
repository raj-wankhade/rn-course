import { StyleSheet, Text, View, Pressable } from "react-native";

const GoalItem = ({ id, text, onDeleteItem }) => {
  return (
    <Pressable onPress={onDeleteItem.bind(this, id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalItemText}>{text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
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

export default GoalItem;
