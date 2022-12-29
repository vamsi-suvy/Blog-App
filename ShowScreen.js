import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";
const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );
  return (
    <View>
      <Text style={{ fontSize: 28, fontWeight: "bold", alignSelf: "center" }}>
        {blogPost.title}
      </Text>
      <View
        style={{
          width: "70%",
          height: "60%",

          marginLeft: 60,
          marginTop: 40,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            marginLeft: 10,
            alignSelf: "center",
            justifyContent: "center",
          }}
        >
          {blogPost.content}
        </Text>
      </View>
    </View>
  );
};
ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    ),
  };
};
const styles = StyleSheet.create({});

export default ShowScreen;
