<template>
  <section class="flex flex-col-reverse lg:flex-row">
    <SidebarOfStoredVideos />
    <AllStoredVideos />
  </section>
</template>

<script>
import SidebarOfStoredVideos from '~/components/StoredVideos/SidebarOfStoredVideos.vue'
import AllStoredVideos from '~/components/StoredVideos/AllStoredVideos.vue'
export default {
  components: {
    SidebarOfStoredVideos,
    AllStoredVideos,
  },
}
</script>

<style></style>
