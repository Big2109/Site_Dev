<script setup lang="ts">
import { useCarrinho } from '../cartStore'
import { computed } from 'vue'
import WhatsappButton from './WhatsappButton.vue'

const { itens, removerDoCarrinho, limparCarrinho } = useCarrinho()

function formatarMoeda(valor: number) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

const valorTotalCarrinho = computed(() => {
    return itens.value.reduce((acumulador, item) => {
        return acumulador + (item.produto.preco * item.quantidade)
  }, 0)
})

</script>

<template>
    <div class="card-cart">
      <div class="container-card-cart">
          <div
          v-for="(item, index) in itens"
          :key="index"
          class="cart-info"
        >
          <h3>{{ item.produto.nome }}</h3>
          <button
            @click="removerDoCarrinho(item.produto.nome)"
            title="Remover produto"
          >
            <font-awesome-icon icon="trash-can" />
          </button>
          <b>Quantidade:</b> <i>{{ item.quantidade }}</i>
          <b>Valor uni.:</b> <i>{{ formatarMoeda(item.produto.preco) }}</i>
          <b>Valor total:</b> <i>{{ formatarMoeda(item.produto.preco * item.quantidade) }}</i>
      </div>
      <div v-if="itens.length === 0" class="carrinho-vazio">
        <p>Seu carrinho está vazio.</p>
      </div>
    </div>
    <div v-if="itens.length > 0" class="cart-total-geral">
            <hr class="divisor-total" />
            <div class="total-linha">
              <span>Total:</span>
              <h3>{{ formatarMoeda(valorTotalCarrinho) }}</h3>
            </div>
            <WhatsappButton />
            <button
             @click="limparCarrinho()"
              title="Limpar carrinho"
              class="limpar-carrinho"
            >
              <font-awesome-icon icon="trash-can" />
            </button>
    </div>
  </div>
</template>