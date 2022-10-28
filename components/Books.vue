<template>
  <article class="feature__music">
    <p class="feature__title">Books</p>
    <div class="feature__tag--wrapper">
      <Tag class="feature__tag" v-for="(book, index) in books" :key="index" :tag="book.title" :url="book.url" />
    </div>
  </article>
</template>

<style scoped lang="scss">
.feature__tag {
  margin: .2rem;
}
.feature__tag--wrapper {
  flex-basis: 90%;
}
.feature__title {
  flex-basis: 10%;
}
.feature__music {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
</style>

<script setup>
  let books = ref([]);
  fetch('https://rss-to-json-serverless-api.vercel.app/api?feedURL=https://www.goodreads.com/review/list_rss/52109583?key=WO2VW3R3ayYeFy-qq3IehQzjbrrFoSgzEmJiRAzpGaCyMAO9&shelf=currently-reading')
    .then(res => res.json())
    .then(res => {
      res.items.forEach((item, index) => {
        if (index < 5) {
          let { title, url } = item
          title = title.split(":")[0]
          books.value.push({
            title,
            url
          })
        }
      })
  })
</script>