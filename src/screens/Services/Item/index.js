import React, { useState } from "react";

import { TouchableOpacity, Text, View } from "react-native";
import WholeField from "../../../components/WholeField";

import ButtonAdd from "../../../components/ButtonAdd";

import estilos from "./estilos";

export default function Item({ nome, preco, descricao }) {
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(preco);
  const [expand, setExpand] = useState(false);

  const updateTotalQuantity = (newQuantity) => {
    setQuantity(newQuantity);
    calculateTotal(newQuantity);
  };

  const calculateTotal = (newQuantity) => {
    setTotal(newQuantity * preco);
  };

  const invertExpand = () => {
    setExpand(!expand);
    updateTotalQuantity(1);
  };

  return (
    <>
      <TouchableOpacity style={estilos.informacao} onPress={invertExpand}>
        <Text style={estilos.nome}>{nome}</Text>
        <Text style={estilos.descricao}>{descricao}</Text>
        <Text style={estilos.preco}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(preco)}
        </Text>
      </TouchableOpacity>
      {expand && (
        <View style={estilos.carrinho}>
          <View>
            <View style={estilos.valor}>
              <Text style={estilos.descricao}>Quantidade:</Text>
              <WholeField
                estilos={estilos.quantidade}
                valor={quantity}
                acao={updateTotalQuantity}
              />
            </View>
            <View style={estilos.valor}>
              <Text style={estilos.descricao}>Total:</Text>
              <Text style={estilos.preco}>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(total)}
              </Text>
            </View>
          </View>
          <ButtonAdd valor="Adicionar ao Carrinho" acao={() => {}} />
        </View>
      )}
      <View style={estilos.divisor} />
    </>
  );
}
