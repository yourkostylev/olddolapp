<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  head() {
    return {
      link: [
        {
          rel:         'preload',
          href:        '/fonts/officina-serif-bold.woff2',
          as:          'font',
          type:        'font/woff2',
          crossorigin: 'anonymous',
        },
      ]
    }
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

@font-face {
  font-display: swap;
  font-family: 'ITC Officina Serif';
  src: url('/fonts/officina-serif-bold.woff2') format('woff2'),
       url('/fonts/officina-serif-bold.woff') format('woff'),
       url('/fonts/officina-serif-bold.ttf') format('truetype');
  font-weight: 600;
  font-style: normal;
}

html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 15px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0,0,0, 0);
}

html {
  min-height: 100%;
}
</style>
