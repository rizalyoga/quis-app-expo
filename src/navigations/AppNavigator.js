import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PlaygroundScreen from "../screen/PlaygroundScreen";
import SplashScreen from "../screen/SplashScreen";
import ListCategoryScreen from "../screen/ListCategoryScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="list-category" component={ListCategoryScreen} />
        <Stack.Screen name="playground" component={PlaygroundScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
