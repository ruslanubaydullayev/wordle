import Vue from 'vue';
import VueMask from 'v-mask';
Vue.use(VueMask);   
import { VueMaskFilter } from 'v-mask'
Vue.filter('VMask', VueMaskFilter)
