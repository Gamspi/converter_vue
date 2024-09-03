<template>
  <div class="currency-converter-field">
    <q-select
      filled
      :model-value="props.selectValue"
      :options="currencyListData?.list"
      :label="props.label"
      stack-label
      @update:model-value="onSelect"
    />
    <q-input
      :model-value="computedValue"
      :label="props.label"
      type="number"
      @update:model-value="onInput"
      error-message="не валидное значение"
    />
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue';

import {currencyModel} from '@entities/currency';

type TProps = {
  selectValue: string
  inputValue: number
  label?: string
}
type TEmits = {
  'update:selectValue': [string]
  'update:inputValue': [number]
  'change': []
}

const {data: currencyListData} = currencyModel.useCurrencyList()
const props = defineProps<TProps>()
const emit = defineEmits<TEmits>()
const onInput = (value: string) => {
  let result = parseFloat(value) || 0
  emit('update:inputValue', result)
  emit('change')
}

const onSelect = (value: string) => {
  emit('update:selectValue', value)
  emit('change')
}

const computedValue = computed(() => parseFloat((+props.inputValue).toFixed(2)))

</script>

<style scoped>
@import "./style.scss";
</style>
