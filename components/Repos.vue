<template>
  <Card :title=title :isRow="true" style="flex: 1">
    <Link v-for="repo in repos" :href="repo.html_url" :title="repo.description" class="link__small">
      <Figure image="https://via.placeholder.com/52x52" :legend="repo.full_name" radius="50%" />
    </Link>
  </Card>
</template>

<script setup>
  const ghToken = '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'
  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer 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");
  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
const { data } = await useFetch('https://api.github.com/users/rhamses/repos?sort=updated&direction=desc', requestOptions)
  const title = `Github Repos (${data.value.length})`
  const repos = data.value.filter(item => item.description && item.homepage).map(item => {
    let { homepage, description, html_url, full_name } = item
    full_name = full_name.replace("rhamses/","")
    return { homepage, description, html_url, full_name }
  })
</script>

<style>
.link {
  flex-basis: 33%;
  color: green
}
</style>