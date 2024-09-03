import {convertToCurrency} from '@entities/currency/lib/converter';
import {serverApi} from '@shared/services';

export class CurrencyService{
  private static api = serverApi
  static getList = async () => {
    const response = await  this.api.get('currency')
    return convertToCurrency(response.data)
  }
}
