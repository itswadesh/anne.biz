<template>
  <section class="w-full p-5 md:p-10">
    <div>
      <SingleStoredVideoCard />
    </div>
  </section>
</template>

<script>
import SingleStoredVideoCard from '~/components/StoredVideos/SingleStoredVideoCard.vue'

export default {
  components: {
    SingleStoredVideoCard,
  },
}
</script>

<style></style>
