<script setup>
const props = defineProps({
  tag: String,
  url: {
    type: String,
    default: ''
  }
})
const { tag } = props
</script>

<template>
  <a v-if="url.length > 0" :href="url" class="tag">{{tag}}</a>
  <span v-else class="tag">{{tag}}</span>
</template>

<style lang="scss" scoped>
  .tag {
    padding: .8em 1em;
    display: inline-block;
    background-color: #fff;
    border: solid 1px var(--link-color);
    border-radius: 50px;
    font-size: 80%;
    color: inherit;
    text-decoration: inherit;
  }
</style>