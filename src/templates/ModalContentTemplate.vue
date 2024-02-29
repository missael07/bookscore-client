<template>
    <template v-slot:header>
      <div class="flex justify-center items-center h-1/3">
          <i class="fa-regular fa-circle-xmark text-red-600 text-8xl "></i>
        <!-- <div class="flex justify-evenly items-center p-4 rounded-lg">
        </div> -->
        <hr />
      </div>
    </template>
    <template v-slot:footer>
        <div class="flex justify-center h-1/3">
            <button class="mr-3 mt-2 modal-button rounded-md px-3 h-7 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" @click="closeModal">Close</button>
        </div>
    </template>
    <template v-slot:body>
      <div class="h-1/3 align-middle">
        <div>
            <h1 class="text-5xl">Error</h1>
        </div>
        <div>
            <p class="text-xl">Ambos campos son requeridos.</p>
        </div>
      </div>
    </template>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>