<template>
  <div>
    <HeaderComp></HeaderComp>
    <ContactGrid></ContactGrid>
  </div>
</template>

<script>
import ContactGrid from '~/components/Contact.vue'
import HeaderComp from '~/components/Header.vue'

export default {
  components: {
    ContactGrid,
    HeaderComp
  }
}
</script>
