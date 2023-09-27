import { View, Text } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("list-category");
    }, 2300);
  }, []);

  return (
    <View className="flex-1 justify-center items-center bg-indigo-500 ">
      {/* <Animatable.Text animation="zoomInUp">Zoom me up, Scotty</Animatable.Text> */}
      <Animatable.Text
        animation="zoomInUp"
        className="font-bold text-4xl text-white"
      >
        QUIS APP
      </Animatable.Text>
    </View>
  );
};

export default SplashScreen;
