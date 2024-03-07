<template>
  <div class="overflow-x-auto">
    <table class="table-auto min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th
            class="table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          ></th>
          <th
            class="table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Nombre
          </th>
          <th
            class="table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Turno Al Bat
          </th>
        </tr>
      </thead>
      <tbody v-if="$props.data && $props.data?.length > 0">
        <tr v-for="(player, index) in data" :key="index">
          <td
            class="table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            {{ index + 1 }}
          </td>
          <td
            class="table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            {{ player.playerName }}({{ player.playerPosition }})
          </td>
          <td
            class="table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            <select
              class="cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
            >
              <option value="">Selecciona...</option>
              <option value="H1">H1</option>
              <option value="H2">H2</option>
              <option value="H3">H3</option>
              <option value="HR">HR</option>
              <option value="BB">BB</option>
              <option value="BG">BG</option>
              <option value="BO">BO</option>
              <option value="OUT">OUT</option>
              <option value="DP">DP</option>
              <option value="TP">TP</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { Player } from "../interfaces/players";

interface Props {
  data: Player[];
}

defineProps<Props>();
</script>

<style scoped></style>
