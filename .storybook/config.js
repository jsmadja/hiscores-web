import Vue from 'vue';
import '../src/plugins/bootstrap-vue';
import '../src/App.scss';

import filters from '../src/filters';

Vue.filter('formatPercent', filters.formatPercent);
Vue.filter('formatNumber', filters.formatNumber);
Vue.filter('formatRank', filters.formatRank);
Vue.filter('formatDate', filters.formatDate);
