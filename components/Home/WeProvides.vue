<template>
  <section v-if="brand" class="w-full">
    <div class="lg:p-5 lg:flex items-center justify-center lg:justify-between">
      <div
        v-for="(i, ix) in items"
        :key="ix"
        class="hidden lg:flex items-center my-auto mr-5"
      >
        <img
          :src="i.img"
          class="h-4 w-4 lg:h-6 lg:w-6 xl:h-8 xl:w-8 rounded-full"
        />
        <h6
          class="text-sm lg:text-base flex-1 ml-2 whitespace-nowrap"
          v-html="i.detail"
        ></h6>
      </div>

      <!-- Logo section start  -->
      <div
        class="p-3 lg:p-0 justify-center flex flex-row items-center space-x-3"
      >
        <a
          v-for="(s, sx) in socialmedias"
          :key="sx"
          target="_blank"
          :href="s.link"
        >
          <img
            :src="s.img"
            class="
              h-4
              w-4
              lg:h-6
              lg:w-6
              xl:h-8
              xl:w-8
              rounded-full
              cursor-pointer
            "
          />
        </a>
      </div>
      <!-- Logo section end -->
    </div>
  </section>
</template>

<script>
export default {
  props: {
    brand: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      items: [
        {
          img: '/img/other/tick.png',
          detail: '15 days <b>money back guarantee</b>',
        },
        {
          img: '/img/other/support.png',
          detail: '<b>Support</b> teams across the world',
        },
        {
          img: '/img/other/lock.png',
          detail: '<b>Safe & Secure</b> online payment',
        },
      ],
      socialmedias: [
        {
          link: `https://www.facebook.com/${this.brand.facebookUrl}`,
          img: '/img/socialmedia/facebook.png',
        },
        {
          link: `https://twitter.com/${this.brand.twitterUrl}`,
          img: '/img/socialmedia/twitter.png',
        },
        {
          link: `https://www.instagram.com/${this.brand.instaUrl}`,
          img: '/img/socialmedia/instagram.png',
        },
        {
          link: `https://www.youtube.com/user/${this.brand.youtubeUrl}`,
          img: '/img/socialmedia/youtube.png',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
