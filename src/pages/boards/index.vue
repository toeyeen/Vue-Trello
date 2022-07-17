<script setup lang="ts">
import { Button as KButton } from "@progress/kendo-vue-buttons";
import {
  Dialog as KDialog,
  DialogActionsBar as KDialogActionsBar,
} from "@progress/kendo-vue-dialogs";
import { Input as KInput } from "@progress/kendo-vue-inputs";
import draggable from "vuedraggable";
import { useAlerts } from "@/store/alerts";
import type { Board, Colors } from "../../types";
import { ref, reactive, computed } from "vue";

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
    color: "bg-red-800",
    // image: { downloadUrl: 'https://picsum.photos/480/270?board=1' },
  },
]);

let uid = 3;
const title = ref("");
const visibleDialog = ref(false);
const alerts = useAlerts();
const colors = ref<Colors[]>([
  {
    id: 1,
    color: "#0079BF",
    type: "bg-blue-400",
  },
  {
    id: 2,
    color: "#D29034",
    type: "bg-yellow-400",
  },
  {
    id: 3,
    color: "#519839",
    type: "bg-green-400",
  },
  {
    id: 4,
    color: "#B04632",
    type: "bg-indigo-400",
  },
  {
    id: 5,
    color: "#89609E",
    type: "bg-purple-400",
  },
  {
    id: 6,
    color: "#CD5A91",
    type: "bg-pink-400",
  },
]);

const boardState = reactive({
  isDisabled: false,
  title: "",
  color: "bg-blue-400",
  drag: false,
});

const newColor = (index: string | number) => {
  switch (index) {
    case 1:
      return "bg-blue-400";
      break;
    case 2:
      return "bg-green-400";
      break;
    case 3:
      return "bg-yellow-400";
      break;
    case 4:
      return "bg-purple-400";
      break;
    case 5:
      return "bg-pink-400";
      break;
    case 6:
      return "bg-indigo-400";
      break;

    default:
      "bg-gray-600";
      break;
  }
};

const selectBg = (type: string) => {
  boardState.color = type;
};

const toggleBoard = () => {
  visibleDialog.value = !visibleDialog.value;
};

const createBoard = () => {
  uid++;
  boards.value.push({
    id: uid.toString(),
    title: boardState.title,
    color: boardState.color,
    order: "[]",
  });

  boardState.title = "";
  boardState.color = "bg-blue-400";
  toggleBoard();
  alerts.success("Board Created");
};

const log = (evt: any) => {
  console.log(evt);
};
</script>

<template>
  <h1 class="mb-5 text-3xl">Boards</h1>
  <KButton @click="toggleBoard" :icon="'folder'" :fill-mode="'outline'"
    >Add Board</KButton
  >
  <div class="my-4 border-b border-gray-200"></div>

  <draggable
    :list="boards"
    item-key="name"
    class="grid items-center grid-cols-3 gap-4 list-group"
    ghost-class="ghost"
    @start="boardState.drag = true"
    @end="boardState.drag = false"
  >
    <template #item="{ element: board }">
      <BoardCard :board="board" />
    </template>
  </draggable>

  <!-- KDialog Component -->
  <k-dialog
    v-if="visibleDialog"
    class="text-center"
    :title="'Create Board'"
    :width="316"
    @close="toggleBoard"
  >
    <div
      class="h-32 w-[200px] mx-auto bg-blue-400"
      :class="boardState.color"
    ></div>

    <div class="">
      <label class="block mt-2 mb-1 text-xs text-left uppercase"
        >Background</label
      >
      <div class="flex flex-wrap gap-2">
        <img
          v-for="(backgroundPics, index) in new Array(4).fill(1)"
          :key="index"
          class="rounded-md"
          src="https://picsum.photos/64/40"
          alt=""
        />
      </div>
      <div class="flex flex-wrap gap-2 mt-3">
        <div
          v-for="({ color, type, id }, index) in colors"
          :key="index"
          class="w-10 h-8 rounded-md"
          v-bind:class="[boardState.color === type ? 'selected' : '']"
          :class="newColor(id)"
          @click="selectBg(type)"
        ></div>
      </div>

      <label for="title" class="block mt-2 mb-1 text-xs text-left uppercase"
        >Board Title <span class="text-red-600">*</span></label
      >
      <KInput
        v-model="boardState.title"
        :size="'large'"
        :rounded="'large'"
        :fill-mode="'outline'"
      />

      <KButton
        class="w-full mt-4"
        :class="'custom-color'"
        :size="'large'"
        :disabled="boardState.title.length < 3"
        @click="createBoard"
      >
        Create</KButton
      >
    </div>
    <!-- <dialog-actions-bar>
      <kbutton @click="toggleBoard">No</kbutton>
      <kbutton :theme-color="'primary'" @click="toggleBoard">Yes</kbutton>
    </dialog-actions-bar> -->
  </k-dialog>
</template>

<style scoped>
.custom-color {
  /* @apply bg-green-600; */
  @apply text-red-500;
}

.selected {
  @apply border-2 border-gray-500;
}
</style>
