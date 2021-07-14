<template>
  <section class="relative bg-black overflow-hidden">
    <div class="h-24 md:h-32 relative z-10 flex items-center justify-center">
      <h1
        class="
          text-white text-xl
          sm:text-2xl
          md:text-3xl
          xl:text-4xl
          font-medium
          text-center
          px-2
        "
      >
        1 million+ developers trust the first choice for quality apps
      </h1>
    </div>

    <div class="flex flex-wrap justify-center -mx-10">
      <img
        v-for="img in 64"
        :key="img"
        src="/img/visa.png"
        alt=""
        class="h-16 w-16 md:h-20 md:w-20 m-1 rounded bg-white object-contain"
      />
    </div>

    <div
      class="h-24 md:h-32 relative z-10 flex items-center justify-center"
    ></div>

    <div
      class="
        absolute
        inset-0
        bg-gradient-radial
        from-transparent
        via-transparent
        to-black
      "
    ></div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped></style>
