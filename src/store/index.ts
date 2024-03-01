import { createStore } from 'vuex'
import games from '../modules/games/store/index';
import dashboardModule from '../modules/dashboard/store/index';

export default createStore({

  modules: {
    games,
    dashboardModule
  }
})
