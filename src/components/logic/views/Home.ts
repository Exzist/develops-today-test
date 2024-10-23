import { onMounted, ref } from "vue";
import { useCountriesStore } from "@/store/Countries";
import { Country } from "@/assets/ts/types/interfaces";

export function Home() {
  const countriesStore = useCountriesStore();

  const randomCountries = ref<object[]>([]);
  const searchInput = ref("");
  const filteredCountries = ref<Country[]>([]);

  const filterCountries = () => {
    filteredCountries.value = countriesStore.countries.filter((el: any) =>
      el.name.toLowerCase().includes(searchInput.value.toLowerCase())
    );
  };

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 115);
  };

  const getCountries = async () => {
    // get all countries
    await countriesStore.getCountries();
    filteredCountries.value = countriesStore.countries;

    // get 3 random countries and data about holidays
    const usedCountries: number[] = [];

    while (usedCountries.length < 3) {
      const index = getRandomNumber();
      if (!(index in usedCountries)) {
        usedCountries.push(index);
        await countriesStore.getCountryHolidays(
          countriesStore.countries[index]["countryCode"]
        );
        randomCountries.value.push({
          ...countriesStore.countryHoliday[0],
          ...countriesStore.countries[index],
          holidayName: countriesStore.countryHoliday[0].name,
        });
      }
    }
  };

  onMounted(() => {
    getCountries();
  });

  return {
    randomCountries,
    countriesStore,
    searchInput,
    filteredCountries,
    filterCountries,
  };
}
