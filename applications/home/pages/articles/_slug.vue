<template>
  <div class="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
    <div class="fixed flex-col hidden gap-3 right-8 bottom-8 md:flex">
      <button aria-label="Scroll To Comment" type="button" class="p-2 text-gray-500 transition-all bg-gray-200 rounded-full dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-300" style="opacity: 1;"><svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd"></path></svg></button>
      <client-only><ScrollToTop /></client-only>
    </div>
    <div class="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
      <header class="pt-6 xl:pb-6">
        <div class="space-y-1 text-center">
          <dl class="space-y-10">
            <div>
              <dt class="sr-only">Publié le</dt>
              <dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                <time :datetime="isoUpdatedAt" v-html="updatedAt">updatedAt</time>
              </dd>
            </div>
          </dl>
          <div>
            <PageTitle v-html="article.title"></PageTitle>
          </div>
        </div>
      </header>
      <div class="pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6"
           style="grid-template-rows: auto 1fr;">
        <dl class="pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200 xl:dark:border-gray-700">
          <dt class="sr-only">Auteur</dt>
          <dd>
            <ul class="flex justify-center space-x-8 xl:block sm:space-x-12 xl:space-x-0 xl:space-y-8">
              <li class="flex items-center space-x-2">
                <div
                  style="display: inline-block; max-width: 100%; overflow: hidden; position: relative; box-sizing: border-box; margin: 0;">
                  <div style="box-sizing: border-box; display: block; max-width: 100%;"><img alt="" aria-hidden="true"
                                                                                             src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                                                                                             style="max-width: 100%; display: block; margin: 0; border: none; padding: 0;">
                  </div>
                  <img alt="avatar" class="w-10 h-10 rounded-full"
                       src="/_next/image?url=%2Fstatic%2Fimages%2Favatar.png&amp;w=96&amp;q=75" decoding="async"
                       data-nimg="intrinsic"
                       srcset="/_next/image?url=%2Fstatic%2Fimages%2Favatar.png&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fstatic%2Fimages%2Favatar.png&amp;w=96&amp;q=75 2x"
                       style="position: absolute; inset: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;">
                  <noscript><img alt="avatar" class="w-10 h-10 rounded-full"
                                 srcset="/_next/image?url=%2Fstatic%2Fimages%2Favatar.png&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fstatic%2Fimages%2Favatar.png&amp;w=96&amp;q=75 2x"
                                 src="/_next/image?url=%2Fstatic%2Fimages%2Favatar.png&amp;w=96&amp;q=75" decoding="async"
                                 data-nimg="intrinsic" loading="lazy"
                                 style="position: absolute; inset: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;">
                  </noscript>
                </div>
                <dl class="text-sm font-medium leading-5 whitespace-nowrap">
                  <dt class="sr-only">Name</dt>
                  <dd class="text-gray-900 dark:text-gray-100">Tails Azimuth</dd>
                  <dt class="sr-only">Twitter</dt>
                  <dd><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Twitter"
                         class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">@Twitter</a></dd>
                </dl>
              </li>
            </ul>
          </dd>
        </dl>
        <div class="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2">
          <div class="pt-10 pb-8 prose dark:prose-dark max-w-none">
            <nuxt-content :document="article"/>
          </div>
          <div class="pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
            <a target="_blank" rel="nofollow" href="https://www.instagram.com/withalex/">Discutons-en sur Instagram</a>
          </div>
        </div>
        <footer>
          <div class="text-sm font-medium leading-5 divide-gray-200 xl:divide-y dark:divide-gray-700 xl:col-start-1 xl:row-start-2">
            <Tags :tags="article.tags" v-if="article.tags"/>
            <PrevNext :prev="prev" :next="next" />
          </div>
          <div class="pt-4 xl:pt-8">
            <NuxtLink class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" to="/">← Retour</NuxtLink>
          </div>
        </footer>
      </div>
    </div>
  </div>

</template>

<script>
import ScrollToTop from "../../components/ScrollToTop";
export default {
  components: {ScrollToTop},
  async asyncData({$content, params}) {
    const article = await $content('articles', params.slug).fetch()

    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next
    }
  },
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
  }
}
</script>
