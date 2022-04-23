<template>
  <article>
    <div class="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
      <dl>
        <dt class="sr-only">Published on</dt>
        <dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
          <time :datetime="isoUpdatedAt" v-html="updatedAt"></time>
        </dd>
      </dl>
      <div class="space-y-5 xl:col-span-3">
        <div class="space-y-6">
          <div>
            <h2 class="text-2xl font-bold leading-8 tracking-tight">
              <NuxtLink class="text-gray-900 dark:text-gray-100" :to="'/articles/' + article.slug" v-html="article.title"></NuxtLink>
            </h2>
            <div class="flex flex-wrap">
              <NuxtLink class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" :to="'/tags/' + tag" v-for="tag in article.tags" v-html="tag"></NuxtLink>
            </div>
          </div>
          <div class="prose text-gray-500 max-w-none dark:text-gray-400">
            <nuxt-content :document="{body: article.excerpt}"/>
          </div>
        </div>
        <div class="text-base font-medium leading-6">
          <NuxtLink class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" aria-label="Read &quot;New features in v1&quot;" :to="'articles/' + article.slug">Lire la suite →</NuxtLink></div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  computed: {
    updatedAt: function () {
      if (!this.article) {
        return;
      }

      return new Date(this.article.updatedAt).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    },
    isoUpdatedAt: function () {
      if (!this.article) {
        return;
      }

      return new Date(this.article.updatedAt).toISOString();
    }
  },
  props: {
    article: {
      type: Object,
      default: () => null
    }
  }
}
</script>
