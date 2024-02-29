import { ref } from "vue";


export const useChangeInning = () => {

    const inning = ref<number>(1);

    const totalRunsOut = ref<number>(0);
    const totalRunsIn= ref<number>(0);
    const isAllowedToFinishTheGame = ref(false);


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

    return {
        //Props
        inning, 
        isAllowedToFinishTheGame,

        //Methods
        nextIning
    }
}

