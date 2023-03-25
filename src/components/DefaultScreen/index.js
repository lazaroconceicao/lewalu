import React from "react";

import { SafeAreaView, KeyboardAvoidingView, Platform, StatusBar } from "react-native";
import estiloGlobal from '../../estilos';

export default function DefaultScreen({ children }) {
  return (
    <SafeAreaView style={estiloGlobal.preencher}>
      <StatusBar />
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? "padding" : "height"}
        style={estiloGlobal.preencher}
      >
        { children }
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
