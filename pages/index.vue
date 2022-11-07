<template>
  <main class="content">
    <div class="first-column">
      <Bio />
    </div>
    <div class="middle-column">
      <Intro />
      <ReadLater />
    </div>
    <div class="last-column">
      <Repos />
      <Blog />
    </div>
  </main>
</template>

<style scoped lang="scss">
.content {
  @media screen and (min-width: 0) {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    margin-top: 1rem;
    height: auto;
  }
  @media screen and (min-width: 1024px) {
    height: 100%;
    flex-direction: row;
  }
}
.first-column {
  @media screen and (min-width: 0) {
    flex-basis: 15%;
  }
  @media screen and (min-width: 1024px) {
    min-width: 220px;
  }
}
.last-column {
  @media screen and (min-width: 0) {
    flex-basis: 30%;
  }
  @media screen and (min-width: 1024px) {
    min-width: 400px;
  }
}
.first-column,
.last-column,
.middle-column {
  @media screen and (min-width: 0) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
    .card {
      flex: 1;
  
      &:first-child {
        margin-bottom: 1rem;
      }
    }
  }
  @media screen and (min-width: 1024px) {
    margin-bottom: 0;
  }
}
</style>