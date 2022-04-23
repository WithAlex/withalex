<template>
  <header class="flex items-center justify-between py-10">
    <div>
      <NuxtLink aria-label="Tailwind CSS Blog" to="/">
        <div class="flex items-center justify-between">
          <div class="h-6 text-2xl font-semibold">HomeWithAlex</div>
        </div>
      </NuxtLink>
    </div>
    <div class="flex items-center text-base leading-5">
      <div class="hidden sm:block">
        <NuxtLink class="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100" to="/">Articles</NuxtLink>
      </div>
      <ThemeSwitch />
      <div class="sm:hidden">
        <button type="button" class="w-8 h-8 ml-1 mr-1 rounded" aria-label="Toggle Menu">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
               class="text-gray-900 dark:text-gray-100">
            <path fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"></path>
          </svg>
        </button>
        <div
          class="fixed w-full h-full top-24 right-0 bg-gray-200 dark:bg-gray-800 opacity-95 z-10 transform ease-in-out duration-300 translate-x-full">
          <button type="button" aria-label="toggle modal"
                  class="fixed w-full h-full cursor-auto focus:outline-none"></button>
          <nav class="fixed h-full mt-8">
            <div class="px-12 py-4"><a class="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                                       href="/blog">Blog</a></div>
            <div class="px-12 py-4"><a class="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                                       href="/tags">Tags</a></div>
            <div class="px-12 py-4"><a class="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                                       href="/projects">Projects</a></div>
            <div class="px-12 py-4"><a class="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                                       href="/about">About</a></div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import ThemeSwitch from "./ThemeSwitch";
export default {
  components: {ThemeSwitch}
}
</script>
