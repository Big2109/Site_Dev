<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import Cart from './Cart.vue'
import { useCarrinho } from '../cartStore'

const menuActive = ref(false)
const cartActive = ref(false)
const headerRef = ref<HTMLElement | null>(null)

function toggleMenu() {
  menuActive.value = !menuActive.value
  closeCart()
}

function closeMenu() {
  menuActive.value = false
}

function toggleCart() {
  cartActive.value = !cartActive.value
  closeMenu()
}

function closeCart() {
  cartActive.value = false
}

function handleClickOutside(event: MouseEvent) {
  const target = event.target as Node

  if (
    menuActive.value &&
    headerRef.value &&
    !headerRef.value.contains(target)
  ) {
    closeMenu()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const route = useRoute()

watch(
  () => route.path,
  () => {
    closeMenu()
    closeCart()
  }
)

const { itens } = useCarrinho()

const quantidadeItens = computed(() => {
  return itens.value.reduce((total, item) => {
    return total + item.quantidade
  }, 0)
})
</script>

<template>
  <header
    ref="headerRef"
    class="header"
  >
    <div class="logo"></div>

    <button class="menu-toggle" @click="toggleMenu">
      ☰
    </button>

    <nav class="menu" :class="{ active: menuActive }">
      <RouterLink to="/" class="item-menu">
        Início
      </RouterLink>

      <RouterLink to="/produtos" class="item-menu">
        Produtos
      </RouterLink>

      <RouterLink to="/contato"class="item-menu">
        Contato
      </RouterLink>

      <RouterLink to="/sobre" class="item-menu">
        Sobre
      </RouterLink>
    </nav>

  <button
    v-if="route.path === '/produtos'"
    class="cart-toggle"
    @click.stop="toggleCart"
  >
    <font-awesome-icon icon="shopping-cart" />

     <span
        v-if="quantidadeItens > 0"
        class="cart-badge"
      >
        {{ quantidadeItens }}
      </span>
  </button>

  </header>

  <aside
    v-if="route.path === '/produtos'"
    ref="cartRef"
    class="cart"
    :class="{ active: cartActive }"
  >
  <Cart />
  </aside>
</template>