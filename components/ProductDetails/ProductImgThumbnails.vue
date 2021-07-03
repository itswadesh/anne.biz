<template>
  <div
    v-if="images"
    class="
      relative
      z-0
      flex flex-col
      justify-center
      items-center
      pb-2
      my-5
      overflow-hidden
      md:-mt-0
      hfull
      md:mx-0
      md:w-24
    "
  >
    <VueSlickCarousel v-bind="settings" :arrows="true" class="w-auto my-auto">
      <template #prevArrow="arrowOption" class="absolute top-0">
        <div class="invisible custom-arrow custom-arrow1 sm:visible">
          {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
        </div>
      </template>
      <div
        v-for="(img, ix) in images"
        :key="ix"
        class="
          justify-center
          items-center
          overflow-hidden
          md:w-full
          focus:outline-none
        "
      >
        <div class="">
          <img
            :key="img"
            v-lazy="img"
            alt=""
            class="
              object-contain
              mx-auto
              overflow-hidden
              bg-white
              border
              p-0.5
              rounded-sm
              smallimg
              hover:border-primary-500
              md:w-full
              md:h-full
              md:object-cover
              md:w-auto
            "
            :class="{ 'border-primary-500': img === selectedImage }"
            @mouseenter="$emit('selectedImage', img)"
          />
        </div>
      </div>
      <template #nextArrow="arrowOption" class="absolute bottom-0">
        <div class="invisible custom-arrow custom-arrow2 sm:visible">
          {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
        </div>
      </template>
    </VueSlickCarousel>
  </div>
</template>

<script>
// import PRODUCT from '~/gql/product/product.gql'
import { getIdFromUrl } from 'vue-youtube'
export default {
  props: {
    images: { type: Array, default: null },
    selectedImage: { type: String, default: null },
  },
  // ['images', 'selectedImage'],
  data() {
    return {
      settings: {
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              centerPadding: '70px',
              centerMargin: '15px',
              vertical: false,
              slidesToShow: 5,
              slidesToScroll: 1,
              focusOnSelect: true,
              infinite: true,
            },
          },
        ],
      },
      product: {
        images: '',
      },
    }
  },
  async created() {
    // await this.getProduct()
  },
  methods: {
    imgVideo(url) {
      return this.youtubeVideoId(url)
        ? `https://img.youtube.com/vi/${this.youtubeVideoId(url)}/1.jpg`
        : url
    },
    youtubeVideoId(url) {
      return getIdFromUrl(url)
    },
    // async getProduct() {
    //   try {
    //     this.product = (
    //       await this.$apollo.query({
    //         query: PRODUCT,
    //         variables: { id: this.$route.query.id },
    //         fetchPolicy: 'no-cache',
    //       })
    //     ).data.product
    //   } catch (e) {
    //     // console.log(e)
    //   } finally {
    //   }
    // },
  },
}
</script>

<style scoped>
.smallimg {
  width: 70px;
  height: 70px;
}
@media only screen and (min-width: 768px) {
  .hfull {
    height: 29.2rem;
  }
  .smallimg {
    height: 5rem;
    width: 5rem;
  }
  .custom-arrow {
    height: 109px;
    width: 49px;
    z-index: 20;
  }
  .custom-arrow2 {
    margin-right: 55px;
    margin-left: 25px;
  }
  .custom-arrow1 {
    margin-left: 1px;
    margin-right: 25px;
  }
  .slick-prev {
    margin-top: -246px;
    z-index: 999;
    transform: rotate(90deg);
  }
  .slick-next {
    right: -1px;
    z-index: 999;
    margin-top: 150px;
    transform: rotate(90deg);
  }
  .slick-prev::before,
  .slick-next::before {
    font-size: 32px;
    line-height: 1;
    opacity: 1;
    color: black;
    -webkit-font-smoothing: antialiased;
  }
}
</style>
