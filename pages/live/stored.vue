<template>
  <section class="md:flex">
    <SidebarOfStoredVideos class="hidden md:block" />
    <AllStoredVideos />
    <SidebarMobile class="block md:hidden" />
  </section>
</template>

<script>
import SidebarOfStoredVideos from '~/components/StoredVideos/SidebarOfStoredVideos.vue'
import SidebarMobile from '~/components/StoredVideos/SidebarMobile.vue'
import AllStoredVideos from '~/components/StoredVideos/AllStoredVideos.vue'
export default {
  components: {
    SidebarOfStoredVideos,
    SidebarMobile,
    AllStoredVideos,
  },
}
</script>

<style></style>
