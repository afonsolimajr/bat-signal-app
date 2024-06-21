import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";

import { styles } from "./styles";
import { Button } from "../../components/Button/Button";

import logo from "../../../assets/bat-logo-2.png";
import { Input } from "../../components/Input/Input";
import { Label } from "../../components/Label/Label";

export function Form({ onEnviar }: { onEnviar?: () => void }) {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Label>Título</Label>
      <Input placeholder="titulo" value="" onChange={() => {}} />
      <Label>Mensagem</Label>
      <Input
        placeholder="mensagem"
        multiline
        style={{ height: "100%", flexShrink: 1 }}
      />
      <Button onPress={onEnviar}>Enviar</Button>
    </View>
  );
}
