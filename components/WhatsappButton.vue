<script setup lang="ts">
import { computed } from 'vue'
import { useCarrinho } from '../cartStore'

const { itens } = useCarrinho()

const mensagem = computed(() => {
  let texto = 'Olá! Gostaria de fazer o seguinte pedido:%0A%0A'

  itens.value.forEach(item => {
    texto += `• ${item.produto.nome}%0A`
    texto += `Qtd: ${item.quantidade}%0A`
    texto += `Valor: R$ ${item.produto.preco.toFixed(2)}%0A%0A`
  })

  return texto
})

function enviarWhatsapp() {
  const telefone = '5511959097822'

  const url = `https://wa.me/${telefone}?text=${mensagem.value}`

  window.open(url, '_blank')
}
</script>

<template>
  <button
    class="btn-whatsapp"
    @click="enviarWhatsapp"
  >
    Finalizar
  </button>
</template>