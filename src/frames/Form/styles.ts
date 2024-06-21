import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    padding: 15,
    gap: 10,
    borderRadius: 10,
    marginTop: StatusBar.currentHeight,
  },
  logo: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },
});
