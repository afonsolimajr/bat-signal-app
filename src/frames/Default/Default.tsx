import React from "react";
import { Image, View } from "react-native";

import { styles } from "./styles";

import logo from "../../../assets/bat-logo-1.png";
import { Button } from "../../components/Button/Button";

export function Default({ onAtivar }: { onAtivar?: () => void }) {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Button onPress={onAtivar}>Ativar Bat Sinal</Button>
    </View>
  );
}
