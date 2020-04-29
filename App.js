import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from "react-native";

export default function App() {
  const [enteredValue, setEnteredValue] = useState("");
  const [todos, setTodos] = useState([]);

  const inputTextHandler = (newText) => {
    setEnteredValue(newText);
  };

  const onPressHandler = () => {
    setTodos([...todos, enteredValue]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
          style={{ width: "80 %", borderColor: "black", borderBottomWidth: 2 }}
          onChangeText={inputTextHandler}
          value={enteredValue}
        />
        <Button title="ADD" onPress={onPressHandler} />
      </View>

      <ScrollView>
        {todos.length
          ? todos.map((todo) => <Text key={todo}>{todo}</Text>)
          : null}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  input: {
    flexDirection: "row",
  },
});
