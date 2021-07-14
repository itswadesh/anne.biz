<template>
  <section class="relative bg-black">
    <div class="h-24 md:h-32 relative z-10 flex items-center justify-center">
      <h1
        class="
          text-white text-xl
          md:text-2xl
          xl:text-4xl
          font-medium
          text-center
          px-2
        "
      >
        1 million+ developers trust the first choice for quality apps
      </h1>
    </div>

    <div>
      <div class="flex justify-center -mx-10">
        <img
          v-for="img in 22"
          :key="img"
          src="/img/visa.png"
          alt=""
          class="h-10 w-10 lg:h-16 lg:w-16 m-1 rounded bg-white object-contain"
        />
      </div>
      <div class="flex justify-center -mx-10">
        <img
          v-for="img in 22"
          :key="img"
          src="/img/visa.png"
          alt=""
          class="h-10 w-10 lg:h-16 lg:w-16 m-1 rounded bg-white object-contain"
        />
      </div>
      <div class="flex justify-center -mx-10">
        <img
          v-for="img in 22"
          :key="img"
          src="/img/visa.png"
          alt=""
          class="h-10 w-10 lg:h-16 lg:w-16 m-1 rounded bg-white object-contain"
        />
      </div>
      <div class="flex justify-center -mx-10">
        <img
          v-for="img in 22"
          :key="img"
          src="/img/visa.png"
          alt=""
          class="h-10 w-10 lg:h-16 lg:w-16 m-1 rounded bg-white object-contain"
        />
      </div>
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
