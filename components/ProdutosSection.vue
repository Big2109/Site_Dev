
<script setup lang="ts">
import { ref } from 'vue'
import ProdutoCard from './ProdutoCard.vue'
import type { Produto } from '../types/Produto'

const produtos: Produto[] = [
  {
    nome: "Produto 1",
    preco: 399.90,
    imagem: "/Site_Dev/src/img/produto_1.png",
    descricao: "Descrição detalhada do produto."
  },
  {
    nome: "Produto 2",
    preco: 299.90,
    imagem: "/Site_Dev/src/img/produto_2.png",
    descricao: "Descrição detalhada do produto."
  },
  {
    nome: "Produto 3",
    preco: 199.90,
    imagem: "/Site_Dev/src/img/produto_3.png",
    descricao: "Descrição detalhada do produto."
  },
  {
    nome: "Produto 4",
    preco: 79.90,
    imagem: "/Site_Dev/src/img/produto_4.png",
    descricao: "Descrição detalhada do produto."
  },
  {
    nome: "Produto 5",
    preco: 143.90,
    imagem: "/Site_Dev/src/img/produto_5.png",
    descricao: "Descrição detalhada do produto."
  },
  {
    nome: "Produto 6",
    preco: 395.90,
    imagem: "/Site_Dev/src/img/produto_6.png",
    descricao: "Descrição detalhada do produto."
  },
  {
    nome: "Produto 7",
    preco: 99.90,
    imagem: "/Site_Dev/src/img/produto_7.png",
    descricao: "Descrição detalhada do produto."
  }
]

const grupos = ref<Produto[]>([...produtos])
</script>

<template>
  <section class="section-produtos">
    <div class="container-produtos">
      <ProdutoCard
        v-for="(produto, index) in grupos"
        :key="index"
        :nome="produto?.nome"
        :preco="produto?.preco"
        :imagem="produto?.imagem"
        :descricao="produto?.descricao"
        :vazio="produto?.vazio || !produto"
      />
    </div>
  </section>
</template>