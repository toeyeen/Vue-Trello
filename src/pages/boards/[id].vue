<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, toRefs } from "vue";
const route = useRoute();

const props = defineProps<{ id: string; title: string }>();

const board = ref<typeof props>({
  id: "1",
  title: "Lets have an amazing time with vue",
});

const { id: boardId } = toRefs(props);
</script>

<template>
  <div>
    <pre>{{ board }}</pre>
  </div>
</template>
