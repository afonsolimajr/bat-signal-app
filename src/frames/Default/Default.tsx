import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

import logo from "../../../assets/bat-logo-1.png";
import { Button } from "../../components/Button/Button";

export function Default() {
  function handleButton() {}

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Button onPress={handleButton}>Ativar Bat Sinal</Button>
    </View>
  );
}
