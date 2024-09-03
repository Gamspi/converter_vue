<template>
  <div class="q-pa-sm q-pl-md row items-center">
    <div class="cursor-pointer non-selectable">
      {{ mainCurrency || currencyListData?.list[0] }}
      <q-menu>
        <q-list dense style="min-width: 100px" v-if="currencyListData">
          <SetMainCurrencyItem
            @update="onUpdateMainCurrency"
            v-for="item in currencyListData?.list"
            :item="item"
            :key="item"/>
        </q-list>
      </q-menu>
    </div>
  </div>
</template>

<script setup lang="ts">

import {currencyModel} from '@entities/currency';

import SetMainCurrencyItem from './components/setMainCurrencyItem/SetMainCurrencyItem.vue';

const {updateMainCurrency, mainCurrency} = currencyModel.useStore()
const {data: currencyListData} = currencyModel.useCurrencyList()
const onUpdateMainCurrency = (val: string) => {
  updateMainCurrency(val)
}

</script>
