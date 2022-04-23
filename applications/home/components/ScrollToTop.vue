<template>
  <button v-on:click="scrollTo" v-show="show" aria-label="Scroll To Top" type="button" class="p-2 text-gray-500 transition-all bg-gray-200 rounded-full dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-300" style="opacity: 1;">
    <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
  </button>
</template>

<script>
export default {
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  data() {
    return {
      show: false
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      this.show = window.scrollY > 50
    },
    scrollTo: function () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>
