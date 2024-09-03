import {CurrencyService} from '@entities/currency/api/currencyService';
import {createStore} from '@shared/lib/helpers';
import {useQuery} from '@tanstack/vue-query';

const useStore = createStore('currency', {
  state: () => ({
    mainCurrency: '',
  }),
  actions: {
    updateMainCurrency(payload: string) {
      this.mainCurrency = payload;
    }
  }
});

const useCurrencyList = () => {
  return useQuery({
    queryKey: ['currency', 'list'],
    queryFn: () => CurrencyService.getList(),
  })
}

export default {
  useStore,
  useCurrencyList
};
