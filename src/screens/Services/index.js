import React from "react";
import { SafeAreaView, StatusBar, Text, FlatList } from "react-native";
import Item from "./Item";

const service = [
  {
    id: 1,
    nome: "Permanete",
    preco: 300.0,
    descricao: "Feito especialmente para cabelos crespos.",
  },
  {
    id: 2,
    nome: "Relaxamento",
    preco: 250.0,
    descricao: "Técnica de alisamento para cabelos cacheados e crespos.",
  },
  {
    id: 3,
    nome: "Hidratação",
    preco: 100.0,
    descricao: "Saúde nos fios e no aspecto do cabelo.",
  },
  {
    id: 4,
    nome: "Manicure e Pedicure",
    preco: 50.0,
    descricao: "Saúde e estética das unhas e cuticulas das mãos e dos pés.",
  },
];

export default function Services() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Text>Serviços!</Text>
      <FlatList
       data={service}
       removeClippedSubviews={false}
       renderItem={({item}) => <Item {...item} />}
       keyExtractor={({id}) => String(id)}
      />
    </SafeAreaView>
  );
}
