import React from "react";
import { View } from "react-native";

import { styles } from "./styles";
import { Default } from "../../frames/Default/Default";
import { Form } from "../../frames/Form/Form";

export function Home() {
  return (
    <View style={styles.container}>
      <Default />
      {/* <Form /> */}
    </View>
  );
}
