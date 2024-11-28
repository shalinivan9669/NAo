// plugins/vuex.ts
import { defineNuxtPlugin } from '#app';
import { createStore } from 'vuex';
import storeConfig from '~/store/index';

export default defineNuxtPlugin(({ vueApp }) => {
  console.log('Plugin: Initializing Vuex Store');
  const vuexStore = createStore(storeConfig);
  vueApp.use(vuexStore);
  vuexStore.dispatch('initialize');
  console.log('Plugin: Vuex Store Initialized');
});
