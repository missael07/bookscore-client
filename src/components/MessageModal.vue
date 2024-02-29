<template>
  <ModalComponent v-if="isOpen">
    <template v-slot:header>
      <div class="flex justify-center items-center h-1/3 mt-5">
        <i
          class="text-red-600 text-8xl"
          :class="icon"
        ></i>
        <hr />
      </div>
    </template>
    <template v-slot:footer>
      <div class="flex justify-center h-1/3">
        <button
          class="mr-3 mt-2 modal-button rounded-md px-3 h-7 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          @click.self="$emit('close')"
        >
          Ok
        </button>
      </div>
    </template>
    <template v-slot:body>
      <div class="h-1/3 align-middle">
        <div>
          <h1 class="text-5xl">{{ title }}</h1>
        </div>
        <div>
          <p class="text-xl">{{ message }}</p>
        </div>
      </div>
    </template>
  </ModalComponent>
</template>

<script setup lang="ts">
import ModalComponent from "@/components/ModalComponent.vue";

interface Props {
  title: string;
  message: string;
  icon: string;
  isOpen: boolean;
}

defineProps<Props>();
</script>

<style scoped>

.modal-button {
        background-color:#14b8a6;
    }
</style>
