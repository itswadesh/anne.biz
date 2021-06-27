h4
<template>
  <div v-if="facets" class="w-64 h-full">
    <div class="pt-2 pb-5 my-3 mb-2 border-b">
      <h4 class="px-2 text-base font-medium uppercase ms-2">CATEGORIES</h4>
      <ul class="px-2 overflow-auto font-light ms-2 max-h-96">
        <li
          v-for="(c, i) in sideMegamenu"
          :key="i"
          class="w-full overflow-hidden border-t tab"
        >
          <input
            :id="'tab-multi-' + i"
            class="absolute opacity-0"
            type="checkbox"
            name="tabs"
          />
          <label
            class="block px-5 py-2 leading-normal cursor-pointer"
            :for="'tab-multi-' + i"
            :class="{
              has: c.children.length,
              'text-yellow-500': i % 6 == 0,
              'text-purple-500': i % 6 == 1,
              'text-red-500': i % 6 == 2,
              'text-green-500': i % 6 == 3,
              'text-pink-500': i % 6 == 4,
              'text-blue-500': i % 6 == 5,
            }"
          >
            <nuxt-link :to="`/c/${c.slug}`">
              {{ c.name }}
            </nuxt-link>
          </label>
          <div
            class="
              overflow-hidden
              leading-normal
              bg-gray-100
              border-l-2 border-indigo-500
              tab-content
            "
          >
            <nuxt-link
              v-for="ch in c.children"
              :key="ch.id"
              :to="`/c/${ch.slug}`"
              class="block px-5 py-2 ml-2 hover:font-semibold"
            >
              {{ ch.name }}
            </nuxt-link>
          </div>
        </li>
        <!-- <li v-for="(c, index) in sideMegamenu" class="w-full overflow-hidden border-t tab" :key="c.id">
          <a
            class=""
            :class="{
              'text-yellow-500': index % 6 == 0,
              'text-purple-500': index % 6 == 1,
              'text-red-500': index % 6 == 2,
              'text-green-500': index % 6 == 3,
              'text-pink-500': index % 6 == 4,
              'text-blue-500': index % 6 == 5,
            }"
          >
                         <input class="absolute opacity-0 " :id="'tab-multi-'+index" type="checkbox" name="tabs">
               <label class="block p-5 leading-normal cursor-pointer" :for="'tab-multi-'+index">{{ c.name }}</label>


          </a>
          <div class="w-full overflow-hidden tab-content" >
          <nuxt-link
            :to="`/c/${ch.slug}`"
            v-for="ch in c.children"
            :key="ch.id"
            class="block ml-2"
          >
            {{ ch.name }}
          </nuxt-link>
          </div>
        </li> -->
      </ul>
    </div>
    <div
      class="
        flex
        items-center
        justify-between
        py-3
        text-sm
        font-bold
        border-b border-dashed
        md:px-3
        lg:px-4
        md:text-xs
        headings
      "
    >
      <div class="text-lg font-normal text-gray-600">FILTERS</div>
      <button
        class="
          text-right
          cursor-pointer
          text-primary-500
          focus:outline-none
          hover:text-yellow-600
        "
        @click="$emit('clearAllFilters')"
      >
        CLEAR ALL
      </button>
    </div>

    <!-- <div
      v-for="(v, k) in fl"
      :key="k"
      v-if="
        v && v.length > 0 && k != 'page' && k != 'sort' && k != 'categories'
      "
      class="flex flex-wrap items-center my-2 text-xs ms-3 me-2"
    >
      <div
        class="px-2 py-1 bg-gray-200 border rounded border-gray-50"
        v-for="(i, ix) in v"
        :key="ix"
      >
        {{ i }}
        <button
          aria-hidden="true"
          class="hover:bg-white ms-1"
          @click="remove(k, i)"
        >
          <svg
            class="w-3 h-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div> -->
    <!-- {{facets.categories.all.buckets[0].key}} == {{facets.categories.all.buckets[0].val.buckets[0].key}}
    <div v-if="facets.categories && facets.categories.all.buckets && facets.categories.all.buckets.length>0">
      <span class="px-2 py-2 text-sm font-semibold ms-2 headings">CATEGORY</span>
      <ul class="px-2 py-2 overflow-auto ms-2 max-h-96">
        <li
          v-for="b in facets.categories && facets.categories.all.buckets"
          :key="b.key"
        >
          <Checkbox
            :count="b.doc_count"
            :value="b.key"
            v-model="fl.categories"
            @change="changed({model:'categories',checked:fl.categories})"
          >{{b.val.buckets[0].key}}</Checkbox>
        </li>
      </ul>
    </div> -->

    <div
      v-if="
        facets.brands &&
        facets.brands &&
        facets.brands.all.buckets &&
        facets.brands.all.buckets.length > 0
      "
      class="pt-2 pb-5 my-3 border-b"
    >
      <h4 class="px-2 text-base font-medium uppercase ms-2">BRAND</h4>
      <ul class="px-2 overflow-auto font-light ms-2 max-h-96">
        <li
          v-for="b in facets.brands &&
          facets.brands.all &&
          facets.brands.all.buckets"
          :key="b.key"
        >
          <Checkbox
            v-model="fl.brands"
            class="flex items-center my-2 tracking-wider"
            color="primary"
            :count="b.doc_count"
            :value="b.key"
            @change="changed({ model: 'brands', checked: fl.brands })"
          >
            <div class="mt-0.5">{{ b.key }}</div>
          </Checkbox>
        </li>
      </ul>
    </div>
    <div
      v-if="
        facets.genders &&
        facets.genders &&
        facets.genders.all.buckets &&
        facets.genders.all.buckets.length > 0
      "
      class="pt-2 pb-5 my-3 border-b"
    >
      <h4 class="px-2 text-base font-medium uppercase ms-2">GENDER</h4>
      <ul class="px-2 overflow-auto font-light ms-2 max-h-96">
        <li
          v-for="b in facets.genders &&
          facets.genders.all &&
          facets.genders.all.buckets"
          :key="b.key"
        >
          <Checkbox
            v-model="fl.genders"
            class="flex items-center my-2 tracking-wider"
            color="primary"
            :count="b.doc_count"
            :value="b.key"
            @change="changed({ model: 'genders', checked: fl.genders })"
          >
            <div class="mt-0.5">{{ b.key }}</div>
          </Checkbox>
        </li>
      </ul>
    </div>
    <div
      v-if="
        facets.colors &&
        facets.colors.all &&
        facets.colors.all.buckets &&
        facets.colors.all.buckets.length > 0
      "
      class="pt-2 pb-5 my-3 border-b"
    >
      <h4 class="px-2 text-base font-medium uppercase ms-2">COLOR</h4>
      <ul class="px-2 overflow-auto font-light ms-2 max-h-96">
        <li
          v-for="b in facets.colors &&
          facets.colors.all &&
          facets.colors.all.buckets"
          :key="b.key"
        >
          <Checkbox
            v-model="fl.colors"
            class="flex flex-row my-2 tracking-wider"
            color="primary"
            :doc-color="b.key"
            :count="b.doc_count"
            :value="b.key"
            @change="changed({ model: 'colors', checked: fl.colors })"
          >
            <span class="mt-0.5">{{ b.key }}</span>
          </Checkbox>
        </li>
      </ul>
    </div>
    <div
      v-if="
        facets.sizes &&
        facets.sizes.all &&
        facets.sizes.all.buckets &&
        facets.sizes.all.buckets.length > 0
      "
      class="pt-3 pb-3 my-3 border-b"
      color="primary"
    >
      <h4 class="px-2 text-base font-medium uppercase ms-2">SIZES</h4>
      <ul class="px-2 overflow-auto font-light ms-2 max-h-96">
        <li
          v-for="b in facets.sizes &&
          facets.sizes.all &&
          facets.sizes.all.buckets"
          :key="b.key"
        >
          <Checkbox
            v-model="fl.sizes"
            class="flex flex-row my-2 tracking-wider"
            color="primary"
            :count="b.doc_count"
            :value="b.key"
            @change="changed({ model: 'sizes', checked: fl.sizes })"
            ><span class="my-auto"> {{ b.key }}</span>
          </Checkbox>
        </li>
      </ul>
    </div>

    <div
      v-if="
        facets.price &&
        facets.price.all &&
        facets.price.all.buckets &&
        facets.price.all.buckets.length > 0 &&
        getTotalDocCount(facets.price.all.buckets) > 0
      "
      class="pt-3 pb-3 my-3 border-b"
      color="primary"
    >
      <h4 class="px-2 text-base font-medium uppercase ms-2">PRICE RANGE</h4>
      <ul class="px-2 overflow-auto font-light ms-2 max-h-96">
        {{
          fl.price
        }}
        <li
          v-for="b in facets.price &&
          facets.price.all &&
          facets.price.all.buckets"
          :key="b.key"
          v-if="b.doc_count > 0"
        >
          <Radio
            v-model="fl.price"
            class="flex flex-row my-2 tracking-wider"
            color="primary"
            :count="b.doc_count"
            :value="b.from + ',' + b.to"
            @change="changed({ model: 'price', checked: fl.price })"
            ><span class="my-auto"> {{ b.key }}</span>
          </Radio>
        </li>
      </ul>
    </div>

    <div
      v-if="
        facets.age &&
        facets.age.all &&
        facets.age.all.buckets &&
        facets.age.all.buckets.length > 0 &&
        getTotalDocCount(facets.age.all.buckets) > 0
      "
      class="pt-3 pb-3 my-3 border-b"
      color="primary"
    >
      <h4 class="px-2 text-base font-medium uppercase ms-2">AGE GROUP</h4>
      <ul class="px-2 overflow-auto font-light ms-2 max-h-96">
        <li
          v-for="b in facets.age && facets.age.all && facets.age.all.buckets"
          :key="b.key"
          v-if="b.doc_count > 0"
        >
          <Radio
            v-model="fl.age"
            class="flex flex-row my-2 tracking-wider"
            color="primary"
            :count="b.doc_count"
            :value="b.from + ',' + b.to"
            @change="changed({ model: 'age', checked: fl.age })"
            ><span class="my-auto"> {{ b.key }}</span>
          </Radio>
        </li>
      </ul>
    </div>

    <div
      v-for="(v, k) in facets.features &&
      facets.features.name &&
      facets.features.name.buckets"
      :key="k"
      class="pt-2 pb-5 my-3 border-b"
    >
      <template v-if="v.key != 'Color' && v.val && v.val.buckets.length > 0">
        <h4 class="px-2 text-base font-medium uppercase ms-2">{{ v.key }}</h4>
        <ul class="px-2 overflow-auto font-light ms-2 max-h-96">
          <li v-for="f in v.val.buckets" :key="f.key">
            <Checkbox
              v-model="fl[v.key]"
              class="flex flex-row my-2 tracking-wider"
              :count="f.doc_count"
              :value="f.key"
              @change="changed({ model: v.key, checked: fl[v.key] })"
            >
              <div class="flex items-center">
                <div
                  data-colorhex="black"
                  class="w-4 h-4 rounded-full shadow me-1"
                  :style="{ 'background-color': 'red' }"
                ></div>
                <div class="my-auto">{{ f.key }}</div>
              </div>
            </Checkbox>
          </li>
        </ul>
      </template>
    </div>

    <div
      v-if="
        facets.colors &&
        facets.colors.colors &&
        facets.colors.colors.name &&
        facets.colors.colors.name.buckets &&
        facets.colors.colors.name.buckets.length > 0
      "
      class="pt-3 pb-3 my-3 border-b"
    >
      <h4 class="px-2 text-base font-medium uppercase ms-2">COLOR</h4>
      <ul class="px-2 overflow-auto font-light ms-4 max-h-96">
        <li
          v-for="b in facets.colors &&
          facets.colors.colors &&
          facets.colors.colors.name &&
          facets.colors.colors.name.buckets"
          :key="b.key"
          class="colour-listItem"
        >
          <Checkbox
            v-model="fl.colors"
            class="flex flex-row my-2 tracking-wider text-primary-500"
            :color="b.val.buckets[0] && b.val.buckets[0].key"
            :count="b.doc_count"
            :value="b.key"
            @change="changed({ model: 'colors', checked: fl.colors })"
          >
            <span class="my-auto"> {{ b.key }}</span>
          </Checkbox>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Checkbox, Radio } from '~/shared/components/ui'
