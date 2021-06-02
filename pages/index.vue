<template>
  <div class="z-auto pb-0 bg-gray-50">
    <Megamenu class="hidden xl:flex" />
    <HeroSlider :banners="banners && banners.data" />
    <Categories class="" />
    <Workout class="z-0 p-1 sm:order-first lg:px-28 md:p-10 md:px-24" />
    <Deals />
    <ProductSlider
      class="px-3 mt-6 md:px-0 md:mx-6 sm:mt-0"
      :details="youMayLikeProducts && youMayLikeProducts.data"
      :heading="'You May Like'"
    />
    <ExploreMore />

    <ProductSlider2
      class="sm:mt-12"
      :details="hotProducts && hotProducts.data"
      :heading="'Trending'"
    />
    <Brandss />
    <!-- <Discounts /> -->
    <!-- <div>
      <SelectedCategoryDetails />
    </div> -->
    <!-- <FooterSection class="hidden lg:block" /> -->
    <!-- <GridComponents /> -->
    <!--    -->
  </div>
</template>

<script>
import Megamenu from '~/components/Home/Megamenu'
import HeroSlider from '~/components/Home/HeroSlider'
import Categories from '~/components/Home/Categories'
import Deals from '~/components/Home/Deals'
import ProductSlider from '~/components/Home/ProductSlider'
import ProductSlider2 from '~/components/Home/ProductSlider2'
import Workout from '~/components/Home/Workout'
import Brandss from '~/components/Home/Brandss'
import ExploreMore from '~/components/Home/ExploreMore'
import PRODUCTS from '~/gql/product/products.gql'
import { TITLE, DESCRIPTION, KEYWORDS, sharingLogo } from '~/shared/config'
import BANNERS from '~/gql/banner/banners.gql'
export default {
  components: {
    Megamenu,
    HeroSlider,
    Categories,
    Deals,
    ProductSlider,
    ProductSlider2,
    Workout,
    Brandss,
    // Discounts,
    ExploreMore,
  },
  middleware: ['landing'],
  asyncData({ params, app, store }) {
    // let client = app.apolloProvider.defaultClient
    // let settings = store.state.settings,
    // err = null,
    // title,
    // keywords,
    // description
    // try {
    // const settings = (
    //   await client.query({ query: SETTINGS, fetchPolicy: 'no-cache' })
    // ).data.settings
    const { title, keywords, description } = store.state.settings || {} // err = null
    // } catch (e) {
    //   if (e && e.response && e.response.data) {
    //     err = e.response.data
    //   } else if (e && e.response) {
    //     err = e.response
    //   } else {
    //     err = e
    //   }
    //   console.log('err...', `${err}`)
    // }
    return { title, keywords, description }
  },
  data() {
    return {
      hotProducts: null,
      youMayLikeProducts: null,
      visible: false,
      banners: null,
    }
  },
  head() {
    const host = process.server
      ? this.$ssrContext.req.headers.host
      : window.location.host
    return {
      title: this.title || TITLE,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description || DESCRIPTION,
        },
        {
          hid: 'og:description',
          name: 'Description',
          property: 'og:description',
          content: this.description || DESCRIPTION,
        },
        {
          name: 'Keywords',
          content: this.keywords || KEYWORDS,
        },
        {
          hid: 'og:title',
          name: 'og_title',
          property: 'og:title',
          content: this.title || TITLE,
        },
        {
          name: 'og_url',
          property: 'og:url',
          content: host,
        },
        {
          name: 'og_image',
          property: 'og:image',
          content: host + sharingLogo,
        },

        {
          name: 'twitter:title',
          content: this.title || TITLE,
        },
        {
          hid: 'twitter_description',
          name: 'twitter:description',
          content: this.description || DESCRIPTION,
        },
      ],
    }
  },
  computed: {
    user() {
      return this.$store.state.auth.user
    },
  },
  mounted() {
    window.addEventListener('scroll', this.scrollListener)
  },
  created() {
    this.getBanners()
    this.getHotProducts()
    this.getYouMayLikeProducts()
  },
  methods: {
    async getBanners() {
      this.loading = true
      // this.skeleton = true
      try {
        this.banners = (
          await this.$apollo.query({
            query: BANNERS,
            variables: {
              type: 'slider',
            },
            fetchPolicy: 'no-cache',
          })
        ).data.banners
      } catch (e) {
        // console.log(e)
      } finally {
        this.loading = false
        // this.skeleton = false
      }
    },
    scrollListener() {
      if (window.scrollY > 480) {
        // console.log('Naman')
        this.visible = true
      } else {
        this.visible = false
      }
    },
    async getYouMayLikeProducts() {
      this.loading = true
      try {
        this.youMayLikeProducts = (
          await this.$apollo.query({
            query: PRODUCTS,
            variables: {
              sale: true,
            },
            fetchPolicy: 'no-cache',
          })
        ).data.products
      } catch (e) {
        // console.log(e)
      } finally {
        this.loading = false
      }
    },
    async getHotProducts() {
      this.loading = true
      try {
        this.hotProducts = (
          await this.$apollo.query({
            query: PRODUCTS,
            variables: {
              hot: true,
            },
            fetchPolicy: 'no-cache',
          })
        ).data.products
      } catch (e) {
        // console.log(e)
      } finally {
        this.loading = false
      }
    },
    loadmore() {
      // console.log('naman')
    },
  },
}
</script>
