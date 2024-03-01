
<template>
<div class="overflow-x-auto">
      <table class="table-auto min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th class="table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            <th class="table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
            <th class="table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Posición</th>
          </tr>
        </thead>
        <tbody v-if="$props.data && $props.data?.length > 0">
          <tr v-for="(player, index) in data" :key="index" >
            <td class="table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" >{{ index + 1 }}</td>
            <td class="table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" >{{ player.playerName }}</td>
            <td class="table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" >{{ player.playerPosition }}</td>
         </tr>
        </tbody>
        <tbody v-else>
          <trs>
            <td class="table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" colspan="4" >No hay juegos registrados.</td>
          </trs>
        </tbody>
      </table>
    </div>
</template>

<script setup lang="ts">
import { Player } from '../interfaces/players';

interface Props {
    data: Player[];
}

defineProps<Props>();
</script>

<style scoped>

</style>