<template>
  <Card :title=title :isRow="true">
    <Link v-for="post in posts" :href="post.link" :title="post.title.rendered" class="link__small">
      <Figure :image="post.jetpack_featured_media_url" :legend="post.title.rendered" radius="50%" />
    </Link>
  </Card>
</template>

<script setup>
  const data = await fetch('https://blog.rhams.es/wp-json/wp/v2/posts')
  const posts = await data.json()
  const totalPosts = data.headers.get('X-WP-Total') * data.headers.get('X-WP-TotalPages')
  const title = `Blog Posts (${totalPosts})`
</script>