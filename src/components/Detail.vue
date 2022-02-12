<template>
  <div class="detail w-4/12 flex flex-col mx-auto mb-10">
    <div
      class="card flex flex-col justify-center bg-white rounded-lg shadow-2xl"
    >
      <div class="prod-img w-full">
        <img
          src="https://images.unsplash.com/photo-1626697556651-67ebdcb8cbd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
          class="object-cover object-center"
          alt="chocolate"
        />
      </div>
      <div class="p-10 w-full">
        <div class="prod-title">
          <p class="text-2xl uppercase text-gray-900 font-bold">
            {{ chocolate.name }}
          </p>
          <p class="text-2xl uppercase text-gray-400">
            {{ chocolate.brand }}
          </p>
        </div>
        <div class="mt-6">
          <p class="text-2xl text-gray-900">Prices</p>
          <table class="table-auto w-full shadow mt-4">
            <thead>
              <tr>
                <th
                  class="
                    border-b-2
                    p-4
                    dark:border-dark-5
                    whitespace-nowrap
                    font-normal
                    text-gray-900
                    bg-gray-50
                  "
                >
                  Price
                </th>
                <th
                  class="
                    border-b-2
                    p-4
                    dark:border-dark-5
                    whitespace-nowrap
                    font-normal
                    text-gray-900
                    bg-gray-50
                  "
                >
                  Amount
                </th>
                <th
                  class="
                    border-b-2
                    p-4
                    dark:border-dark-5
                    whitespace-nowrap
                    font-normal
                    text-gray-900
                    bg-gray-50
                  "
                >
                  Link
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(price, index) in calculatedPrices.sortedPrices.value"
                :key="index"
                class="text-gray-700"
                :class="{ 'bg-orange-100': index === 0 }"
              >
                <td class="border-b-2 p-4 dark:border-dark-5">
                  {{ price.price }}
                </td>
                <td class="border-b-2 p-4 dark:border-dark-5">
                  {{ price.amount }} {{ price.unit }}
                </td>
                <td class="border-b-2 p-4 dark:border-dark-5">
                  <a :href="price.link"> {{ price.link }}</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mt-6">
          <p class="text-2xl text-gray-900">Nutrition facts</p>
          <div class="mt-4">
            <div class="flex justify-between">
              <div class="font-bold">Total Fat</div>
              <div class="font-bold">{{ chocolate.nutrition.fat.total }}</div>
            </div>
            <hr class="border-gray-500" />
            <div class="flex justify-between">
              <div>Saturated Fat</div>
              <div>
                {{ chocolate.nutrition.fat.saturated }}
              </div>
            </div>
            <hr class="border-gray-500" />
            <div class="flex justify-between">
              <div class="font-bold">Total Carbohydrate</div>
              <div class="font-bold">
                {{ chocolate.nutrition.carbohydrates.total }}
              </div>
            </div>
            <hr class="border-gray-500" />
            <div class="flex justify-between">
              <div>Sugar</div>
              <div>
                {{ chocolate.nutrition.carbohydrates.sugar }}
              </div>
            </div>
            <hr class="border-gray-500" />
            <div class="flex justify-between">
              <div class="font-bold">Protein</div>
              <div class="font-bold">{{ chocolate.nutrition.protein }}</div>
            </div>
            <hr class="border-gray-500" />
            <div class="flex justify-between">
              <div class="font-bold">Salt</div>
              <div class="font-bold">{{ chocolate.nutrition.salt }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-link
      to="/"
      class="
        mt-6
        p-2
        bg-indigo-600
        hover:bg-indigo-700
        focus:ring-indigo-500 focus:ring-offset-indigo-200
        text-white
        w-4/12
        transition
        ease-in
        duration-200
        text-center text-base
        font-semibold
        shadow-md
        focus:outline-none focus:ring-2 focus:ring-offset-2
        rounded-lg
      "
      >Go back</router-link
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onBeforeMount, reactive } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "@/store";
import { Chocolate, EnhancedPrice } from "@/types";
import { calculatePrices, pricePer100g } from "@/logic/calculatePrices";
export default defineComponent({
  name: "ChocolatesDetail",
  props: ["id"],
  setup() {
    const store = useStore();
    const route = useRoute();
    const chocolates: Chocolate = store.state.chocolates.data;
    const chocolate = computed(() => {
      return chocolates.filter((a) => a.id === route.params.id)[0];
    });

    const enhancedPrices: EnhancedPrice[] = reactive(chocolate.value.prices);

    const calculatedPrices = calculatePrices(enhancedPrices);

    onBeforeMount(() => pricePer100g(enhancedPrices));

    return { chocolate, calculatedPrices };
  },
});
</script>

<style scoped>
</style>
