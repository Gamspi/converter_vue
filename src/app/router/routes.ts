import {ConverterPage} from '@pages/converterPage';
import {IndexPage} from '@pages/indexPage';
import {ErrorNotFound} from '@pages/notFoundPage';
import {RouteRecordRaw} from 'vue-router';

import MainLayout from '../layouts/MainLayout.vue';


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '', component: IndexPage,
        meta: {title: 'Currency'}
      },
      {
        path: '/convert', component: ConverterPage,
        meta: {title: 'Converter'}
      }
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: ErrorNotFound,
  },
];

export default routes;
