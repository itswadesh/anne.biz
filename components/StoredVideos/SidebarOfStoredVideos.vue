<template>
  <section class="lg:min-h-screen bg-gray-200 lg:py-4 py-10">
    <div class="w-full lg:w-72 text-gray-800">
      <div class="max-w-lg mx-auto flex flex-row lg:flex-col">
        <div class="w-1/2 lg:w-full">
          <div
            class="flex flex-col px-4 mx-auto max-w-max lg:max-w-full lg:ml-10"
          >
            <div v-for="(i, ix) in items" :key="ix" class="my-3 md:my-4">
              <button
                class="
                  focus:outline-none
                  font-medium
                  flex
                  justify-start
                  text-left
                  hover:text-primary-500
                "
                @click="$router.push('#')"
              >
                {{ i.catagories }}
              </button>
            </div>
          </div>
        </div>
        <div class="w-1/2 lg:w-full">
          <div
            class="flex flex-col px-4 mx-auto max-w-max lg:max-w-full lg:ml-10"
          >
            <div v-for="(ii, ixx) in items2" :key="ixx" class="my-3 md:my-4">
              <button
                class="
                  focus:outline-none
                  font-medium
                  flex
                  justify-start
                  text-left
                  hover:text-primary-500
                "
                @click="$router.push('#')"
              >
                {{ ii.catagories }}
              </button>
            </div>
          </div>
        </div>
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
      ],
      items2: [
        { catagories: 'Household' },
        { catagories: 'Diy Tools' },
        { catagories: 'Lifestyle & Accesories' },
      ],
    }
  },
}
</script>
<style></style>
