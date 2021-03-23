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
          href:        '/fonts/sf-pro-text-heavy.woff2',
          as:          'font',
          type:        'font/woff2',
          crossorigin: 'anonymous',
        },
        {
          rel:         'preload',
          href:        '/fonts/sf-pro-text-semibold.woff2',
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
@font-face {
  font-display: swap;
  font-family: 'SF Pro Text';
  src: url('/fonts/sf-pro-text-heavy.eot');
  src: url('/fonts/sf-pro-text-heavy.eot?#iefix') format('embedded-opentype'),
       url('/fonts/sf-pro-text-heavy.woff2') format('woff2'),
       url('/fonts/sf-pro-text-heavy.woff') format('woff'),
       url('/fonts/sf-pro-text-heavy.ttf') format('truetype'),
       url('/fonts/sf-pro-text-heavy.svg#sf_pro_textheavy') format('svg');
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-display: swap;
  font-family: 'SF Pro Text';
  src: url('/fonts/sf-pro-text-semibold.eot');
  src: url('/fonts/sf-pro-text-semibold.eot?#iefix') format('embedded-opentype'),
       url('/fonts/sf-pro-text-semibold.woff2') format('woff2'),
       url('/fonts/sf-pro-text-semibold.woff') format('woff'),
       url('/fonts/sf-pro-text-semibold.ttf') format('truetype'),
       url('/fonts/sf-pro-text-semibold.svg#sf_pro_textsemibold') format('svg');
  font-weight: 700;
  font-style: normal;
}

html {
  font-family:
    'SF Pro Text',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 17px;
  font-weight: 700;
  line-height: 22px;
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
