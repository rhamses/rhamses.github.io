<template>
  <section class="container home">
    <div>
      <h1 class="title">
        &lt;RHAMSES&nbsp;/&gt;
      </h1>
      <div class="content">
        <h2 class="subtitle">
          <span class="in" id="word-switcher">
            <p class="glitch active" data-text="design" data-oid="0">front end</p>
            <p class="glitch" data-text="develop" data-oid="1">back end</p>
            <p class="glitch" data-text="love" data-oid="2">full stack</p>
          </span> developer.
        </h2>
      </div>
      <nuxt-link class="button--grey" to="/jobs">Jobs</nuxt-link>
      <nuxt-link class="button--grey" to="/skills">Skills</nuxt-link>
      <nuxt-link class="button--grey" to="/contact">Contact</nuxt-link>
    </div>
  </section>
</template>

<script>

export default {
  data: () => ({
    text: 'Full Stack Developer'
  })
}
</script>