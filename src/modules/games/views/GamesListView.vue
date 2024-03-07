
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

</script>

<template>
  <Loading  v-if="isLoading" />
  <div v-else-if="isError"> {{ error }}</div>
  <div class="lg:flex lg:flex-col items-center justify-between p-3"  v-else>
    <Header :wons="wons" :loss="loss" :count="count" @create="addGame" />
    <Table :games="games" />
  </div>
</template>
