import { ref } from "vue";

export const useModal = () => {
  const isOpen = ref(false);

  const openModal = () => {
    isOpen.value = true;
  };

  const closeModal = () => {
    isOpen.value = false;
  };


  return {
    //Props
    isOpen,

    //Methods
    openModal,
    closeModal
  }
};
