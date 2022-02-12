<template>
  <div class="card rounded overflow-hidden shadow-lg bg-white">
    <img
      class="w-full"
      src="https://images.unsplash.com/photo-1626697556651-67ebdcb8cbd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
      alt="chocolate"
    />
    <div class="text-center w-full mx-auto p-6">
      <div class="font-bold text-xl mb-2">
        {{ chocolate.name }}
        <span
          class="
            inline-block
            bg-gray-200
            rounded-full
            px-3
            py-1
            text-sm
            font-semibold
            text-gray-700
            mr-2
            mb-2
          "
          >{{ chocolate.brand }}</span
        >
      </div>
      <p class="text-gray-700 text-base">
        <b>Lowest price per 100g:</b> {{ calculatedPrices.lowestPrice.value
        }}<br />
        <b>Average price per 100g:</b> {{ calculatedPrices.averagePrice.value
        }}<br />
      </p>
      <div class="mt-6 inline-flex">
        <a
          v-if="calculatedPrices.lowestPriceLink.value"
          :href="calculatedPrices.lowestPriceLink.value"
          class="
            py-2
            px-4
            mr-4
            rounded-lg
            bg-red-600
            border-2 border-transparent
            hover:bg-red-700
            text-white text-md text-center text-base
            transition
            ease-in
            duration-200
            shadow-md
            focus:outline-none focus:ring-2 focus:ring-offset-2
          "
        >
          Get the cheapest!
        </a>
        <p
          v-else
          class="
            py-2
            px-4
            mr-4
            rounded-lg
            bg-transparent
            border-2 border-gray
            hover:bg-gray-700 hover:text-white
            text-gray-700 text-md text-center text-base
          "
        >
          Price is missing
        </p>
        <router-link
          :to="{ name: 'detail', params: { id: chocolate.id } }"
          tag="button"
          class="
            py-2
            px-4
            rounded-lg
            bg-transparent
            border-2 border-red-600
            hover:bg-red-600 hover:text-white
            text-md text-red-600 text-center text-base
            transition
            ease-in
            duration-200
            shadow-md
            focus:outline-none focus:ring-2 focus:ring-offset-2
          "
          >Read more</router-link
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onBeforeMount } from "vue";
import { EnhancedPrice } from "@/types";
import { calculatePrices, pricePer100g } from "@/logic/calculatePrices";

export default defineComponent({
  name: "ChocolatesCard",
  props: {
    chocolate: Object,
  },
  setup(props) {
    const prices: EnhancedPrice[] = reactive(props.chocolate?.prices);

    const calculatedPrices = calculatePrices(prices);

    onBeforeMount(() => pricePer100g(prices));

    return { calculatedPrices };
  },
});
</script>

<style scoped>
</style>
