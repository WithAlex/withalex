<template>
  <div class="divide-y divide-gray-200 dark:divide-gray-700">
    <div class="pt-6 pb-8 space-y-2 md:space-y-5">
      <PageTitle>Les articles</PageTitle>
      <p class="text-lg leading-7 text-gray-500 dark:text-gray-400">Ici on parle vie à la maison et décoration !</p>
    </div>
    <ArticleList :articles="articles" />
  </div>
</template>

<script>
import ThemeSwitch from "../components/ThemeSwitch";
export default {
  components: {ThemeSwitch},
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .only(['title', 'excerpt', 'slug', 'tags', 'updatedAt'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles
    }
  }
}
</script>
