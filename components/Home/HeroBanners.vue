<template>
  <div>
    <HeroBannerSkeleton v-if="loading" />
    <div v-if="banners" class="grid grid-cols-2 lg:grid-cols-4">
      <nuxt-link
        v-if="banners && banners[0]"
        :to="localePath(banners[0].link)"
        class="w-auto col-span-2 m-2 sm:m-3"
      >
        <img
          v-lazy="banners[0].img"
          class="object-scale-down w-full h-full rounded"
        />
      </nuxt-link>
      <nuxt-link
        v-if="banners && banners[1]"
        :to="localePath(banners[1].link)"
        class="w-auto col-span-2 m-3"
      >
        <img
          v-lazy="banners[1].img"
          class="object-scale-down w-full h-full rounded"
        />
      </nuxt-link>
      <nuxt-link
        v-if="banners && banners[2]"
        :to="localePath(banners[2].link)"
        class="w-auto col-span-1 m-2 sm:m-3"
      >
        <img
          v-lazy="banners[2].img"
          class="object-scale-down w-full h-full rounded"
        />
      </nuxt-link>
      <nuxt-link
        v-if="banners && banners[3]"
        :to="localePath(banners[3].link)"
        class="w-auto col-span-1 m-2 sm:m-3"
      >
        <img
          v-lazy="banners[3].img"
          class="object-scale-down w-full h-full rounded"
        />
      </nuxt-link>
      <nuxt-link
        v-if="banners && banners[4]"
        :to="localePath(banners[4].link)"
        class="w-auto col-span-2 m-3"
      >
        <img
          v-lazy="banners[4].img"
          class="object-scale-down w-full h-full rounded"
        />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import HeroBannerSkeleton from '~/components/AllSkeletons/HeroBannerSkeleton'
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
