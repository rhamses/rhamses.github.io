module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Rhamses - Full Stack Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Full Stack Developer' },
      { property: "og:title", content: "Rhamsés Soares"},
      { property: "og:description", content: "Hi there, welcome to my porfolio"},
      { property: "og:image", content: "https://rhamses.com.br/rhamses-social.jpg"},
      { property: "og:site_name", content: "Rhamses - Full Stack Developer"},
      { property: "og:type", content: "website"},
      { property: "og:url", content: "https://rhamses.com.br"},
      { property: "twitter:title", content: "Rhamses - Full Stack Developer"},
      { property: "twitter:description", content: "Hi there, welcome to my porfolio"},
      { property: "twitter:image", content: "https://rhamses.com.br/rhamses-social.jpg"},
      { name: "msapplication-TileColor", content: "#ffffff"},
      { name: "theme-color", content: "#ffffff"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png"},
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png"},
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png"},
      { rel: "manifest", href: "/site.webmanifest"},
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#ffffff"},
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto"}
    ],
    script: [
      {type: "text/javascript", src: "https://code.jquery.com/jquery-3.3.1.min.js"},
      {type: "text/javascript", src: "/js/word-switcher.js"}
    ]
  },
  css:['bower_components/reset-css/reset.css', 'bower_components/devicon/devicon.min.css', '@/static/css/main.css', '@/assets/sass/main.scss'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  render: {
    bundleRender: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules|bower_components)/
        })
      }
    }
  }
}
