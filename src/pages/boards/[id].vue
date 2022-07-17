<script setup lang="ts">
import { Button as KButton } from "@progress/kendo-vue-buttons";
import draggable from "vuedraggable";
import { useRoute } from "vue-router";
import { ref, reactive, toRefs } from "vue";
const route = useRoute();

const props = defineProps<{ id: string }>();

const drag = ref(false);
const mouseEntered = ref(false);

const card1 = ref([
  {
    id: 1,
    name: "BackLog",
    ordeer: [1],
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
    ordeer: [1],
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
    ordeer: [1],
    tasks: [{ name: "To do", id: 1 }],
    type: "dynamic",
    mouseEntered: false,
  },
  {
    id: 4,
    name: "Doing",
    ordeer: [1],
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
    ordeer: [1],
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
    ordeer: [1],
    tasks: [{ name: "Testing", id: 1 }],
    type: "dynamic",
    mouseEntered: false,
  },
  {
    id: 7,
    name: "Done",
    ordeer: [1],
    tasks: [{ name: "Done", id: 1 }],
    type: "new",
    mouseEntered: false,
  },
]);

const data = reactive({
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
</script>

<template>
  <div class="flex justify-between gap-4 flex-nowrap">
    <draggable itemKey="id" :list="card1" group="card" class="flex gap-2">
      <template #item="{ element: card }">
        <div>
          <div v-if="card.type == 'dynamic'">
            <div
              class="card bg-[#ebecf0] text-[#172b4d] flex flex-col px-4 w-[272px] rounded-md"
            >
              <div class="flex items-center justify-between h-10">
                <input
                  type="text"
                  class="p-1 text-sm font-bold bg-transparent focus:bg-white"
                  :value="card.name"
                />
                <span
                  class="fill-current k-icon k-i-more-horizontal k-icon-32"
                ></span>
              </div>
              <!-- <input type="text" class="bg-transparent" :value="card.name" /> -->

              <draggable
                itemKey="id"
                :list="card.tasks"
                group="task"
                class="overflow-y-scroll max-h-96"
              >
                <template #item="{ element: task }">
                  <div
                    @mouseenter="task.mouseEntered = true"
                    @mouseleave="task.mouseEntered = false"
                    type="text"
                    class="relative px-2 py-2 my-3 text-sm bg-transparent bg-white rounded-md shadow-md cursor-pointer hover:bg-[#f4f5f7]"
                  >
                    <h1 class="">{{ task.name }}</h1>

                    <span
                      class="absolute right-0 float-right fill-current bottom-5 k-icon k-i-edit k-icon-48"
                      :class="[
                        task.mouseEntered
                          ? 'absolute right-0 float-right fill-current bottom-5 k-icon k-i-edit k-icon-48 '
                          : '',
                      ]"
                    ></span>
                  </div>
                </template>
              </draggable>

              <div>
                <div>
                  <textarea
                    type="text"
                    class="flex w-full focus:outline-none px-2 py-1 items-center h-[54px] justify-between my-3 bg-transparent bg-white rounded-md text-sm shadow-md"
                    placeholder="Enter a title for this card..."
                  ></textarea>

                  <div class="flex items-center justify-between add-action">
                    <div>
                      <KButton :theme-color="'primary'">Add card</KButton>
                      <span
                        class="ml-2 text-[#6b778c] cursor-pointer fill-current k-icon k-i-close k-icon-48"
                      ></span>
                    </div>

                    <span
                      class="cursor-pointer fill-current k-icon k-i-more-horizontal k-icon-32"
                    ></span>
                  </div>
                </div>

                <div class="px-1 py-2 my-2 text-gray-700 cursor-pointer">
                  <span
                    class="text-xl ill-current k-icon k-i-plus k-icon-48"
                  ></span>
                  <button class="ml-2 border-none">Add a card</button>
                </div>
              </div>
            </div>
          </div>

          <div v-if="card.type == 'new'" class="pr-4">
            <div
              class="flex-1 rounded-md bg-[#ffffff3d] border border-gray-300 w-[272px]"
            >
              <div class="px-1 py-2 text-gray-700 cursor-pointer">
                <span
                  class="text-xl ill-current k-icon k-i-plus k-icon-48"
                ></span>
                <button class="ml-2 border-none">Add a card</button>
              </div>
            </div>
          </div>
        </div>
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
