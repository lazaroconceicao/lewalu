import React from "react";
import { TouchableOpacity, Text } from "react-native";
import functionDefaultStyles from "./estilos";

export default function ButtonAdd({pequeno = false, invertido = false, valor, acao, estilos}) {
    const defaultStyles = functionDefaultStyles(pequeno, invertido);
    return <TouchableOpacity onPress={acao} style={[defaultStyles.botao, estilos]}>
        <Text style={defaultStyles.valor}>{valor}</Text>
    </TouchableOpacity>
}