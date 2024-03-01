<template>
  <div v-if="lineUp.length < 10">
    <h1 class="text-xl">Jornada {{ getGame.gameNumber}}</h1>
    <h3>Caputar LineUp</h3>
    <form @submit.prevent="onSubmit">
      <div class="flex flex-col sm:flex-row mt-2 justify-center content-center">
        <div>
          <label class="block text-sm font-medium leading-6 text-gray-900"
            >Jornada Número</label
          >
          <input
            type="text"
            placeholder="Nombre del Jugador"
            v-model="playerName"
            class="mx-5 px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div>
          <label
            id="listbox-label"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Posicion</label
          >
          <select
            v-model="playerPosition"
            class="cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
          >
            <option value="">Selecciona Posición...</option>
            <option value="1">P</option>
            <option value="2">C</option>
            <option value="3">1B</option>
            <option value="4">2B</option>
            <option value="5">3B</option>
            <option value="6">SS</option>
            <option value="7">LF</option>
            <option value="8">CF</option>
            <option value="9">RF</option>
            <option value="10">JD</option>
          </select>
        </div>

        <button
          type="submit"
          class="start-game mt-4 m-5 rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <i class="fa-regular fa-plus"></i>
        </button>
      </div>
    </form>
  </div>

  <PlayersTableComponent :data="lineUp" v-if="lineUp.length > 0" />
  <button
    type="button"
    @click="startedGame"
    v-if="lineUp.length == 10 || lineUp.length == 9"
    class="start-game mt-1 m-5 rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
  >
    Empezar Juego
  </button>
  <MessageModal
    :is-open="isOpen"
    :title="'Error'"
    :icon="'fa-regular fa-circle-xmark'"
    :message="errorMessage"
    @close="closeModal"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import PlayersTableComponent from "../components/PlayersTableComponent.vue";
import { usePlayer } from "../composable/usePlayer";
import { Player } from "../interfaces/players";
import { useModal } from "@/composables/useModal";
import MessageModal from "@/components/MessageModal.vue";
import { useCaptureLineUp } from '../composable/useStartGame';

const { lineUp } = usePlayer();
const { isOpen, openModal, closeModal } = useModal();
const { getGame } = useCaptureLineUp()
const { startGame } = usePlayer();
const playerName = ref();
const playerPosition = ref("");
const errorMessage = ref("");

const onSubmit = () => {
  if (!validatePlayers()) {
    openModal();
    return;
  }

  const player: Player = {
    playerName: playerName.value,
    playerPosition: playerPosition.value,
    gameNumber: getGame.value._id
  };
  lineUp.value.push(player);

  playerName.value = "";
  playerPosition.value = "";

};

const validatePlayers = () => {
  if (lineUp.value.find((f) => f.playerPosition === playerPosition.value)) {
    errorMessage.value = "La posición ya fue asignada.";
    return false;
  }
  if (playerName.value === "" || playerPosition.value === "") {
    errorMessage.value = "Los campos son requeridos.";
    return false;
  }

  return true;
};

const startedGame = async () => {

  await startGame(lineUp.value);
}


</script>

<style scoped></style>
