<script setup lang="ts">
import type { Board } from '../../types'
import { ref } from 'vue'

const boards = ref<Partial<Board>[]>([
  {
    id: '1',
    title: 'My First board',
    order: '[]',
    image: { downloadUrl: 'https://picsum.photos/480/270?board=1' },
  },
  {
    id: '2',
    title: 'My Second board',
    order: '[]',
    image: { downloadUrl: 'https://picsum.photos/480/270?board=2' },
  },
  {
    id: '3',
    title: 'My Third board',
    order: '[]',
    // image: { downloadUrl: 'https://picsum.photos/480/270?board=1' },
  },
])
</script>

<template>
  <h1 class="mb-5 text-3xl">Boards</h1>
  <div class="flex items-center gap-4">
    <BoardCard v-for="board in boards" :key="board.id" :board="board" />
    <h1>New Board +</h1>
  </div>
</template>

<style lang="scss" scoped></style>
