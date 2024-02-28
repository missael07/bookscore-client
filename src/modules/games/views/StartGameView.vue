<template>
  <div v-if="!isStartedGame">
    <i class="fa-solid fa-arrow-left float-left ml-1 mt-3" @click="back"></i>
  </div>
  <form @submit.prevent="onSubmit">
    <div class="flex flex-col mt-2 justify-center content-center">
      <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Jornada Número</label>
      <input
        type="number"
        placeholder="Jornada No."
        v-model="gameNumber"
        :disabled="isStartedGame"
        class="mt-2 mx-5 px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Equipo Encontra</label>
      <input
        type="text"
        placeholder="Equipo Encontra"
        v-model="vsTeam"
        :disabled="isStartedGame"
        class="mt-2 mx-5 px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <button
        type="submit"
        v-if="!isStartedGame"
        class="mt-1 m-5 rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        Empezar Juego
      </button>
    </div>
  </form>

  <form @submit="onNextIning">
    <div v-if="isStartedGame" class="flex flex-col mt-2 justify-center content-center">
      <h4>Entrada - {{ inning }}</h4>
      <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Carreras Anotadas</label>
      <input type="number" placeholder="Carreras Anotadas" v-model="runsOut" class="mt-2 mx-5 px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
      <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Carreras Recibidas</label>
      <input type="number" placeholder="Carrreras Recibidas" v-model="runsIn"  class="mt-2 mx-5 px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
      <button type="submit" v-if="!isAllowedToFinishTheGame" class="mt-1 m-5 rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
        Terminar Entrada
      </button>
    </div>
  </form>
  <button type="button" @click="endGame" v-if="isAllowedToFinishTheGame" class="mt-1 m-5 rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
    Terminar Juego
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { StartGame } from "../interfaces/start-game";
import { useStartGame } from "../composable/useStartGame";
import { useRouter } from "vue-router";

const router = useRouter();
const {
  game,
  startGame,
  nextIning,
  inning,
  isAllowedToFinishTheGame,
  finishGame,
} = useStartGame();

const vsTeam = ref();
const gameNumber = ref<number>();
const runsOut = ref<number>(0);
const runsIn = ref<number>(0);

const isStartedGame = ref(false);

const onSubmit = async () => {
  const dataToSave: StartGame = {
    vsTeam: vsTeam.value,
    gameNumber: gameNumber?.value ?? 0,
  };
  const resp = await startGame(dataToSave);

  if (resp) {
    isStartedGame.value = true;
  }
};

const onNextIning = () => {
  const dataToSave = {
    runsOut: +runsOut.value,
    runsIn: +runsIn.value,
  };
  nextIning(dataToSave);

  //  runsOut.value = 0;
  //     runsIn.value = 0;
};
const endGame = async () => {
  // console.log(game.value?._id)
  await finishGame(game.value?._id ?? "");
  router.push({ name: "games-list" });
};

const back = () => {
  const answer = window.confirm('Seguro que deseas abandonar esta página? Se perderán todos los cambios')
        if( !answer ) return false
  router.push({ name: "games-list" });
}

</script>

<style scoped>
button {
  background-color: #14b8a6;
}
</style>
