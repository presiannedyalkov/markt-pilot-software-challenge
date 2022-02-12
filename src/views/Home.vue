<template>
  <div class="home">
    <ChocolatesOverview />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ChocolatesOverview from "@/components/Overview.vue";

export default defineComponent({
  name: "Home",
  components: {
    ChocolatesOverview,
  },
});
</script>
