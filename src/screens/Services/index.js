import React from "react";

import { SafeAreaView, StatusBar, Text, FlatList } from "react-native";
import Item from "./Item";

export default function Services() {
  const servicos = [
    {
      id: 1,
      nome: "Permanete",
      descricao: "Feito especialmente para cabelos crespos",
      preco: 300.0,
    },
    {
      id: 2,
      nome: "Relaxamento",
      descricao: "Técnica de alisamento para cabelos cacheados e crespos",
      preco: 250.0,
    },
    {
      id: 3,
      nome: "Hidratação",
      descricao: "Saúde nos fios e no aspecto do cabelo.",
      preco: 100.0,
    },
    {
      id: 3,
      nome: "Manicure e Pedicure",
      descricao: "Saúde e estética das unhas e cut´ticulas das mãos e dos pés.",
      preco: 50.0,
    },
  ];

  return (
    <SafeAreaView>
      <StatusBar />
      <Text>Serviços!</Text>
      <FlatList
       data={servicos}
       renderItem={({item}) => <Item {...item} />}
       keyExtractor={({id}) => String(id)}
      />
    </SafeAreaView>
  );
}
