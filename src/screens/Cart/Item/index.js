import React, { useState } from "react";

import { Text, View } from "react-native";
import WholeField from "../../../components/WholeField";

import ButtonAdd from "../../../components/ButtonAdd";

import estilos from "./estilos";

export default function Item({ nome, preco, descricao, quantidade: quantityStarting }) {
  const [quantity, setQuantity] = useState(quantityStarting);
  const [total, setTotal] = useState(preco * quantityStarting);

  const updateTotalQuantity = (newQuantity) => {
    setQuantity(newQuantity);
    calculateTotal(newQuantity);
  };

  const calculateTotal = (newQuantity) => {
    setTotal(newQuantity * preco);
  };

  return (
    <>
      <View style={estilos.informacao}>
        <Text style={estilos.nome}>{nome}</Text>
        <Text style={estilos.descricao}>{descricao}</Text>
        <Text style={estilos.preco}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(preco)}
        </Text>
      </View>      
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
          <ButtonAdd valor="Remover do Carrinho" acao={() => {}} />
        </View>
      <View style={estilos.divisor} />
    </>
  );
}
