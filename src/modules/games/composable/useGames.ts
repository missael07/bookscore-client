import { computed, ref } from 'vue';
import { getGames } from '../helpers/getGames';
import { Games } from '../interfaces/games-list.response';


export const useGames = () => {

    const games = ref<Games[]>([])
    const isLoading = ref(true);


    getGames().then( data => {
        games.value = data 
        setTimeout(() => {
            isLoading.value = false;
        }, 3000);
    });

    return {
        games,
        isLoading,

        count: computed(() => games.value.length),
        wons: computed( () => games.value.filter(f => f.isWon).length),
        loss: computed( () => games.value.filter(f => !f.isWon).length),
    }

};

