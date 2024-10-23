<template>
  <!-- May add header or sidebar -->
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Layout } from "@/components/logic/layouts/Layout";

export default defineComponent({
  name: "layout",
  setup() {
    return Layout();
  },
});
</script>
