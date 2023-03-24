import React from "react";
import { TextInput } from "react-native";
import estilosPadrao from "./estilos";

export default function WholeField({valor, acao, estilos}) {
    const update = (novoValor, acaoRetorno) => {
        const checkInteger = novoValor.match(/^[0-9]*$/);
        if(!checkInteger) return;

        const removeZeroLeft = novoValor.replace(/^(0)(.+)/, '$2');

        acaoRetorno(removeZeroLeft);
    }

    const numberText = String(valor)

    return <TextInput
        style={[estilosPadrao.campo, estilos]}
        keyboardType='number-pad'
        onChangeText={(novoValor) => {update(novoValor, acao)}}
        selectTextOnFocus
        value={numberText}
    />
}