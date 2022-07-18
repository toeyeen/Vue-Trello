<script setup lang="ts">
/** 3rdParty imported functions */
import { Button as KButton } from "@progress/kendo-vue-buttons";
import { vOnClickOutside } from "@vueuse/components";
import { Popup as KPopup } from "@progress/kendo-vue-popup";
import { v4 as uuid } from "uuid";
import draggable from "vuedraggable";

/** Framework imported functions */
import { reactive, ref } from "vue";

/** Local imported functions */
import type { CardItem } from "../types";
import { useAlerts } from "@/store/alerts";

/** Macro Functions */
const props = defineProps<{ card: CardItem }>();
const emit = defineEmits<{
  (event: "new-card", card: object): void;
}>();

/** Variable Declaration */
const editTitle = ref({
  id: null,
  selected: false,
  text: "",
  taskField: "",
  showAddTask: false,
});

const alert = useAlerts();

/** Local functions  */
const showEditTitle = (id: any, text: string) => {
  editTitle.value.id = id;
  editTitle.value.text = text;
};

const closeEditTitleDialog = () => {
  editTitle.value.id = null;
};

const editCardTitle = (card: CardItem) => {
  card.name = editTitle.value.text;
  closeEditTitleDialog();
};

const sumbitTask = (card: any) => {
  if (editTitle.value.taskField == "") {
    alert.notify("Task cannot be empty", "error");
    return;
  }
  card.tasks.push({ id: uuid(), name: editTitle.value.taskField });
  console.log((editTitle.value.taskField = ""));
};

const addCard = () => {
  emit("new-card", { id: "jolaoso", name: "Toyin" });
};
</script>

<template>
  <div>
    <div v-if="card.type == 'dynamic'">
      <div
        class="card bg-[#ebecf0] text-[#172b4d] flex flex-col px-4 w-[272px] rounded-md"
      >
        <div class="flex items-center justify-between mt-2">
          <div>
            <button
              class="relative px-2 text-sm bg-red-200 rounded-md"
              @click="showEditTitle(card.id, card.name)"
            >
              {{ card.name }}

              <div
                v-if="editTitle.id == card.id"
                class="w-[250px] flex justify-between items-center px-2 z-40 p-1 absolute top-12 -translate-y-[50%] -translate-x-[3%] border bg-white text-white rounded-md shadow-lg"
                v-on-click-outside="closeEditTitleDialog"
              >
                <input
                  type="text"
                  class="p-1 text-sm text-[#272727] font-medium bg-transparent focus:outline-none"
                  v-model="editTitle.text"
                />

                <KButton @click="editCardTitle(card)" theme-color="warning">
                  Done
                </KButton>
              </div>
            </button>

            <span class="ml-2 text-sm font-semibold">{{
              card.tasks.length
            }}</span>
          </div>

          <div>
            <span class="fill-current k-icon k-i-more-horizontal k-icon-32">
            </span>
          </div>
        </div>

        <!-- <div class="flex items-center justify-between h-10">
                <input
                  type="text"
                  class="p-1 text-sm font-bold bg-transparent focus:bg-white"
                  :value="`${card.name}`"
                />

              
              </div> -->
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
          <div v-if="editTitle.showAddTask == true">
            <textarea
              ref="textarea"
              type="text"
              class="flex w-full focus:outline-none px-2 py-1 items-center h-[54px] justify-between my-3 bg-transparent bg-white rounded-md text-sm shadow-md"
              placeholder="Enter a title for this card..."
              v-model="editTitle.taskField"
            ></textarea>

            <div class="flex items-center justify-between add-action">
              <div>
                <KButton
                  :theme-color="'primary'"
                  :disabled="editTitle.taskField.length < 1"
                  @click="sumbitTask(card)"
                  >Add card</KButton
                >
                <span
                  @click="editTitle.showAddTask = false"
                  class="ml-2 text-[#6b778c] cursor-pointer fill-current k-icon k-i-close k-icon-48"
                ></span>
              </div>

              <span
                class="cursor-pointer fill-current k-icon k-i-more-horizontal k-icon-32"
              ></span>
            </div>
          </div>

          <div
            class="px-1 py-2 mb-2 text-gray-700 cursor-pointer"
            @click="editTitle.showAddTask = true"
          >
            <span class="text-xl ill-current k-icon k-i-plus k-icon-48"></span>
            <button class="ml-2 border-none">Add a card</button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="card.type == 'new'" class="pr-4">
      <div
        class="flex-1 rounded-md bg-[#ffffff3d] border border-gray-300 w-[272px]"
      >
        <div class="px-1 py-2 text-gray-700 cursor-pointer" @click="addCard">
          <span class="text-xl ill-current k-icon k-i-plus k-icon-48"></span>
          <button class="ml-2 border-none">Add a card</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
