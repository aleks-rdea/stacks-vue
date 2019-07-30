import Vue from 'vue';
import RdeaBanner from './RdeaBanner.vue';

const Components = {
  RdeaBanner
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;