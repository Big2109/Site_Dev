<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCarrinho } from '../cartStore'
import type { Produto } from '../types/Produto'

const props = withDefaults(
  defineProps<{
    nome?: string
    preco?: number
    imagem?: string
    descricao?: string
    vazio?: boolean
    quantidadeInicial?: number
  }>(),
  {
    quantidadeInicial: 1
  }
)

const quantidade = ref(props.quantidadeInicial)
const estoqueMaximo = 1000

const precoTotalFormatado = computed(() => {
  if (props.preco === undefined || props.preco === null) return ''

  const total = props.preco * quantidade.value

  return total.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
})

function aumentar() {
  if (quantidade.value < estoqueMaximo) {
    quantidade.value++
  }
}

function diminuir() {
  if (quantidade.value > 1) {
    quantidade.value--
  }
}

function validarQuantidade(event: Event) {
  const input = event.target as HTMLInputElement
  let valor = parseInt(input.value)

  if (isNaN(valor) || valor < 1) {
    valor = 1
  } else if (valor > estoqueMaximo) {
    valor = estoqueMaximo
  }

  quantidade.value = valor
  input.value = String(valor)
}


const { adicionarAoCarrinho } = useCarrinho()

function Comprar() {
const produtoAtual: Produto = {
    nome: props.nome || '',
    preco: props.preco ?? 0,
    imagem: props.imagem || ''
  }

  adicionarAoCarrinho(produtoAtual, quantidade.value)
  quantidade.value = props.quantidadeInicial
}
</script>

<template>
  <div
    class="card-produto"
    :class="{ 'card-vazio': vazio }"
  >
    <template v-if="!vazio">

      <div class="card-imagem-produto">
        <img
          :src="imagem"
          :alt="nome"
        >
      </div>

      <div class="card-conteudo-produto">
        <h2>{{ nome }}</h2>

        <p>{{ descricao }}</p>

        <div class="card-preco">
          <span>{{ precoTotalFormatado }}</span>
        </div>

        <div class="compra-container">
            <div class="seletor-quantidade">
              <button class="btn-qtd" @click="diminuir" :disabled="quantidade <= 1">−</button>
              <input
                type="text"
                inputmode="numeric"
                class="input-qtd"
                :value="quantidade"
                @blur="validarQuantidade"
              />
              <button class="btn-qtd" @click="aumentar" :disabled="quantidade >= estoqueMaximo">+</button>
            </div>

            <button id="comprar" class="btn-comprar" @click="Comprar">
              <font-awesome-icon icon="shopping-cart" />
            </button>
          </div>
      </div>

    </template>
  </div>
</template>