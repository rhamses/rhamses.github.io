<template>
  <article class="feature__music">
    <p class="feature__title">{{title}}</p>
    <p v-if="description">{{description}}</p>
    <p v-if="items.length > 0">
      <Tag class="feature__tag" v-for="(item, index) in items" :key="index" :tag="item.name" :url="item.url" />
    </p>
  </article>
</template>

<script setup>
  const props = defineProps({
    title: String,
    description: String,
    items: {
      type: Array,
      default: []
    }
  })
  const { title, description, items } = props
</script>

<style scoped lang="scss">
.feature__tag {
  margin: .2rem;
}

.feature__title {
  @media screen and (min-width: 0) {
    min-width: 30%;

    color: #B0B3B4;
    font-size: .9rem;
  }
  @media screen and (min-width: 1024px) {
    min-width: 15%;
  }
}

.feature__music {
  display: flex;
  align-items: center;
}
</style>