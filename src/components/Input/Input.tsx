import React from "react";
import { TextInput, TextInputProps, View } from "react-native";

import { styles } from "./styles";

export function Input(props: TextInputProps) {
  return <TextInput {...props} style={[styles.input, props.style]} />;
}
