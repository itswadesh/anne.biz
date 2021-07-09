<template>
  <div>
    <HeroBannerSkeleton v-if="loading" />
    <div v-for="(b, ix) of banners" :key="ix">
      <h2 class="text-3xl text-gray-600 ml-3 font-bold">{{ b._id.title }}</h2>
      <div v-if="b.data" class="grid grid-cols-2 lg:grid-cols-4">
        <nuxt-link
          v-if="b.data && b.data[0]"
          :to="localePath(b.data[0].link)"
          class="w-auto col-span-2 m-2 sm:m-3"
        >
          <img
            v-lazy="b.data[0].img"
            class="object-scale-down w-full h-full rounded"
          />
        </nuxt-link>
        <nuxt-link
          v-if="b.data && b.data[1]"
          :to="localePath(b.data[1].link)"
          class="w-auto col-span-2 m-3"
        >
          <img
            v-lazy="b.data[1].img"
            class="object-scale-down w-full h-full rounded"
          />
        </nuxt-link>
        <nuxt-link
          v-if="b.data && b.data[2]"
          :to="localePath(b.data[2].link)"
          class="w-auto col-span-1 m-2 sm:m-3"
        >
          <img
            v-lazy="b.data[2].img"
            class="object-scale-down w-full h-full rounded"
          />
        </nuxt-link>
        <nuxt-link
          v-if="b.data && b.data[3]"
          :to="localePath(b.data[3].link)"
          class="w-auto col-span-1 m-2 sm:m-3"
        >
          <img
            v-lazy="b.data[3].img"
            class="object-scale-down w-full h-full rounded"
          />
        </nuxt-link>
        <nuxt-link
          v-if="b.data && b.data[4]"
          :to="localePath(b.data[4].link)"
          class="w-auto col-span-2 m-3"
        >
          <img
            v-lazy="b.data[4].img"
            class="object-scale-down w-full h-full rounded"
          />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import HeroBannerSkeleton from '~/components/AllSkeletons/HeroBannerSkeleton.vue'
// import BANNERS from '~/gql/banner/banners.gql'
export default {
  components: { HeroBannerSkeleton },
  props: {
    banners: { type: Array, default: null },
  },
  data() {
    return {
      // banners: null,
      loading: false,
    }
  },
  created() {
    // this.getBanners()
  },
  methods: {
    // async getBanners() {
    //   this.loading = true
    //   try {
    //     this.banners = (
    //       await this.$apollo.query({
    //         query: BANNERS,
    //         variables: {
    //           type: 'banner',
    //           sort: 'sort',
    //         },
    //         fetchPolicy: 'no-cache',
    //       })
    //     ).data.banners
    //   } catch (e) {
    //     // console.log(e)
    //   } finally {
    //     this.loading = false
    //   }
    // },
  },
}
</script>
