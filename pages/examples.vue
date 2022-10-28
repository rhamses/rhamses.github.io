<template>
  <div>
    <Card :title="title" :content="objs">
      <Figure image="https://via.placeholder.com/52x52" legend="Von Dracula" radius="50%" />
      <Figure image="https://via.placeholder.com/52x52" legend="Von Dracula" radius="50%" />
      <Figure image="https://via.placeholder.com/52x52" legend="Von Dracula" radius="50%" />
      <Figure image="https://via.placeholder.com/52x52" legend="Von Dracula" radius="50%" />
      <Figure image="https://via.placeholder.com/52x52" legend="Von Dracula" radius="50%" />
      <Figure image="https://via.placeholder.com/52x52" legend="Von Dracula" radius="50%" />
    </Card>
    <Figure image="https://via.placeholder.com/100x100" legend="Von Dracula" radius="20%" />
    <Figure image="https://via.placeholder.com/132x132" legend="Von Dracula" radius="50%" highlight={true} />
    <Link url="https://github.com/rhamses" title="Github" icon="github" />
    <Tag tag="Tag de teste" />
  </div>
</template>

<script setup>
const objs = [{ a: 1 }, { b: 2 }, { c: 3 }]
const title = "Github Repos"
</script>