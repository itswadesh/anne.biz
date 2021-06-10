<template>
  <div class="z-auto pb-0 bg-gray-50">
    <Megamenu class="hidden xl:flex" />
    <HeroSlider :banners="sliderBanners" />
    <Categories class="" />
    <HeroBanners
      :banners="heroBanners"
      class="z-0 p-1 sm:order-first lg:px-28 md:p-10 md:px-24"
    />
    <Deals />
    <ProductSlider
      class="px-3 mt-6 md:px-0 md:mx-6 sm:mt-0"
      :details="youMayLikeProducts && youMayLikeProducts.data"
      :heading="'You May Like'"
    />
    <VideoBanner :banners="videoBanners" />
    <ProductSlider2
      class="sm:mt-12"
      :details="hotProducts && hotProducts.data"
      :heading="'Trending'"
    />
    <BrandBanners :ishome="true" :brands="brandBanners && brandBanners.data" />
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
import HeroBanners from '~/components/Home/HeroBanners'
import Categories from '~/components/Home/Categories'
import Deals from '~/components/Home/Deals'
import ProductSlider from '~/components/Home/ProductSlider'
import ProductSlider2 from '~/components/Home/ProductSlider2'
import BrandBanners from '~/components/Home/BrandBanners'
import PRODUCTS from '~/gql/product/products.gql'
import { TITLE, DESCRIPTION, KEYWORDS, sharingLogo } from '~/shared/config'
import BANNERS from '~/gql/banner/banners.gql'
import GROUP_BY_BANNER from '~/gql/banner/groupByBanner.gql'
import BRANDS from '~/gql/brand/brands.gql'
import VideoBanner from '~/components/Home/VideoBanner.vue'
export default {
  components: {
    Megamenu,
    HeroSlider,
    HeroBanners,
    Categories,
    Deals,
    ProductSlider,
    ProductSlider2,
    BrandBanners,
    // Discounts,
    VideoBanner,
  },
  middleware: ['landing'],
  asyncData({ params, app, store }) {
    const { title, keywords, description } = store.state.settings || {} // err = null
    return { title, keywords, description }
  },
  data() {
    return {
      hotProducts: null,
      youMayLikeProducts: null,
      visible: false,
      banners: null,
      brandBanners: null,
      sliderBanners: null,
      heroBanners: null,
      videoBanners: null,
      loadingVideoBanners: false,
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
    this.getBrands()
  },
  methods: {
    async getBrands() {
      // this.loading = true
      try {
        this.brandBanners = (
          await this.$apollo.query({
            query: BRANDS,
            variables: { parent: null, limit: 5, page: 0, sort: 'sort' },
            fetchPolicy: 'no-cache',
          })
        ).data.brands
        // console.log('brands to show', this.brandBanners)
      } catch (e) {
        // console.log(e)
      } finally {
        // this.loading = false
      }
    },
    async getBanners() {
      this.loading = true
      // this.skeleton = true
      try {
        const banners = (
          await this.$apollo.query({
            query: BANNERS,
            variables: {
              sort: 'sort',
              pageId: 'home',
              active: true,
            },
            fetchPolicy: 'no-cache',
          })
        ).data.banners
        this.sliderBanners = banners.data.filter((b) => b.type === 'slider')
        this.videoBanners = banners.data.filter((b) => b.type === 'video')
        this.heroBanners = (
          await this.$apollo.query({
            query: GROUP_BY_BANNER,
            variables: {
              pageId: 'home',
            },
            fetchPolicy: 'no-cache',
          })
        ).data.groupByBanner
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
  },
}
</script>
