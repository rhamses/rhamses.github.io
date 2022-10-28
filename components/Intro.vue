<template>
  <Card>
    <header>
      <span class="sitemap">Intro > <i>Profile</i></span>
      <h1 class="highlight highlight__h1">Rhamsés Soares</h1>
      <q class="statusquote">Welcome to my homepage. Feel free to know a little bit about myself!</q>
    </header>
    <div>
      <section id="attributes">
        
      </section>
      <section class="feats">
        <About title="About Me" description="Backeend Engineer. Learning  to take a longer view on people. 🇧🇷 🏒 🖥" />
        <About title="Birthday" description="March 16, 1989" />
        <About title="Music" :items="musics" />
        <About title="Books" :items="books" />
      </section>
    </div>
  </Card>
</template>

<script setup>
  let musics = ref([]);
  let books = ref([]);
  getBooks(books);
  getMusics(musics);

  function getBooks(books) {
    fetch('https://rss-to-json-serverless-api.vercel.app/api?feedURL=https://www.goodreads.com/review/list_rss/52109583?key=WO2VW3R3ayYeFy-qq3IehQzjbrrFoSgzEmJiRAzpGaCyMAO9&shelf=currently-reading')
      .then(res => res.json())
      .then(res => {
        res.items.forEach((item, index) => {
          if (index < 5) {
            let { title, url } = item
            title = title.split(":")[0]
            books.value.push({
              name: title,
              url
            })
          }
        })
      })
      .catch(err => console.log("err", err))
      .finally(() => console.log("books loaded"))
  }
  function getMusics(musics) {
    fetch('https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=rhamses&api_key=122694a7319fa0f91fada388b3d8f8c9&format=json')
      .then(res => res.json())
      .then(res => {
        res.recenttracks.track.forEach((item, index) => {
          if (index < 7) {
            const { name, url } = item
            musics.value.push({
              name,
              url
            })
          }
        })
      })
      .catch(err => console.log(err))
      .finally(() => console.log("music function loaded"))
  }
</script>

<style scoped lang="scss">
.highlight {
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.statusquote {
  display: block;
  margin-bottom: 2rem;
  margin-top: 1.5rem;
  padding: .8rem 1.8rem;
  position: relative;
  width: 100%;
  
  background-color: #efefef;
  border-radius: 10px;
  &::before {
    content: '';
    display: block;
    height: 0;
    position: absolute;
    top: -20px;
    left: 20px;
    width: 0;
    border-left: 10px transparent solid;
    border-right: 10px transparent solid;
    border-bottom: 10px #efefef solid;
    border-top: 10px transparent solid;
  }
}

.sitemap {
  display: block;
  margin-bottom: 1em;
  width: 100%;
  
  font-size: .8rem;
  
  i {
    color: var(--link-color);
    font-weight: bold;
  }
}

.feats {
  article {
    padding: 1rem;
    &:nth-child(odd) {
      background-color: #f9f9f9;
    }
  }
}
</style>