import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { listCategoryQuestions } from "../data/listKategory";

const ListCategoryScreen = ({ navigation }) => {
  //   console.log(listCategoryQuestions);
  return (
    <View className="flex-1 bg-slate-300">
      <Text
        style={{ elevation: 4 }}
        className="text-lg pt-12 pb-5 px-2 font-bold bg-white"
      >
        LIST CATEGORY QUESTIONS
      </Text>
      <View className="mx-2 mt-4">
        <FlatList
          numColumns={2}
          data={listCategoryQuestions}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={{ elevation: 6 }}
                className="my-2 mr-2 p-4 flex-[0.5] mx min-h-[80px] bg-indigo-500 rounded-md justify-center items-center"
                onPress={() =>
                  navigation.navigate("playground", { category: item })
                }
              >
                <Text className="text-white text-base text-center ">
                  {item.toUpperCase()}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default ListCategoryScreen;
