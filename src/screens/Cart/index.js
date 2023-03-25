import React from "react";
import { FlatList } from "react-native";
import Item from "./Item";
import DefaultScreen from "../../components/DefaultScreen";

const service = [
  {
    id: 1,
    nome: "Permanete",
    preco: 300.0,
    descricao: "Feito especialmente para cabelos crespos.",
    quantidade: 1,
  },
  {
    id: 2,
    nome: "Relaxamento",
    preco: 250.0,
    descricao: "Técnica de alisamento para cabelos cacheados e crespos.",
    quantidade: 2,
  },
  {
    id: 3,
    nome: "Hidratação",
    preco: 100.0,
    descricao: "Saúde nos fios e no aspecto do cabelo.",
    quantidade: 1,
  },
  {
    id: 4,
    nome: "Manicure e Pedicure",
    preco: 50.0,
    descricao: "Saúde e estética das unhas e cuticulas das mãos e dos pés.",
    quantidade: 2,
  },
];

export default function Cart() {
  return (
    <DefaultScreen>
      <FlatList
        data={service}
        removeClippedSubviews={false}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={({ id }) => String(id)}
      />
    </DefaultScreen>
  );
}
