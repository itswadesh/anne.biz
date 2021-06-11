<template>
  <section
    v-if="video"
    class="
      w-full
      rounded-md
      shadow-md
      hover:shadow
      bg-white
      p-2
      sm:p-4
      text-gray-800
    "
  >
    <!-- video section start  -->
    <div class="relative">
      <a
        :href="`https://litekartlive.netlify.app/netease/watch?channelName=${video.id}`"
        target="_blank"
        className=" h-full w-full"
      >
        <img
          v-lazy="video.img"
          class="w-full h-64 rounded-t-lg object-cover"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </a>

      <div class="absolute right-0 top-0 border rounded-full border-gray-200">
        <div class="mx-2 my-0.5 flex items-center">
          <div class="h-2 w-2 rounded-full bg-red-500 mr-1 animate-pulse"></div>
          <span class="text-xs">LIVE</span>
        </div>
      </div>
    </div>
    <!-- video section end -->
    <!-- Video details start  -->
    <div class="flex justify-start mt-2">
      <img
        v-lazy="video.user.avatar"
        alt=""
        class="object-cover w-10 h-10 rounded-full border border-gray-300"
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
            uppercase
          "
        >
          {{ video.user.firstName }} {{ video.user.lastName }}
          <span
            class="
              bg-gray-100
              border
              rounded-sm
              text-xs
              font-light
              px-2
              py-0.5
              text-gray-600
              ml-3
            "
            >ENGLISh</span
          >
        </a>
        <div
          class="
            text-sm
            font-light
            cursor-pointer
            hover:text-purple-500
            max-w-max
            mt-1
          "
        >
          {{ video.__typename }}
          {{ video.scheduleDateTime }}
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
          {{ video.user.email }}
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
