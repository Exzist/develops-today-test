<template>
  <div class="country-card">
    <router-link
      :to="{
        name: 'country',
        params: { code: data.countryCode },
        query: { countryName: data.name },
      }"
      class="country-card__link"
      >{{ data.name }}</router-link
    >
    <p class="country-card__subtitle" v-if="data.holidayName">
      {{ data.holidayName }}
    </p>
    <p class="country-card__subtitle" v-if="data.date">{{ data.date }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CountryCard } from "@/components/logic/cards/CountryCard";

export default defineComponent({
  name: "country-card",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return CountryCard();
  },
});
</script>
