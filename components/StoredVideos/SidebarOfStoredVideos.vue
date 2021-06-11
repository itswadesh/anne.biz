<template>
  <section class="bg-gray-200 w-full md:w-80 text-gray-800 p-5">
    <div class="gap-4 grid grid-cols-2 md:grid-cols-1 justify-items-center">
      <div v-for="(i, ix) in items" :key="ix" class="">
        <button
          class="
            text-center
            md:text-left
            focus:outline-none
            lg:whitespace-nowrap
            font-medium
            hover:text-primary-500
          "
          @click="$router.push('#')"
        >
          {{ i.catagories }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { catagories: 'All Products' },
        { catagories: 'Newly Launched' },
        { catagories: 'Most Popular' },
        { catagories: 'Top Picks' },
        { catagories: 'Household' },
        { catagories: 'Diy Tools' },
        { catagories: 'Lifestyle & Accesories' },
      ],
    }
  },
}
</script>
<style></style>
