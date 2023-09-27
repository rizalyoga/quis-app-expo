import { View, Text } from "react-native";
import React from "react";

const PlaygroundScreen = ({ route }) => {
  const { category } = route.params;

  return (
    <View className="flex-1">
      <Text
        style={{ elevation: 4 }}
        className="text-lg pt-12 pb-5 px-2 font-bold bg-white"
      >
        {category.toUpperCase()} QUESTIONS
      </Text>
      <View className="mt-6 mx-2">
        <Text>{category}</Text>
      </View>
    </View>
  );
};

export default PlaygroundScreen;
