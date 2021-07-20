<template>
  <section
    v-if="order"
    class="p-4 md:p-8 xl:p-16 bg-white border shadow-md text-gray-700"
  >
    <!-- Order detail  -->
    <div class="md:flex md:justify-between border-b-2 border-gray-200 pb-10">
      <div class="md:w-1/2 md:border-r-2 md:border-gray-200">
        <div class="md:flex md:space-x-5">
          <nuxt-link :to="`/${order.slug}?id=${order.pid}`">
            <img
              :src="order.img"
              alt=""
              class="w-40 object-contain object-top mb-5 md:mb-0"
            />
          </nuxt-link>
          <div class="flex-1 md:pr-5">
            <nuxt-link
              class="text-xl font-medium"
              :to="`/${order.slug}?id=${order.pid}`"
            >
              {{ order.name }}
            </nuxt-link>
            <div class="flex flex-wrap items-center text-sm whitespace-nowrap">
              <h5 v-if="order.size != null && ''" class="mt-2 me-5">
                Size: {{ order.size }}
              </h5>
              <h5 v-if="order.color != null && ''" class="mt-2">
                Color: {{ order.color }}
              </h5>
            </div>
            <h6
              v-if="order.vendor"
              class="mt-2 text-xs font-light text-gray-500"
            >
              Seller: {{ order.vendor.firstName }}
              {{ order.vendor.lastName }}
            </h6>
            <h4 class="mt-2 text-xl font-semibold">
              {{ order.price | currency(settings.currencySymbol, 2) }}
            </h4>
          </div>
        </div>
      </div>

      <div
        class="
          border-t border-dashed border-gray-200
          md:border-t-0
          mt-5
          pt-5
          md:pt-0
          md:mt-0
          md:w-1/2
          md:px-5
          lg:px-10
        "
      >
        <h4 class="text-xl font-medium">Delivery Address</h4>
        <h5 class="mt-2 font-mediums uppercase">
          {{ order.userFirstName }} {{ order.userLastName }}
        </h5>
        <p class="mt-2 text-xs text-gray-500 font-light flex flex-col">
          <span
            >{{ order.address.address }} {{ order.address.town }}
            {{ order.address.city }}, {{ order.address.state }}</span
          >
          <span>{{ order.address.zip }}</span>
        </p>
        <h6 v-if="order.userPhone" class="mt-2 text-sm">
          Phone number: <span> {{ order.userPhone }}</span>
        </h6>
      </div>
    </div>

    <!-- Order Tracker -->
    <div>
      <div class="md:flex md:items-center md:justify-between">
        <h4 class="md:w-2/3 my-5 md:my-10 flex-1 text-xl font-medium">
          Expected Delivered by : {{ deliveryBy }}
        </h4>
        <div class="mt-2 md:mt-0 md:w-1/3 flex items-center md:justify-center">
          <!-- <div
            class="
              w-16
              h-8
              flex
              items-center
              justify-center
              rounded
              flex-shrink-0
              me-4
            "
            style="background: #e1e1e1"
          >
            <span>3.9</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              style="color: #f2b200"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </div> -->
          <nuxt-link
            :to="`/rate-this-product?id=${order.pid}`"
            class="
              text-primary-500
              focus:outline-none
              hover:underline
              whitespace-nowrap
            "
          >
            Rate & Review Product
          </nuxt-link>
        </div>
      </div>
      <div class="mt-10 md:flex md:items-center md:justify-between">
        <div class="relative md:w-2/3">
          <div class="relative z-10">
            <div
              class="
                flex flex-col
                md:flex-row
                space-y-16
                md:space-y-0
                md:items-center
                justify-start
                md:justify-between
                flex-wrap
              "
            >
              <div
                v-for="(t, tx) in order.orderHistory"
                v-if="t.index < 7 && t.public === true"
                :key="tx"
                class="flex flex-col md:items-center md:justify-center"
              >
                <div
                  v-if="t.time"
                  class="relative h-10 w-10 bg-primary-500 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute inset-0 text-white h-7 w-7 m-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <div
                  v-else
                  class="
                    relative
                    h-10
                    w-10
                    bg-white
                    rounded-full
                    border border-gray-600
                  "
                >
                  <div>
                    <img
                      :src="t.icon"
                      alt=""
                      class="absolute inset-0 h-6 w-6 m-1.5 opacity-70"
                    />
                  </div>
                </div>

                <div class="absolute md:static left-12 md:mt-2 md:text-center">
                  <h4 class="text-xl font-medium">{{ t.status }}</h4>
                  <h6 class="mt-1 font-light text-gray-500 text-sm">
                    <span v-if="t.time">
                      {{ t.time | date }}
                    </span>
                    <span v-else class="opacity-0"> &nbsp; </span>
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div
            class="
              absolute
              z-0
              inset-0
              top-5
              left-5
              bottom-10
              md:bottom-0
              md:left-10
              md:right-10
              isolate
            "
          >
            <div
              class="
                w-1
                h-full
                md:h-1
                md:w-full
                border-l-2
                md:border-l-0
                border-t-0
                md:border-t-2
                border-dotted border-primary-500
              "
            ></div>
          </div>
        </div>

        <div class="mt-16 mb-5 md:mb-0 md:mt-0 md:w-1/3">
          <div class="flex flex-col md:items-center md:justify-center">
            <a
              v-if="order.invoiceLink"
              :href="order.invoiceLink"
              target="blank"
              class="
                flex
                justify-center
                items-center
                py-2
                h-12
                w-48
                bg-primary-500
                transition
                duration-300
                tezt-lg
                text-white
                font-medium
                border-2 border-primary-500
                focus:outline-none
                transform
                active:scale-95
              "
            >
              Download Invoice
            </a>

            <nuxt-link
              v-if="
                order.returnValidTill != null && now <= order.returnValidTill
              "
              :to="`/my/return?orderId=${$route.query.orderId}&itemId=${$route.query.itemId}`"
              class="
                mt-3
                h-12
                w-48
                hover:bg-primary-500
                transition
                duration-300
                tezt-lg
                text-primary-500
                hover:text-white
                font-medium
                border-2 border-primary-500
                focus:outline-none
                transform
                active:scale-95
                flex
                items-center
                justify-center
              "
            >
              Cancel & Return
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import { mapGetters } from 'vuex'
import ORDER from '~/gql/order/order.gql'
import ORDER_ITEM from '~/gql/order/orderItem.gql'
export default {
  layout: 'account',
  middleware: ['isAuth'],
  data() {
    return {
      order: null,
      deliveryBy: null,
      now: null,
    }
  },
  head() {
    return {
      title: 'Order Details',
    }
  },
  computed: {
    ...mapGetters({ settings: 'settings' }),
  },
  created() {
    dayjs.extend(advancedFormat)
    this.deliveryBy = dayjs().add(7, 'day').format('ddd, Do')
    this.now = dayjs()
    this.getData()
  },
  methods: {
    async getData() {
      try {
        const order = (
          await this.$apollo.query({
            query: ORDER_ITEM,
            variables: { id: this.$route.query.itemId },
            fetchPolicy: 'no-catch',
          })
        ).data.orderItem
        this.order = order
        console.log(order)
      } catch (e) {}
    },
  },
}
</script>

<style scoped></style>
