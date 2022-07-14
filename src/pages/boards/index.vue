<script setup lang="ts">
import { Button as KButton } from "@progress/kendo-vue-buttons";
import { useAlerts } from "@/store/alerts";
import type { Board } from "../../types";
import { ref } from "vue";

const boards = ref<Partial<Board>[]>([
  {
    id: "1",
    title: "My First board",
    order: "[]",
    image: { downloadUrl: "https://picsum.photos/480/270?board=1" },
  },
  {
    id: "2",
    title: "My Second board",
    order: "[]",
    image: { downloadUrl: "https://picsum.photos/480/270?board=2" },
  },
  {
    id: "3",
    title: "My Third board",
    order: "[]",
    // image: { downloadUrl: 'https://picsum.photos/480/270?board=1' },
  },
]);

const alerts = useAlerts();

const createBoard = () => {
  alerts.success("Board Created");
  console.log(123);
};
</script>

<template>
  <h1 class="mb-5 text-3xl">Boards</h1>
  <KButton @click="createBoard" :icon="'folder'" :fill-mode="'outline'"
    >Add Board</KButton
  >
  <div class="my-4 border-b border-gray-200"></div>
  <div class="grid items-center grid-cols-3 gap-4">
    <BoardCard v-for="board in boards" :key="board.id" :board="board" />
  </div>
</template>

<style lang="scss" scoped></style>
