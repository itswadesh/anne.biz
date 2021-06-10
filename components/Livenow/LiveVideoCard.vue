<template>
  <section v-if="video" class="w-full mb-5 mr-2 md:w-1/2 lg:w-1/4">
    <!-- video section start  -->
    <a
      :href="`https://litekartlive.netlify.app/netease/watch?channelName=${video.id}`"
      target="_blank"
      className="relative h-full w-full"
    >
      <img
        v-lazy="video.img"
        class="w-full h-64"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </a>
    <!-- video section end -->
    <!-- Video details start  -->
    <div class="flex justify-start mt-2">
      <img
        v-lazy="video.user.avatar"
        alt=""
        class="object-cover object-top w-10 h-10 rounded-full"
      />
      <div class="flex flex-col ml-4">
        <a
          :href="`https://litekartlive.netlify.app/netease/watch?channelName=${video.id}`"
          class="
            font-semibold
            truncate
            cursor-pointer
            w-60
            hover:text-purple-500
          "
        >
          {{ video.title }}
        </a>
        <div
          class="
            text-sm
            font-light
            cursor-pointer
            hover:text-purple-500
            max-w-max
          "
        >
          {{ video.description }}
        </div>
        <nuxt-link
          to="#"
          class="
            text-sm
            font-light
            cursor-pointer
            hover:text-purple-500
            max-w-max
          "
        >
          {{ video.description }}
        </nuxt-link>
        <div class="flex mt-2 space-x-2">
          <nuxt-link to="#">
            <button
              class="
                px-3
                py-0.5
                text-gray-700 text-sm
                font-semibold
                bg-gray-200
                rounded-full
                focus:outline-none
                hover:bg-gray-300
              "
            >
              {{ video.button1 }}
            </button>
          </nuxt-link>
          <nuxt-link to="#">
            <button
              class="
                px-3
                py-0.5
                text-gray-700 text-sm
                font-semibold
                bg-gray-200
                rounded-full
                focus:outline-none
                hover:bg-gray-300
              "
            >
              {{ video.button2 }}
            </button>
          </nuxt-link>
        </div>
      </div>
    </div>
    <!-- Video details end -->
  </section>
</template>

<script>
export default {
  props: {
    video: { type: Object, default: () => {} },
  },
}
</script>

<style scoped>
.zoom {
  transition: transform 0.7s;
}
.zoom:hover {
  transform: scale(1.035);
}
</style>
