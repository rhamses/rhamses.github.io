<template>
  <a :href={url} class="link" :title="title">
    <slot v-if="slots.default" />
    <div v-else>
      <span class="link__icon">
        <img :src="svgIcon" alt="">
      </span>
      {{title}}
    </div>
  </a>
</template>

<script setup>
import { useSlots } from 'vue';
const slots = useSlots()
const props = defineProps({
  url: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  }
})
const { url, title, icon } = props
let svgIcon = ''
if (icon) {
  svgIcon = `/img/${icon}.svg`
}
</script>

<style scoped lang="scss">
.link {
  @media screen and (min-width: 0) {
    color: var(--link-color);
    font-weight: bold;
    font-size: 90%;
    text-decoration: inherit;
    
    &--list {
      &__highlight {
        padding-bottom: .2rem;
        padding-top: .2rem;
        
        border-bottom: solid 1px #ccc;
        border-top: solid 1px #ccc;
      }
      
      &>.link {
        margin: 1.5em auto;
        display: block;
        width: 100%;
      }
    }
    
    &__icon {
      display: inline-block;
      margin-right: .5em;
      max-height: 20px;
      max-width: 20px;
      width: 100%;
      
      vertical-align: middle;
      
      img {
        max-width: 100%;
      }
    }
  }
  
  @media screen and (min-width: 1024px) {
    &--list {
      &>.link {
        margin: 1.5em auto;
        display: block;
        width: 50%;
      }
    }
  }
}
</style>