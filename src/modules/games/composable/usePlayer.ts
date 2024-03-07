import { computed, ref } from "vue"
import { Player } from "../interfaces/players"
import { startedGame } from "../helpers/startGame"
import { useMutation } from "@tanstack/vue-query"
import { useStore } from "vuex"



export const usePlayer = () => {

    const store = useStore();

    const lineUp = ref<Player[]>([]);

    const startGame = async (players: Player[]) => {
        try {

            console.log(players);
            const playersToSend = {
                player: players
            }
            const  data  = await startedGame(playersToSend);

            store.dispatch('games/setPlayers', data)

            return data

        } catch (error) {
            console.log(error)
            return
        }
    }
    const { isPending, isError, error, isSuccess} = useMutation({
        mutationFn: startGame,
    })

    return {
        lineUp,
        startGame,

        getPlayers: computed( () => {
            return store.getters['games/getPlayers']
        }),
        getIsGameStarted: computed( () => {
            return store.getters['games/isGameStart']
        })
    }
}