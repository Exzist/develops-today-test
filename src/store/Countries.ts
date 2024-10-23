import ApiService from "@/core/services/ApiService";
import { defineStore } from "pinia";
import { ref } from "vue";
import { Country, CountryHoliday } from "@/assets/ts/types/interfaces";

export const useCountriesStore = defineStore("countries", () => {
  // State
  const countries = ref<Country[]>([]);
  const countryHoliday = ref<CountryHoliday[]>([]);
  const countryYearHoliday = ref<CountryHoliday[]>([]);

  // Actions
  function getCountries() {
    return ApiService.query("/AvailableCountries", {})
      .then(({ data }) => {
        countries.value = data;
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function getCountryHolidays(countryCode: string) {
    return ApiService.query(`/NextPublicHolidays/${countryCode}`, {})
      .then(({ data }) => {
        countryHoliday.value = data;
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function getYearCountryHolidays(countryCode: string, year: number) {
    return ApiService.query(`/PublicHolidays/${year}/${countryCode}`, {})
      .then(({ data }) => {
        countryYearHoliday.value = data;
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return {
    countries,
    countryHoliday,
    countryYearHoliday,
    getCountries,
    getCountryHolidays,
    getYearCountryHolidays,
  };
});
