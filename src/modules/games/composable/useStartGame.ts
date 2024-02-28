
import { ref } from 'vue'
import { useMutation } from '@tanstack/vue-query'

import gamesApi from '../api/gamesApi'
import { finishGameHelper, startGameHelper } from '../helpers/getGames'

import type { StartGame } from '../interfaces/start-game'
import type { Games } from '../interfaces/games-list.response';


export const useStartGame = () => {

    const errorMessage = ref('');
    const inning = ref<number>(1);

    const totalRunsOut = ref<number>(0);
    const totalRunsIn= ref<number>(0);
    const game = ref<Games>();

    const isAllowedToFinishTheGame = ref(false);

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

    const nextIning = (runs: any) => {
        console.log(runs)
        totalRunsIn.value = +runs.runsIn;
        totalRunsOut.value = +runs.runsOut;
        if (inning.value < 7 ) {
            inning.value ++;
        } else {
            isAllowedToFinishTheGame.value = true;
        }
    }

    const finishGame = async ( id: string ) => {
        try {
            console.log(totalRunsOut.value, totalRunsIn.value )
            const dataToSend = {
                runsOut: +totalRunsOut.value,
                runsIn: +totalRunsIn.value,
                isWon: totalRunsOut.value > totalRunsIn.value
            }
            console.log(dataToSend);
            const  data  = await finishGameHelper(id, dataToSend);
            console.log(data)
            return data
            
        } catch (error) {
            console.log(error)
            errorMessage.value = 'No se pudo empezar el juego!';
            return
        }
    }
    const responseMutation = useMutation({
        mutationFn: startGame,
    })
    return {
        isPending, isError, error, isSuccess, startGame, errorMessage,
        inning, isAllowedToFinishTheGame, game,

        nextIning,
        finishGame
    }
}