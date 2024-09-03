<template>
  <div class="currency-converter">
    <MainLoader :is-open="isLoading"/>
    <CurrencyConvertField
      v-model:selectValue="fromSelectUnit"
      v-model:input-value="fromValue"
      @change="onChangeFromInput"
    />
    <CurrencyConvertField
      v-model:selectValue="toSelectUnit"
      v-model:input-value="toValue"
      @change="onChangeToInput"
    />
  </div>
</template>

<script setup lang="ts">
import {computed, ref, watch} from 'vue';

import {currencyModel} from '@entities/currency';
import {MainLoader} from '@shared/ui';

import CurrencyConvertField
  from './component/currencyConvertField/CurrencyConvertField.vue';

const {data: currencyListData, isLoading} = currencyModel.useCurrencyList()
const fromValue = ref(0)
const fromSelectUnit = ref<string>(currencyListData.value?.list[0] || '')
const toValue = ref(0)
const toSelectUnit = ref<string>(currencyListData.value?.list[1] || '')
const computedV = computed(() => {
  if (!currencyListData.value) return 0
  return currencyListData.value.data[fromSelectUnit.value][toSelectUnit.value]
})

const onChangeFromInput = () => {
  if (toSelectUnit.value === fromSelectUnit.value) return toValue.value = fromValue.value
  toValue.value = computedV.value * fromValue.value
}

const onChangeToInput = () => {
  if (toSelectUnit.value === fromSelectUnit.value) return fromValue.value = toValue.value
  fromValue.value = toValue.value / computedV.value
}


watch(isLoading, (value) => {
  if (!value) {
    fromSelectUnit.value = currencyListData.value?.list[0] || ''
    toSelectUnit.value = currencyListData.value?.list[1] || ''
  }
})
</script>

<style scoped>
@import "style.scss";
</style>
