import React from "react";
import { Dimensions } from "react-native";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

export default function StartScreen({ navigation }) {
  const navigateButton = () => (
    <View
      style={{
        backgroundColor: "#5665F3",
        padding: 16,
        width: "100%",
        alignSelf: "flex-end",
        justifyContent: "flex-end",
        borderRadius: 8,
      }}
    >
      <Text style={{ color: "white", alignSelf: "center", fontFamily: "logo" }}>
        Let's Walk In
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{ fontSize: 54, color: "white", fontFamily: "medium" }}>
          Enter A
        </Text>
        <Text style={{ fontSize: 54, color: "white", fontFamily: "thin" }}>
          Whole New
        </Text>
        <Text style={{ fontSize: 54, color: "white", fontFamily: "medium" }}>
          World Of Dao
        </Text>
      </View>
      <View>{navigateButton()}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#37393F",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
