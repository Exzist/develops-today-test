import ApiService from "@/core/services/ApiService";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCountriesStore = defineStore("countries", () => {
  // State
  const countries = ref([]);

  // Actions

  return { countries };
});
