<template>
  <section class="card">
    <header class="card--header">
      <span v-if="title" class="highlight highlight__h2">
        {{ title }}
        <span v-if="content">
          ({{content.length}})
        </span>
      </span>
      <a v-if="content && content.length > 9" target="_blank" class="link" href={seeAllLink}>See All</a>
    </header>
    <article class="body" :style="bodyCss">
      <slot></slot>
    </article>
  </section>
</template>

<script setup>
  const props = defineProps({
    title: String,
    content: Array,
    seeAllLink: String,
    style: String,
    isRow: {
      type: Boolean,
      default: false
    }
  })
const { isRow } = props;
let bodyCss = ''
if (isRow) {
  bodyCss = 'flex-direction: row'
}
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  padding: 1rem;

  background-color: #fff;
  border-radius: var(--radius);

  &--header {
    display: flex;
    align-items: center;
    margin-bottom: 2em;
    justify-content: space-between;
  }

  .body {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .highlight {
    color: #000;
  }
}
</style>