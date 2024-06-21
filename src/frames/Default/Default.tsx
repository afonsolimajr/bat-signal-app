import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

import logo from "../../../assets/bat-logo-1.png";

export function Default() {
  function handleButton() {}

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <TouchableOpacity style={styles.button} onPress={handleButton}>
        <Text style={styles.buttonText}>Ativar Bat Sinal</Text>
      </TouchableOpacity>
    </View>
  );
}
