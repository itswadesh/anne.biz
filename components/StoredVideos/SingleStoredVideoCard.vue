<template>
  <section>
    <div
      v-if="allvideos"
      class="
        grid grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        gap-4
        justify-items-center
      "
    >
      <div
        v-for="(v, vx) in allvideos"
        :key="vx.id"
        class="
          bg-white
          rounded-md
          p-2
          md:p-4
          hover:shadow
          shadow-md
          w-full
          max-w-xs
          flex-1
        "
      >
        <div class="flex items-center justify-center">
          <img
            :src="v.img"
            alt=""
            class="h-52 w-52 xl:w-full object-cover object-top"
          />
        </div>
        <div class="py-4">
          <h4 class="font-medium">
            {{ v.user.firstName }} {{ v.user.lastName }}
          </h4>
          <h6 class="mt-2 text-sm text-gray-600">{{ v.title }}</h6>
        </div>
      </div>
    </div>
    <div class="my-10 justify-center flex">
      <button class="font-medium hover:text-primary-500">Load More</button>
    </div>
  </section>
</template>

<script>
import LIVE_STREAMS from '~/gql/liveStream/liveStreams.gql'

export default {
  data() {
    return {
      allvideos: null,
    }
  },

  async created() {
    const video = await this.$apollo.query({
      query: LIVE_STREAMS,
    })
    this.allvideos = video.data.liveStreams.data
    // console.log(video.data.liveStreams)
  },
}
</script>

<style></style>
