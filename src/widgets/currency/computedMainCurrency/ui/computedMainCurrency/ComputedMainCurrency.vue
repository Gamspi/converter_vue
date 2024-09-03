<template>
  <div class="computed-main-currency">
    <MainLoader :is-open="isLoading"/>
    <template v-if="!isLoading">
      <q-card class="my-card" flat bordered>
        <q-card-section>
          <h1 class="text-h3">Currency</h1>
        </q-card-section>
        <q-markup-table class="computed-main-currency__table" flat bordered>
          <tbody>
          <template v-for="(item, key) in computedListValue" :key="key">
            <tr>
              <td class="text-right">1</td>
              <td class="text-left">{{ mainCurrency || currencyData?.list[0] }}</td>
              <td class="text-right">{{ key }}</td>
              <td class="text-left">{{ fixedValue(item) }}</td>
            </tr>
          </template>
          </tbody>
        </q-markup-table>
      </q-card>
    </template>
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue';

import {currencyModel} from '@entities/currency';
import {MainLoader} from '@shared/ui';

const {mainCurrency} = currencyModel.useStore()
const {data: currencyData, isLoading} = currencyModel.useCurrencyList()
const computedListValue = computed<Record<string, number>>(() => {
  const currencyCode = mainCurrency.value || currencyData.value?.list[0]
  if (!currencyCode || !currencyData.value) return {}
  return currencyData.value.data[currencyCode]
})

const fixedValue = (val: number) => Math.round(val * 100) / 100
</script>

<style scoped>
@import "style.scss";
</style>
