<template>
  <section class="border-t-2 pt-10 px-4 text-center">
    <div class="max-w-md mx-auto">
      <h1 class="font-semibold text-3xl">Want More?</h1>
      <h6 class="mt-4 text-sm">Sign up for the latest fashion and offers</h6>

      <div class="hidden md:block mt-10 relative">
        <input
          type="text"
          class="
            border-2 border-black
            rounded
            p-3
            w-full
            focus:outline-none
            focus:ring-0
            focus:ring-offset-0
            focus:border-gray-200
          "
          placeholder="Enter your email"
        />
        <button
          class="
            absolute
            right-0
            inset-y-0
            uppercase
            text-sm
            font-semibold
            text-white
            bg-black
            rounded-r
            py-3
            px-9
          "
        >
          Subscribe
        </button>
      </div>

      <div class="mt-10 md:hidden">
        <input
          type="text"
          class="
            border-2
            rounded
            p-3
            w-full
            focus:outline-none focus:ring-0 focus:ring-offset-0
            border-gray-200
          "
          placeholder="Enter your email"
        />
      </div>

      <div class="mt-10 flex items-center justify-center space-x-5">
        <Checkbox>Women </Checkbox>
        <Checkbox>Men </Checkbox>
        <Checkbox>Kids </Checkbox>
      </div>

      <div class="mt-10 md:hidden">
        <button
          class="
            w-full
            uppercase
            text-sm
            font-semibold
            text-white
            bg-black
            rounded
            py-3
          "
        >
          Subscribe
        </button>
      </div>

      <h6 class="mt-5 md:mt-10 text-xs text-gray-400">
        <span class="mr-0.5">
          Your personal details are safe with us. For more info, read our</span
        >
        <nuxt-link to="#" class="underline font-semibold"
          >Privacy Notice</nuxt-link
        >
      </h6>
    </div>
  </section>
</template>

<script>
import Checkbox from '~/shared/components/ui/Checkbox.vue'
export default {
  components: {
    Checkbox,
  },
}
</script>

<style scoped></style>
