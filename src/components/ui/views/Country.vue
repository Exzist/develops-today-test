<template>
  <main class="main country">
    <div class="country__container">
      <section class="country__holidays holidays">
        <div class="holidays__wrapper">
          <h1 class="holidays__title">{{ countryName }}</h1>
          <div class="holidays__list-wrapper">
            <ul class="holidays__list">
              <li
                v-for="(holiday, index) in countriesStore.countryYearHoliday"
                :key="index"
                class="holidays__list-item"
              >
                <div class="country-card">
                  <p>Locale name: {{ holiday.localName }}</p>
                  <p>Name: {{ holiday.name }}</p>
                  <p>Date: {{ holiday.date }}</p>
                  <p>Type: {{ `${[...holiday.types]}` }}</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="holidays__pagination-wrapper">
            <label class="holidays__radio-label" v-for="el in 11" :key="el"
              ><input
                class="holidays__radio-input"
                type="radio"
                v-model="holidayYearInput"
                :value="2019 + el"
              /><span class="holidays__radio-text">{{ 2019 + el }}</span></label
            >
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Country } from "@/components/logic/views/Country";

export default defineComponent({
  name: "country",
  setup() {
    return Country();
  },
});
</script>
