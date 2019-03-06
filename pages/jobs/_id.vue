<template>
  <section v-show="loaded" class="job--details__wrapper">
    <article class="job--details__item">
      <small class="job--type">{{job.type}}</small>
      <h2 class="job--title">{{job.title.split(" - ")[0]}} <small>{{job.title.split(" - ")[1]}}</small></h2>
      <div class="job--description" v-html="job.description"></div>
      <h2 class="job--title__stack">Project Stack:</h2>
      <ul class="job--stack__list">
        <li class="job--stack__list-item"  v-for="(tech, index) in job.stack" :key="index">
          <span v-if="tech == 'html5'">
            <i class="devicon-html5-plain-wordmark colored" v-bind:title="tech"></i>  
          </span>
          <span v-else-if="tech == 'wordpress'">
            <i class="devicon-wordpress-plain colored" v-bind:title="tech"></i>
          </span>
          <span v-else-if="tech == 'css3'">
            <i class="devicon-css3-plain colored" v-bind:title="tech"></i>
          </span>
          <span v-else-if="tech == 'javascript'">
            <i class="devicon-javascript-plain colored" v-bind:title="tech"></i>
          </span>
          <span v-else-if="tech == 'mysql'">
            <i class="devicon-mysql-plain-wordmark colored" v-bind:title="tech"></i>
          </span>
          <span v-else-if="tech == 'apache'">
            <i class="devicon-apache-plain-wordmark colored" v-bind:title="tech"></i>
          </span>
          <span v-else-if="tech == 'grunt'">
            <i class="devicon-grunt-line-wordmark colored" v-bind:title="tech"></i>
          </span>
          <span v-else-if="tech == 'gulp'">
            <i class="devicon-gulp-plain colored" v-bind:title="tech"></i>
          </span>
          <span v-else-if="tech == 'webpack'">
            <i class="devicon-webpack-plain colored" v-bind:title="tech"></i>
          </span>
          <span v-else-if="tech == 'nginx'">
            <i class="devicon-nginx-original colored" v-bind:title="tech"></i>
          </span>
          <span v-else-if="tech == 'vuejs'">
            <i class="devicon-vuejs-plain colored" v-bind:title="tech"></i>
          </span>
          <span v-else-if="tech == 'babel'">
            <i class="devicon-babel-plain colored" v-bind:title="tech"></i>
          </span>
          <span v-else-if="tech == 'bootstrap'">
            <i class="devicon-bootstrap-plain colored" v-bind:title="tech"></i>
          </span>
          <span v-else-if="tech == 'bower'">
            <i class="devicon-bower-line colored" v-bind:title="tech"></i>
          </span>
          <span v-else-if="tech == 'express'">
            <i class="devicon-express-original colored" v-bind:title="tech"></i>
          </span>
          <span v-else-if="tech == 'mongodb'">
            <i class="devicon-mongodb-plain colored" v-bind:title="tech"></i>
          </span>
          <span v-else-if="tech == 'php'">
            <i class="devicon-php-plain colored" v-bind:title="tech"></i>
          </span>
          <span v-else-if="tech == 'sass'">
            <i class="devicon-sass-original colored" v-bind:title="tech"></i>
          </span>
          <span v-else></span>
        </li>
      </ul>
      <a v-if="job.url" v-bind:href="job.url" target="_blank" class="button button--green">Visit Website</a>
      <nuxt-link to="/jobs" class="button button--red button--close">Close Details</nuxt-link>
    </article>
    <figure class="job--details__image">
      <img v-bind:src="'http://res.cloudinary.com/ambiente1/image/upload/c_scale,w_960/' + job.image" v-bind:alt="job.title"> 
    </figure>
  </section>
</template>
<script>
import JobsContent from '~/assets/jobs.json';
export default {
  scrollToTop: true,
  asyncData({params, error}){
    if (params.id) {
      const job = JobsContent.find(job => job.slug === params.id);
      if (job) {
        let par = '';
        const paragraphys = job.description.split("\n");
        for (let item of paragraphys) {
          par += `<p>${item}</p>`;
        }
        job.description = par;
        return {job, loaded: true};
      } 
    } else {
      return {loaded: false}
    }
  },
  beforeDestroy(){
    return {loaded: false}
  }
}
</script>
