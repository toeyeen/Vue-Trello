<script setup lang="ts">
import {
  Drawer as KDrawer,
  DrawerContent as KDrawerContent,
} from '@progress/kendo-vue-layout'
import type { DrawerList } from '../types'

import { useRouter } from 'vue-router'

import { computed, ref } from 'vue'

const selectedId = ref(0)

const router = useRouter()

const expanded = ref(false)

const expandedIcon = computed<string>(() =>
  expanded.value ? 'k-i-arrow-chevron-left' : 'k-i-arrow-chevron-right'
)

const items = computed(() => [
  {
    text: 'Boards',
    icon: 'k-i-set-column-position',
    selected: true,
    data: {
      path: '/boards',
    },
  },
  {
    text: 'Templates',
    icon: 'k-i-border-left',
    data: {
      path: '/templates',
    },
  },
  {
    text: 'Settings',
    icon: 'k-i-gear',
    data: {
      path: '/settings',
    },
  },
  {
    text: 'Collapse',
    icon: expandedIcon.value,
    data: {
      action: () => (expanded.value = !expanded.value),
    },
  },
])
// const items = computed<Partial<DrawerList>[]>(() => [
//   {
//     text: 'Boards',
//     icon: 'k-i-set-column-position',
//     selected: true,
//     data: {
//       path: '/',
//     },
//   },
//   {
//     text: 'Templates',
//     icon: 'k-i-border-left',
//     data: {
//       path: '/templates',
//     },
//   },
//   {
//     text: 'Settings',
//     icon: 'k-i-gear',
//     data: {
//       path: '/settings',
//     },
//   },
//   {
//     text: 'Collapse',
//     icon: expandedIcon.value,
//     data: {
//       action: () => (expanded.value = !expanded.value),
//     },
//   },
// ])

const onSelect = ({ itemIndex }: { itemIndex: number }) => {
  console.log(items.value[itemIndex])
  const item = items.value[itemIndex]
  if (item.data.path) router.push(item.data.path)
  if (typeof item.data.action === 'function') item.data.action()
}
</script>
<template>
  <KDrawer
    class="h-[90vh]"
    :expanded="expanded"
    position="start"
    mode="push"
    :mini="true"
    :items="items"
    @select="onSelect"
  >
    <KDrawerContent>
      <div class="px-5">
        <router-view />
      </div>
    </KDrawerContent>
  </KDrawer>
</template>

<style scoped></style>
