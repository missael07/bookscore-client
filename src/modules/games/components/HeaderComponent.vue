<script setup lang="ts">
interface Props {
  count: number;
  wons: number;
  loss: number;
}

const props = withDefaults(defineProps<Props>(), {
  count: 0,
  wons: 0,
  loss: 0,
});
const emits = defineEmits(["create"]);
</script>

<template>
  <div class="min-w-0 flex-1">
    <h2
      class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight"
    >
      Juegos Jugados <template v-if="count > 0">- {{ count }}</template>
    </h2>
    <div
      class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6"
    >
      <template v-if="count > 0">
        <div
          class="mt-2 flex items-center text-sm text-gray-500 font-bold text-2xl"
        >
          <i class="fas fa-check mr-1"></i>
          {{ wons }}
        </div>
        <div
          class="mt-2 flex items-center text-sm text-gray-500 font-bold text-2xl"
        >
          <i class="fas fa-times mr-1"></i>
          {{ loss }}
        </div>
      </template>
      <div class="mt-2 flex items-center text-sm text-gray-500 justify-end">
        <button
          class="start-game mt-1 m-5 rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          @click="$emit('create')"
        >
          <span class="mr-2">Agregar Juego</span>
          <i class="fa-regular fa-add"></i>
        </button>
      </div>
    </div>
  </div>
</template>
