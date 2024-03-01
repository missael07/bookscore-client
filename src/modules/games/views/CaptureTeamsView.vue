<template>
  <form @submit.prevent="onSubmit" v-if="!hasGameStarted">
    <div class="flex flex-col mt-2 justify-center content-center">
      <label class="block text-sm font-medium leading-6 text-gray-900"
        >Jornada Número</label
      >
      <input
        type="number"
        placeholder="Jornada No."
        v-model="gameNumber"
        :disabled="hasGameStarted"
        class="mt-2 mx-5 px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        max="99"
        />
      <label class="block text-sm font-medium leading-6 text-gray-900"
        >Equipo Encontra</label
      >
      <input
        type="text"
        placeholder="Equipo Encontra"
        v-model="vsTeam"
        :disabled="hasGameStarted"
        class="mt-2 mx-5 px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <button

        type="submit"
        v-if="!hasGameStarted"
        class="start-game mt-1 m-5 rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        Capturar Lineup
      </button>
    </div>
  </form>
  <MessageModal
    :is-open="isOpen"
    :title="'Error'"
    :icon="'fa-regular fa-circle-xmark'"
    message="Ambos campos son requeridos."
    @close="closeModal"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useCaptureLineUp } from "../composable/useStartGame";
import { StartGame } from "../interfaces/start-game";
import { useModal } from "../../../composables/useModal";
import MessageModal from "@/components/MessageModal.vue";

const { hasGameStarted, startGame } = useCaptureLineUp();

const { isOpen, openModal, closeModal } = useModal();

const vsTeam = ref();
const gameNumber = ref<number>();

const onSubmit = async () => {
  if (!validateData()) {
    openModal();
    return;
  }

  const dataToSave: StartGame = {
    vsTeam: vsTeam.value,
    gameNumber: gameNumber?.value ?? 0,
  };
  const resp = await startGame(dataToSave);

  if (resp) {
    hasGameStarted.value = true;
  }
};

const validateData = () => {
  if (vsTeam.value && gameNumber.value) return true;
  return false;
};
</script>

<style scoped>
.start-game {
  background-color: #14b8a6;
}
</style>
