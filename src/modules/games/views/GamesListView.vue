
<script setup lang="ts">
import { useGames } from '../composable/useGames';
import Loading from '@/components/LoadingComponent.vue'

const { games, isLoading, count, wons, loss } = useGames();

</script>



<template>
  <Loading  v-if="isLoading" />
  <div class="lg:flex lg:items-center lg:justify-between p-3"  v-else>
    <div class="min-w-0 flex-1">
      <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Juegos Jugados - {{ count }}</h2>
      <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
        <div class="mt-2 flex items-center text-sm text-gray-500 font-bold text-2xl">
          <i class="fas fa-check"></i>
          {{ wons }}
        </div>
        <div class="mt-2 flex items-center text-sm text-gray-500 font-bold text-2xl">
          <i class="fas fa-times"></i>
          {{ loss }}
        </div>
        <div class="mt-2 flex items-center text-sm text-gray-500">
            <a class="btn-primary mt-2">
                <span class="mr-2">Agregar Juego</span>
                <i class="fa-regular fa-add"></i>
              </a>
        </div>
      </div>
    </div>
    <div class="overflow-x-auto">
      <table class="table-auto min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th class="table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">VS</th>
            <th class="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Carreras Favor</th>
            <th class="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Carreras Contra</th>
            <th class="md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="game in games" :key="game._id">
            <td class="table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" >{{ game.vsTeam }}</td>
            <td class="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" >{{ game.runsOut }}</td>
            <td class="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" >{{ game.runsIn }}</td>
            <td class="md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> {{ game.isWon ? 'Ganado' : 'Perdido' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
</div>

</template>


<style scoped>

</style>