import React, { useState } from "react";
import { View } from "react-native";

import { styles } from "./styles";
import { Default } from "../../frames/Default/Default";
import { Form } from "../../frames/Form/Form";

export function Home() {
  const [ativo, setAtivo] = useState(false);

  function handleAtivar() {
    setAtivo(true);
  }

  function handleEnviar() {
    setAtivo(false);
  }

  return (
    <View style={styles.container}>
      {ativo ? (
        <Form onEnviar={handleEnviar} />
      ) : (
        <Default onAtivar={handleAtivar} />
      )}
    </View>
  );
}
