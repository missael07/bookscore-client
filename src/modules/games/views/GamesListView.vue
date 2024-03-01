
<script setup lang="ts">
import Loading from '@/components/LoadingComponent.vue'
import Header from '@/modules/games/components/HeaderComponent.vue';
import Table from '@/modules/games/components/TableComponent.vue';
import { useRouter } from 'vue-router';
import { useGames } from '../composable/useGames';
import { Column } from '../../../interfaces/column';

const { games, isLoading, count, wons, loss, isError, error } = useGames();

const router = useRouter()
const addGame = () => {
  router.push({name: 'games-start'})
}

const columns: Column[] = [
{class: "table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", title: "Jornada"},
{class: "table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", title: "VS"},
{class: "hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", title: "Carreras Favor"},
{class: "hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", title: "Carreras Contra"},
{class: "hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", title: "Fecha"},
{class: "md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", title: "Resultado"},
]

const dataColumns: Column[] = [
{ class: "table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", title:  "gameNumber"},
{ class: "table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", title:  "vsTeam"},
{ class: "hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", title:  "runsOut"},
{ class: "hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", title:  "runsIn"},
{ class: "md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", title: "isWon"},
]
</script>

<template>
  <Loading  v-if="isLoading" />
  <div v-else-if="isError"> {{ error }}</div>
  <div class="lg:flex lg:flex-col items-center justify-between p-3"  v-else>
    <Header :wons="wons" :loss="loss" :count="count" @create="addGame" />
    <Table :games="games" :columns="columns" :data-columns="dataColumns"/>
  </div>
</template>
