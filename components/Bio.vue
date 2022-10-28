<template>
  <Card>
    <Figure image="https://www.gravatar.com/avatar/bcc2a3ae01d8feb84f5bad3436e1400a?s=150" legend="Rhamsés Soares"
      radius="50%" :highlight=true />
    <address class="whereami">Artur Nogueira, São Paulo <br> Brasil</address>
    <section class="link--list link--list__highlight">
      <Link href="https://blog.rhams.es" title="Blog" icon="blog" />
      <Link href="https://work.rhams.es" title="Portfolio" icon="portfolio" />
    </section>
    <section class="link--list">
      <Link href="https://github.com/rhamses" title="Github" icon="github" />
      <Link href="https://linkedin.com/in/rhamses" title="Linkedin" icon="linkedin" />
      <Link href="https://twitter.com/rhamses" title="Twitter" icon="twitter" />
    </section>
  </Card>
</template>

<style scoped lang="scss">
.whereami {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
    max-width: 70%;

    line-height: 1.5;
    text-align: center;
  }

  .link {
    &--list {
      &__highlight {
        padding-bottom: .2rem;
        padding-top: .2rem;
        max-height: 120px;

        border-bottom: solid 1px #ccc;
        border-top: solid 1px #ccc;
      }

      &>.link {
        margin: 1.5em auto;
        display: block;
        width: 50%;
      }
    }

    &__icon {
      display: inline-block;
      margin-right: .5em;
      max-height: 20px;
      max-width: 20px;
      width: 100%;

      vertical-align: middle;
    }
  }
</style>