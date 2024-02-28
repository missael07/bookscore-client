import { computed, onMounted, ref } from 'vue';
import { getGames, } from '../helpers/getGames';
import { Games } from '../interfaces/games-list.response';
import { StartGame } from '../interfaces/start-game';

const games = ref<Games[]>([])
const isLoading = ref(true);

export const useGames = () => {

    const game = ref<Games>();
    const vsTeam = ref('');
    const gameNumber = ref(0);

    onMounted( async () => {
        const data = await getGames();
        games.value = data 
        setTimeout(() => {
            isLoading.value = false;
        }, 3000);
    })



    return {
        games,
        isLoading,
        game,
        vsTeam,
        gameNumber,

        count: computed(() => games.value.length),
        wons: computed( () => games.value.filter(f => f.isWon).length),
        loss: computed( () => games.value.filter(f => !f.isWon).length),
        startGame: async (dataToSave: StartGame) => {
            console.log(dataToSave);
            // game.value = await startGame(dataToSave)
        }
    }

};

