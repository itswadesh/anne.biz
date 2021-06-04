<template>
  <section class="container mx-auto p-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">
      <div
        v-for="(i, ix) in items"
        :key="ix"
        class="bg-white rounded-md p-2 md:p-4 hover:shadow shadow-md w-full"
      >
        <img :src="i.img" alt="" class="h-60 w-full object-cover object-top" />
        <div class="p-4">
          <h4 class="font-medium">{{ i.title }}</h4>
          <h6 class="mt-2 text-sm text-gray-600">{{ i.scheduleDateTime }}</h6>
        </div>
      </div>
    </div>
    <div class="hidden my-10 justify-center md:flex">
      <button class="font-medium hover:text-primary-500">Load More</button>
    </div>
  </section>
</template>

<script>
import LIVE_STREAMS from '~/gql/liveStream/liveStreams.gql'
export default {
  data() {
    return {
      items: null,
    }
  },
  async created() {
    const video = await this.$apollo.query({
      query: LIVE_STREAMS,
    })
    this.items = video.data.liveStreams.data
    console.log(video)
  },
}
</script>

<style></style>
