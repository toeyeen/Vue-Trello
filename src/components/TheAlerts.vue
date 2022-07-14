<script setup lang="ts">
import {
  Notification,
  NotificationGroup,
} from "@progress/kendo-vue-notification";
import { useAlerts } from "@/store/alerts";
import { storeToRefs } from "pinia";

const onClose = (type: string) => {
  console.log(123);
};

const store = useAlerts();

const { notify, remove } = store;

const { items: notifications } = storeToRefs(store);
</script>

<template>
  <div>
    <NotificationGroup
      :style="{
        right: 0,
        top: 0,
        alignItems: 'flex-start',
        flexWrap: 'wrap-reverse',
      }"
    >
      <Slide
        v-for="{ id, style, message } in notifications"
        :key="id"
        :appear="style"
      >
        <Notification
          :type="{
            style: style,
            icon: true,
          }"
          :closable="true"
          @close="remove(id)"
          class="flex items-center px-2 py-1"
        >
          <span class="mr-4 text-lg">{{ message }}</span>
        </Notification>
      </Slide>
    </NotificationGroup>
  </div>
</template>

<style>
.k-notification-wrap {
  @apply items-center p-1;
}
</style>
