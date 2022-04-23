<template>
  <ul class="divide-y divide-gray-200 dark:divide-gray-700">
    <li class="py-12" v-for="article in articles">
      <Article :article="article" />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      default: () => null
    }
  }
}
</script>
