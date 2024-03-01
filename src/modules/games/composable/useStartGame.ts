
import { computed, ref } from 'vue'
import { useMutation } from '@tanstack/vue-query'


import { startGameHelper } from '../helpers/getGames'

import type { StartGame } from '../interfaces/start-game'
import type { Games } from '../interfaces/games-list.response';
import { useStore } from 'vuex'


export const useCaptureLineUp = () => {

    const store = useStore();

    // Props
    const errorMessage = ref('');
    const game = ref<Games>();
    const hasGameStarted = ref(false);
    const hasGameStartedComputed = computed(() => hasGameStarted.value)


    const startGame = async ( dataToSave: StartGame ) => {
        try {
            dataToSave.gameNumber = Number.parseInt(dataToSave.gameNumber.toString())
            const  data  = await startGameHelper(dataToSave);
            game.value = data;
            hasGameStarted.value = true;
            store.dispatch('games/setGameData', game.value);
            return data

        } catch (error) {
            console.log(error)
            hasGameStarted.value = false;

            errorMessage.value = 'No se pudo empezar el juego!';
            return
        }
    }
    const { isPending, isError, error, isSuccess} = useMutation({
        mutationFn: startGame,
    })

    return {

        //Props
        hasGameStartedComputed,
        error,
        errorMessage,
        game,
        hasGameStarted,
        isError,
        isPending,
        isSuccess,
        
        
        //Methods
        startGame,

        //getters
        getGame: computed( () => {
           return  store.getters['games/getGame']
        })
    }
}