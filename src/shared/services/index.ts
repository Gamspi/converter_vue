import {API_URL} from '@shared/config';
import {ApiService} from '@shared/lib/apiService';

const serverApi = new ApiService(API_URL)

export {
  serverApi
}
