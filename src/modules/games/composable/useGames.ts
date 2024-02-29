import { computed, onMounted, ref } from 'vue';
import { getGames,  } from '../helpers/getGames';
import { useQuery } from '@tanstack/vue-query';



export const useGames = () => {

    const { isLoading, data: games, isError, error} = useQuery({
    queryKey: ['games'],
    queryFn: getGames,
    retry: false
    } )

    return {
        games, 
        isLoading,
        isError,
        error,

        count: computed(() => games?.value?.length ?? 0),
        wons: computed( () => games?.value?.filter(f => f.isWon).length ?? 0),
        loss: computed( () => games?.value?.filter(f => !f.isWon).length ?? 0),
    }

};

