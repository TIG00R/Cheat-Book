export default {
  
  faviconGlyph:"👻",  
  logo: <strong>A Hacker's Cheat Book 👻</strong>,
    project: {
      link: 'https://github.com/TIG00R/Cheat-Book',
    },head: <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="A Hacker's Cheat Book" />
        <meta property="og:description" content="A cheat book for fellow hackers to not waste their precious time <3" />
      </>,
     useNextSeoProps() {
      return {
        titleTemplate: '%s'
      }
    }
  }

 