import { ref } from "vue";

export const useModal = () => {
  const isOpen = ref(true);

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
