<template>
<div class="overflow-x-auto">
      <table class="table-auto min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th class="table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jornada</th>
            <th class="table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">VS</th>
            <th class="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Carreras Favor</th>
            <th class="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Carreras Contra</th>
            <th class="md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resultado</th>
          </tr>
        </thead>
        <tbody v-if="$props.games && $props.games?.length > 0">
          <tr v-for="game in games" :key="game._id" >
            <td class="table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" >{{ game.gameNumber }}</td>
            <td class="table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" >{{ game.vsTeam }}</td>
            <td class="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" >{{ game.runsOut }}</td>
            <td class="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" >{{ game.runsIn }}</td>
            <td class="md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> {{ game.isWon ? 'Ganado' : 'Perdido' }}</td>
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
import { Games } from "../interfaces/games-list.response"


interface Props {
    games: Games[] | undefined
}

defineProps<Props>();


</script>
