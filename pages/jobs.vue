<template>
  <div class="job--page">
    <HeaderComp></HeaderComp>
    <nuxt-child :key="$route.params.id"></nuxt-child>
    <section class="job--list__wrapper">
      <article v-for="(job, index) in jobs" :key="index"  class="job--list__item">
        <nuxt-link :to="'/jobs/'+job.slug" class="job--list__content">
          <div class="job--list__header">
            <small class="job--list__type">{{job.type}}</small>
            <h2 class="job--title">{{job.title.split(" - ")[0]}} <small>{{job.title.split(" - ")[1]}}</small></h2>
            <a class="job--list__details-link button button--green">See Details</a>
          </div>
          <figure class="job--list__image">
            <img v-bind:src="imagePath + job.image" v-bind:alt="job.title">
          </figure>
        </nuxt-link>
      </article>
    </section>
  </div>
</template>

<script>
import HeaderComp from '~/components/Header.vue';
import JobsContent from '~/assets/jobs.json';

export default {
  data: () => ({
    jobs: JobsContent,
    imagePath: 'https://res.cloudinary.com/ambiente1/image/upload/c_crop,h_800,w_800'
  }),
  components: {
    HeaderComp
  }
}
</script>