import { constructURL } from '~/lib/'
import GET_MEGAMENU from '~/gql/category/megamenu.gql'
export default {
  components: { Checkbox, Radio },
  props: {
    clear: Boolean,
    fl: {
      type: [Object, Array],
      default: () => {
        return {}
      },
    },
    facets: {
      type: [Object, Array],
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {
      loadingPrice: true, // Required because after loading finished then only we will initiate the price slider component
      sideMegamenu: null,
    }
  },
  async created() {
    try {
      this.sideMegamenu = (
        await this.$apollo.query({
          query: GET_MEGAMENU,
          variables: { slug: this.$route.params.slug },
          fetchPolicy: 'no-cache',
        })
      ).data.megamenu
    } catch (e) {}
  },
  methods: {
    getTotalDocCount(arr) {
      let total = 0
      for (const a of arr) {
        total += a.doc_count
      }
      return total
    },
    scrollToTop() {
      if (process.client) {
        window.scroll({ behavior: 'smooth', left: 0, top: 150 })
      }
    },
    categoryChanged(i) {
      console.error('categoryChanged', i)
    },
    changed(e) {
      this.scrollToTop()
      this.fl[e.model] = e.checked
      const url = constructURL('/search', this.fl)

      this.$router.push(url)
    },
    remove(k, i) {
      const ix = this.fl[k].indexOf(i)
      this.fl[k].splice(ix, 1)
      // this.$emit("removed", this.fl);
      const url = constructURL('/search', this.fl)
      this.$router.push(url)
    },
    checkCategory() {},
    go(slug) {
      this.$router.push('/' + slug)
    },
  },
}
</script>
<style scoped>
.center-text {
  position: relative;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
}
.tab-content {
  max-height: 0;
  -webkit-transition: max-height 0.35s;
  -o-transition: max-height 0.35s;
  transition: max-height 0.35s;
}
.tab input:checked ~ .tab-content {
  max-height: 100vh;
}
.tab input[type='checkbox'] + label.has::after {
  content: '\25BE';
} /* .tab input[type=checkbox]:checked + label::after {
         transform: rotate(315deg);
         background-color: #6574cd;
         color: #f8fafc;
         } */
</style>
