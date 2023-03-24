import React, { useState } from "react";

import { Text, View } from "react-native";
import WholeField from "../../../components/WholeField";

import ButtonAdd from "../../../components/ButtonAdd";

import estilos from "./estilos";

export default function Item({ nome, preco, descricao }) {
    const [amount, setAmount] = useState(1);
  return (
    <>
      <View style={estilos.informacao}>
        <Text style={estilos.nome}>{nome}</Text>
        <Text style={estilos.descricao}>{descricao}</Text>
        <Text style={estilos.preco}>{preco}</Text>
      </View>
      <View style={estilos.carrinho}>
        <View>
            <View style={estilos.valor}>
                <Text style={estilos.descricao}>Quantidade:</Text>
                <WholeField estilos={estilos.quantidade} valor={amount} acao={setAmount}/>
            </View>
            <View style={estilos.valor}>
                <Text style={estilos.descricao}>Preço:</Text>
                <Text style={estilos.preco}>0</Text>
            </View>
        </View>
        <ButtonAdd valor="Adicionar" acao={() => {}} />
      </View>
      <View style={estilos.divisor}/>
    </>
  );
}
