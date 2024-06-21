import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#323232",
    padding: 10,
  },
  logo: {
    width: 180,
    resizeMode: "contain",
  },
  button: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    padding: 5,
    borderRadius: 10,
    borderColor: "orange",
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
