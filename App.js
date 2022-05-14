import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textStyle}>Hello World!!!!</Text>
      </View>
      <Text style={styles.textStyle}>Another Text!!!!</Text>
      <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
      <Button title="Submit" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    margin: 16,
    borderColor: "blue",
    borderWidth: 2,
    padding: 16,
  },
  bigBlue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },
  red: {
    color: "red",
  },
});
