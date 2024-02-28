import { createStore } from 'vuex'
import gamesModule from '../modules/games/store/index';
import dashboardModule from '../modules/dashboard/store/index';

export default createStore({

  modules: {
    gamesModule,
    dashboardModule
  }
})
