import {catchFunctionError} from '@shared/lib/helpers/catchFunctionError';

export const convertToCurrency = catchFunctionError((data: any) => {
  const result:Record<string, Record<string, number>>  = {}
  for (const dataKey in data) {
    const [fromKey , toKey] = dataKey.toUpperCase().split('-')
    const existItem = result[fromKey]
    if (!existItem) {
      result[fromKey] = {}
    }
    const item = data[dataKey];
    result[fromKey][toKey] = item
  }
  return {
    list: Object.keys(result),
    data: result
  };
})
