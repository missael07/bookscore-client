<template>
  <div v-if="!getGame._id">
    <i class="fa-solid fa-arrow-left float-left ml-1 mt-3" @click="back"></i>
  </div>

  <CaptureTeamsView v-if="!getGame._id"/>
  <CaputerLineUpView  v-else/>

  <!-- <form @submit="onNextIning">
    <div v-if="isStartedGame" class="flex flex-col mt-2 justify-center content-center">
      <h4>Entrada - {{ inning }}</h4>
      <label class="block text-sm font-medium leading-6 text-gray-900">Carreras Anotadas</label>
      <input type="number" placeholder="Carreras Anotadas" v-model="runsOut" class="mt-2 mx-5 px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
      <label class="block text-sm font-medium leading-6 text-gray-900">Carreras Recibidas</label>
      <input type="number" placeholder="Carrreras Recibidas" v-model="runsIn"  class="mt-2 mx-5 px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
      <button type="submit" v-if="!isAllowedToFinishTheGame" class="mt-1 m-5 rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
        Terminar Entrada
      </button>
    </div>
  </form> -->
  <!-- <button type="button" @click="endGame" v-if="isAllowedToFinishTheGame" class="mt-1 m-5 rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
    Terminar Juego
  </button> -->
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import CaptureTeamsView from "./CaptureTeamsView.vue";
import CaputerLineUpView from "./CaputerLineUpView.vue";
import { useCaptureLineUp } from '../composable/useStartGame';
const { getGame } = useCaptureLineUp();
const router = useRouter();

const back = () => {
  const answer = window.confirm('Seguro que deseas abandonar esta página? Se perderán todos los cambios')
        if( !answer ) return false
  router.push({ name: "games-list" });
}

</script>
