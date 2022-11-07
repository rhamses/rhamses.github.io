<template>
  <Card :title="title">
    <Link class="pocket__article" :href="article.url" title="See more" v-for="(article, index) in articles" :key="index">
      <Figure :image="article.image" radius="50%" />
      <h2 class="highlight highlight__h2 pocket__title">{{article.title}}</h2>
      <p class="pocket__description">{{article.description}}</p>
    </Link>
  </Card>
</template>

<script setup>
let articles = ref([]);
let title = ref("I'm reading");

// fetch('https://rss-to-json-serverless-api.vercel.app/api?feedURL=https://getpocket.com/users/rhamses1/feed/unread')
//   .then(res => res.json())
//   .then(res => {
//     title.value = `${title.value} (${res.items.length})`
//     res.items.forEach((item, index) => {
//       if (index < 4) {
//         fetch(`https://opengraph.io/api/1.1/site/${encodeURIComponent(item.link)}?api-key=6a71020d-5751-4e87-8ac4-54b01bea4e66`)
//           .then(res1 => res1.json())
//           .then(res1 => {
//             const { title, description, image} = res1.openGraph
//             articles.value.push({
//               title,
//               description,
//               image: image.url,
//               url: item.url
//             })
//           })
//       }
//     })
//   })
//   .catch(err => console.log("err", err))
//   .finally(() => console.log("get articles from pocket"))
</script>

<style lang="scss" scoped>
.pocket {
  &__article {
    padding-left: 1.5rem;
    color: inherit;
    .thumbnail {
      float: left;
      margin-right: 2rem;
    }
  }

  &__title {
    margin-bottom: 1em;
  }

  &__description {
    font-weight: normal;
  }
}
</style>