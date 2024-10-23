import { onMounted, ref, watch } from "vue";
import { useCountriesStore } from "@/store/Countries";
import { useRoute } from "vue-router";

export function Country() {
  const countriesStore = useCountriesStore();
  const route = useRoute();

  const countryName = ref(route.query.countryName);
  const holidayYearInput = ref(2024);

  watch(holidayYearInput, () => {
    countriesStore.getYearCountryHolidays(
      `${route.params.code}`,
      holidayYearInput.value
    );
  });

  onMounted(() => {
    countriesStore.getYearCountryHolidays(
      `${route.params.code}`,
      holidayYearInput.value
    );
  });

  return { countriesStore, countryName, holidayYearInput };
}
