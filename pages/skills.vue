<template>
  <div>
    <HeaderComp></HeaderComp>
    <SkillsGrid></SkillsGrid>
  </div>
</template>

<script>
import SkillsGrid from '~/components/Skills.vue'
import HeaderComp from '~/components/Header.vue'

export default {
  components: {
    SkillsGrid,
    HeaderComp
  }
}
</script>
