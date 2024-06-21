import React from "react";
import { Text, TextProps } from "react-native";

import { styles } from "./styles";

export function Label(props: TextProps) {
  return (
    <Text style={styles.label} {...props}>
      {props.children}
    </Text>
  );
}
