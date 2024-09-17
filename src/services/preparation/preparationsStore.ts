import { ref } from "vue";
import { defineStore } from "pinia";

export const usePreparationsStore = defineStore("preparations", () => {
    const checklist = ref(1)
    const vote = ref(2)


    return { checklist, vote };
});
