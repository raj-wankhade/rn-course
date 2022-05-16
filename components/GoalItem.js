import { StyleSheet, Text, View, Pressable } from "react-native";

const GoalItem = ({ id, text, onDeleteItem }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#366fc9" }}
        onPress={onDeleteItem.bind(this, id)}
      >
        <Text style={styles.goalItemText}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    backgroundColor: "#8532cf",
    color: "#fff",
    borderRadius: 6,
  },
  goalItemText: {
    color: "#fff",
    padding: 8,
  },
});

export default GoalItem;
