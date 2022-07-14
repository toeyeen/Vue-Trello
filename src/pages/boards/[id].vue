<script setup lang="ts">
import AppImageDropzone from '../../components/AppImageDropZone.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div>
    <h1 class="text-2xl text-center">Board {{ route.params.id }}</h1>
    <AppImageDropzone />
  </div>
</template>
