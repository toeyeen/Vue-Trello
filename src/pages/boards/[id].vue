<script setup lang="ts">
import draggable from "vuedraggable";
import { useRoute } from "vue-router";
import { ref, reactive, toRefs, onMounted } from "vue";
import DraggableCard from "../../components/DraggableCard.vue";

import { vClickOutside } from "@/directives/v-click-outside";

const route = useRoute();
const props = defineProps<{ id: string }>();
const drag = ref(false);
const mouseEntered = ref(false);

const card1 = ref([
  {
    id: 1,
    name: "BackLog",
    order: [1],
    tasks: [
      { name: "Backlog", id: 1 },
      { name: "Cdde Refactor", id: 2 },
    ],
    type: "dynamic",
    mouseEntered: false,
  },
  {
    id: 2,
    name: "Design",
    order: [1],
    tasks: [
      { name: "Design & Research", id: 1 },
      { name: "Example task with design", id: 2 },
      { name: "Jean", id: 3 },
      { name: "Gerard", id: 4 },
    ],
    type: "dynamic",
    mouseEntered: false,
  },
  {
    id: 3,
    name: "To Do",
    order: [1],
    tasks: [{ name: "To do", id: 1 }],
    type: "dynamic",
    mouseEntered: false,
  },
  {
    id: 4,
    name: "Doing",
    order: [1],
    tasks: [
      {
        name: "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis repellendus reiciendis illum iusto ipsum magni rem asperiores aspernatur itaque natus quam ab eum sunt, alias distinctio odit pariatur perferendis officiis vel veritatis quo consectetur fugit. Quos dolores deserunt, officia vel deleniti itaque autem facilis. Praesentium nulla itaque sapiente harum minus? Ratione culpa sit eligendi laborum doloribus, iste corporis placeat velit sint, libero cum, omnis odit aut! Ullam beatae natus hic dignissimos consectetur nesciunt incidunt fugiat velit similique quibusdam voluptates repudiandae, in est illo aperiam modi autem vitae amet odio quasi eos animi consequuntur ut corrupti! Facere, rerum unde optio dolor sint saepe, quos ipsum similique architecto aperiam reprehenderit voluptatem cupiditate? Nobis distinctio alias autem veritatis explicabo, minus quis pariatur voluptas.    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis repellendus reiciendis illum iusto ipsum magni rem asperiores aspernatur itaque natus quam ab eum sunt, alias distinctio odit pariatur perferendis officiis vel veritatis quo consectetur fugit. Quos dolores deserunt, officia vel deleniti itaque autem facilis. Praesentium nulla itaque sapiente harum minus? Ratione culpa sit eligendi laborum doloribus, iste corporis placeat velit sint, libero cum, omnis odit aut! Ullam beatae natus hic dignissimos consectetur nesciunt incidunt fugiat velit similique quibusdam voluptates repudiandae, in est illo aperiam modi autem vitae amet odio quasi eos animi consequuntur ut corrupti! Facere, rerum unde optio dolor sint saepe, quos ipsum similique architecto aperiam reprehenderit voluptatem cupiditate? Nobis distinctio alias autem veritatis explicabo, minus quis pariatur voluptas.",
        id: 1,
      },
      {
        name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis repellendus reiciendis illum iusto ipsum ",
        id: 2,
      },
    ],
    type: "dynamic",
    mouseEntered: false,
  },
  {
    id: 5,
    name: "Doing",
    order: [1],
    tasks: [
      {
        name: "This list has the List Limits Power-up enabled, to help the team prioritize and remove bottlenecks before picking up new work. The list will be highlighted if the number of cards in it passes the limit that the team determines based on team size.",
        id: 1,
      },
    ],
    type: "dynamic",
    mouseEntered: false,
  },
  {
    id: 6,
    name: "Testing",
    order: [1],
    tasks: [{ name: "Testing", id: 1 }],
    type: "dynamic",
    mouseEntered: false,
  },
  {
    id: 7,
    name: "Done",
    order: [1],
    tasks: [{ name: "Done", id: 1 }],
    type: "new",
    mouseEntered: false,
  },
]);

// interface Data {
//   editTitle: {
//     id: null | string | number;
//     selected: boolean;
//   };
//   list1?: [];
//   list2?: [];
// }

const data = reactive({
  editTitle: {
    id: null,
    selected: false,
    text: "",
    taskField: "",
  },
  list1: [
    { name: "John", id: 1 },
    { name: "Joao", id: 2 },
    { name: "Jean", id: 3 },
    { name: "Gerard", id: 4 },
  ],
  list2: [
    { name: "Juan", id: 5 },
    { name: "Edgard", id: 6 },
    { name: "Johnson", id: 7 },
  ],
});

const board = ref<typeof props>({
  id: "1",
  title: "Lets have an amazing time with vue",
});

const { id: boardId } = toRefs(props);

const showKey = (obj: object) => {
  console.log(obj);
  console.log(123);
};
</script>

<template>
  <div class="flex justify-between gap-4 flex-nowrap">
    <draggable itemKey="id" :list="card1" group="card" class="flex gap-2">
      <template #item="{ element: card }">
        <DraggableCard :card="card" v-on:new-card="showKey" />
      </template>
    </draggable>
  </div>
</template>

<style>
.sortable-drag {
  /* @apply transform skew-y-12 !important; */

  /* opacity: 25%;
  background: blue !important; */
}
</style>
