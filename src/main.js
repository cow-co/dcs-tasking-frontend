import { createApp } from 'vue'
import App from './App.vue'

import BalmUI from 'balm-ui'; // Official Google Material Components
import BalmUIPlus from 'balm-ui-plus'; // BalmJS Team Material Components
import 'balm-ui-css';

createApp(App).use(BalmUI, {
  $theme: {
    background: "#2d2d2d",
    surface: "#707070",
    primary: "#2e7537",
    secondary: "#2d2d2d",
    error: "#ffffff",
  }
}).use(BalmUIPlus).mount('#app')
