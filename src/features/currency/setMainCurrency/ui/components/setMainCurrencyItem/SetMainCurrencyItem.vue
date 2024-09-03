<template>
  <q-item clickable v-close-popup @click="onClick">
    <q-item-section>{{ item }}</q-item-section>
  </q-item>
</template>

<script setup lang="ts">

type TProps = {
  item: string
}
type TEmits = {
  update: [value: string]
}
const {item} = defineProps<TProps>()
const emit = defineEmits<TEmits>()
const onClick = () => {
  emit('update', item)
}
</script>
