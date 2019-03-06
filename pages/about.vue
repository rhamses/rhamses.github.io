<template>
  <div>
    <HeaderComp></HeaderComp>
    <About></About>
  </div>
</template>

<script>
import About from '~/components/About.vue'
import HeaderComp from '~/components/Header.vue'

export default {
  components: {
    About,
    HeaderComp
  }
}
</script>
