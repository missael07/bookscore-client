
import { ref } from 'vue'
import { useMutation } from '@tanstack/vue-query'

import gamesApi from '../api/gamesApi'
import { finishGameHelper, startGameHelper } from '../helpers/getGames'

import type { StartGame } from '../interfaces/start-game'
import type { Games } from '../interfaces/games-list.response';


export const useStartGame = () => {

    // Props
    const errorMessage = ref('');
    const game = ref<Games>();
    const hasGameStarted = ref(false);



    const startGame = async ( dataToSave: StartGame ) => {
        try {
            dataToSave.gameNumber = Number.parseInt(dataToSave.gameNumber.toString())
            const  data  = await startGameHelper(dataToSave);
            game.value = data;
            return data

        } catch (error) {
            console.log(error)
            errorMessage.value = 'No se pudo empezar el juego!';
            return
        }
    }
    const { isPending, isError, error, isSuccess} = useMutation({
        mutationFn: startGame,
    })



    const finishGame = async ( id: string ) => {
        // try {
        //     const dataToSend = {
        //         runsOut: +totalRunsOut.value,
        //         runsIn: +totalRunsIn.value,
        //         isWon: totalRunsOut.value > totalRunsIn.value
        //     }
        //     console.log(dataToSend);
        //     const  data  = await finishGameHelper(id, dataToSend);
        //     console.log(data)
        //     return data

        // } catch (error) {
        //     console.log(error)
        //     errorMessage.value = 'No se pudo empezar el juego!';
        //     return
        // }
    }

    const responseMutation = useMutation({
        mutationFn: startGame,
    })
    return {

        //Props
        error,
        errorMessage,
        game,
        hasGameStarted,
        isError,
        isPending,
        isSuccess,
        
        
        //Methods
        startGame,
        finishGame
    }
}