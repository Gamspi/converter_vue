import Axios, {AxiosError, AxiosInstance} from 'axios';
import {Notify} from 'quasar';


export default class ApiClient {
  protected $api: AxiosInstance;

  constructor(url: string) {
    const $api = Axios.create({
      baseURL: url,
      withCredentials: true
    });

    $api.interceptors.response.use(
      (config) => config,
      (error) => {
        this.catchError(error);
        throw error;
      }
    );
    this.$api = $api;
  }

  /**
   * Обработчик ошибок Axios, выводящий уведомление об ошибке.
   *
   * @param {AxiosError} error - Объект ошибки Axios.
   */
  private catchError = (error: unknown) => {
    const message =
      (error instanceof AxiosError) ?
        `
          ${error.config?.url && `При запросе ${error.config.url} произошла ошибка. `}
          ${error.code && `Код ${error.code}. `}
          ${error.response?.status && `Статус: ${error.response?.status}. `}
        ` :
        'Неизвестная ошибка при запросе';

    Notify.create({
      message,
      color: 'negative'
    });
  };
}
