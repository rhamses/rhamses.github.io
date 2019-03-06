<template>
  <section class="container">
    <article class="contact--wrapper">
      <h2>Let's Chat?</h2>
      <p>
        You can send email me directly at <a href="mailto:rhamses@ambiente1.com.br">rhamses@ambiente1.com.br</a> and I'll answer you very fast. We can go from there. 
      </p>
      <h2>Do you want a quote?</h2>
      <p>Do you have a job and want me looking into it? Fill the form and we can talk business.</p>
      <form action="/success/" name="contact" method="POST" data-netlify="true">
        <div>
          <label>Your Name:</label>
          <input required type="text" name="name">   
        </div>
        <div>
          <label>Your Email:</label>
          <input required type="email" name="email">
        </div>
        <div>
          <label>Message: </label>
          <textarea required name="message"></textarea>
        </div>
        <div>
          <button type="submit" class="button button--green">Send</button>
        </div>
      </form>
    </article>
    <article class="contact--wrapper">
      <h2>Follow me on social media</h2>
      <a class="social--media social--media__twitter" href="https://twitter.com/rhamses">
        Twitter
      </a>
      <a class="social--media social--media__github" href="https://github.com/rhamses">
        Github
      </a>
      <a class="social--media social--media__linkedin" href="https://linkedin.com/in/rhamses">
        Linkedin
      </a>
    </article>
  </section>
</template>

<script>

export default {

}
</script>