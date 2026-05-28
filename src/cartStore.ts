import { ref } from 'vue'
import type { Produto } from '../src/types/Produto'

export interface ItemCarrinho {
    produto: Produto
    quantidade: number
}

const itens = ref<ItemCarrinho[]>([])

export function useCarrinho() {
    function adicionarAoCarrinho(produto: Produto, quantidade: number) {
        const itemExistente = itens.value.find(item => item.produto.nome === produto.nome)

        if (itemExistente) {
            itemExistente.quantidade += quantidade
        } else {
            itens.value.push({ produto, quantidade })
        }
    }

    function removerDoCarrinho(nomeProduto: string) {
        itens.value = itens.value.filter(item => item.produto.nome !== nomeProduto)
    }

    function limparCarrinho() {
        itens.value = []
    }

    return {
        itens,
        adicionarAoCarrinho,
        removerDoCarrinho,
        limparCarrinho
    }
}