<template>
  <div class="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
    <div v-if="prev">
      <h2 class="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">Article précédent</h2>
      <div class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
        <NuxtLink :to="prevLink" v-html="prev.title"></NuxtLink>
      </div>
    </div>
    <div v-if="next">
      <h2 class="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">Article suivant</h2>
      <div class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
        <NuxtLink :to="nextLink" v-html="next.title"></NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    prevLink: function () {
      return this.prev.slug;
    },
    nextLink: function () {
      return this.next.slug;
    },

  },
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  }
}
</script>
