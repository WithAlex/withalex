<template>
  <div class="py-4 xl:py-8">
    <h2 class="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">Mot-clés</h2>
    <div class="flex flex-wrap">
      <Tag v-for="tag in tags" :tag="tag" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['tags']
}
</script>
