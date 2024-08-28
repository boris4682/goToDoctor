import { ref } from "vue";
import { defineStore } from "pinia";

export const useDoctorsStore = defineStore("doctors", () => {
  const sectionId = ref<string>();

  const setSectionId = (id: string) => (sectionId.value = id);

  return { sectionId, setSectionId };
});
