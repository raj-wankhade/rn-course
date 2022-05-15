import { StyleSheet, Text, View } from "react-native";

const GoalItem = ({ itemData, key }) => {
  return (
    <View style={styles.goalItem} key={key}>
      <Text style={styles.goalItemText}>{itemData.item}</Text>
    </View>
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
