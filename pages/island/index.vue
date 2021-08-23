<template>
  <div class="z-auto pb-0 bg-gray-50 pt-4">
    <Megamenu class="hidden xl:flex" />
    <HeroSlider :banners="sliderBanners" />
    <MainCategoryBanners class="mt-px" />
    <SecondMainCategoryBanners />
    <Categories class="" />
    <GallerySlider class="mt-5 md:mt-10" :banners="sliderBanners" />
    <WantMore class="mt-5 md:mt-10" />
    <ProductSlider
      class="px-3 mt-6 md:px-0 md:mx-6 sm:mt-0"
      :details="youMayLikeProducts"
      :heading="'You May Like'"
    />
    <ProductSlider2
      class="sm:mt-12"
      :details="hotProducts"
      :heading="'Trending'"
    />
    <BrandBanners :ishome="true" :brands="brandBanners && brandBanners.data" />
  </div>
</template>

<script>
import HeroSlider from '~/components/Island/HeroSlider.vue'
import MainCategoryBanners from '~/components/Island/MainCategoryBanners.vue'
import SecondMainCategoryBanners from '~/components/Island/SecondMainCategoryBanners.vue'
import GallerySlider from '~/components/Island/GallerySlider.vue'
import WantMore from '~/components/Island/WantMore.vue'
import ProductSlider from '~/components/Home/ProductSlider.vue'
import ProductSlider2 from '~/components/Home/ProductSlider2.vue'
import BrandBanners from '~/components/Home/BrandBanners.vue'
import Megamenu from '~/components/Home/Megamenu.vue'
import WhiteFooter from '~/components/Island/WhiteFooter.vue'
import { TITLE, DESCRIPTION, KEYWORDS, sharingLogo } from '~/shared/config'

export default {
  components: {
    HeroSlider,
    MainCategoryBanners,
    SecondMainCategoryBanners,
    GallerySlider,
    WantMore,
    Megamenu,
    WhiteFooter,
    ProductSlider,
    ProductSlider2,
    BrandBanners,
  },

  layout: 'island',
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
      pickedBanners: null,
    }
  },

  fetch() {
    this.getBanners()
    this.getHotProducts()
    this.getYouMayLikeProducts()
    this.getBrands()
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
  methods: {
    async getBrands() {
      // this.loading = true
      try {
        this.brandBanners = await this.$get('brand/brands', {
          parent: null,
          limit: 30,
          page: 0,
          sort: 'sort',
          featured: true,
        })
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
        const banners = await this.$get('banner/banners', {
          sort: 'sort',
          pageId: 'home',
          active: true,
        })

        this.sliderBanners = banners.data.filter((b) => b.type === 'slider')
        this.videoBanners = banners.data.filter((b) => b.type === 'video')
        this.heroBanners = await this.$get('banner/groupByBanner', {
          pageId: 'home',
          type: 'hero',
        })

        this.pickedBanners = await this.$get('banner/groupByBanner', {
          pageId: 'home',
          type: 'picked',
        })
      } catch (e) {
        // console.log(e)
      } finally {
        this.loading = false
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
        this.youMayLikeProducts = await this.$get('product/trending', {
          type: 'sale',
        })
      } catch (e) {
        // console.log(e)
      } finally {
        this.loading = false
      }
    },
    async getHotProducts() {
      this.loading = true
      try {
        this.hotProducts = await this.$get('product/trending', { type: 'hot' })
      } catch (e) {
        // console.log(e)
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style scoped>
.mt-px {
  margin-top: 1.5px;
}
</style>
