<template>
  <main class="main home">
    <div class="home__container">
      <div class="home__wrapper">
        <article class="home__main-content">
          <section class="home__countries countries">
            <div class="countries__wrapper">
              <h1 class="countries__title">Countries list</h1>
              <div class="countries__search-wrapper">
                <input
                  class="countries__search-input"
                  v-model="searchInput"
                  @input="filterCountries"
                  type="text"
                  placeholder="Enter country name to search"
                />
              </div>
              <div class="countries__list-wrapper">
                <ul class="countries__list">
                  <li
                    v-for="country in filteredCountries"
                    :key="country.countryCode"
                    class="countries__list-item"
                  >
                    <country-card :data="country" />
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </article>
        <aside class="home__interesting interesting">
          <h2 class="interesting__title">Interesting countries</h2>
          <div class="interesting__list-wrapper">
            <ul class="interesting__list">
              <li
                v-for="country in randomCountries"
                :key="country.countryCode"
                class="interesting__list-item"
              >
                <country-card :data="country" />
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Home } from "@/components/logic/views/Home";
import CountryCard from "@/components/ui/cards/CountryCard.vue";

export default defineComponent({
  name: "home",
  components: {
    CountryCard,
  },
  setup() {
    return Home();
  },
});
</script>
