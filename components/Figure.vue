<template>
  <figure class="thumbnail" :class="cssImgHighlight">
    <img :src="image" alt="" :style="cssRadius" :class="cssImgHighlight">
    <legend :style="cssHighlight">{{legend}}</legend>
  </figure>
</template>

<script setup>
  const props = defineProps({
    image: String,
    legend: String,
    radius: String,
    highlight: Boolean,
  })

  const cssRadius = "border-radius: " + props.radius
  let cssHighlight = ""
  let cssImgHighlight = ""
  if (props.highlight) {
    cssHighlight = "font-weight: bold; font-size: 100%;"
    cssImgHighlight = "highlight"
  }
</script>

<style lang="scss">
.thumbnail {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1em;
  max-width: 100px;
  text-align: center;
  
  img {
    display: inline-block;
    margin-bottom: .8rem;
    max-height: 60px;
    max-width: 60px;
    height: 100vh;
    width: 100vw;
    
    &.highlight {
      max-height: 120px;
      max-width: 120px;
      padding: .3em;

      border: solid 2px var(--link-color);
    }
  }

  legend {
    font-size: 85%;
  }

  &.highlight {
    max-width: none;

    legend {
      font-size: 120%;
    }
  }
}
</style>