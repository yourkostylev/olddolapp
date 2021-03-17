<template>
  <main role="main" class="container">
    <CatWithMagnifier />
    <h1 class="header">Страница не найдена</h1>
    <div class="hint">Она могла быть удалена, или вы ошиблись при вводе адреса</div>
    <a
      href="https://beeline.ru"
      class="link"
      title="Билайн"
    >
      <BeelineLogo class="beeline-logo"/>
    </a>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: 'Страница не найдена',
    }
  },

  components: {
    CatWithMagnifier: () => import('~/assets/images/cat_with_magnifier.svg'),
    BeelineLogo:      () => import('~/assets/images/beeline_logo.svg'),
  },
}
</script>

<style lang="scss">
body {
  background-color: #0D0F26;
  color: white;
}

.container {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: auto;
  padding: 128px 48px 64px;

  @media (max-width: 739px) {
    padding: 48px 24px;
  }
}

.header,
.hint {
  text-align: center;
}

.header {
  font-family: 'ITC Officina Serif', serif;
  font-weight: 600;
  font-size: 48px;
  line-height: 1;
  margin-top: 24px;
  margin-bottom: 16px;

  @media (max-width: 739px) {
    font-size: 32px;
  }
}

.hint {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 80px;
}

.link {
  margin-top: auto;
  outline: none;
}

.beeline-logo {
  animation: 2s ease-out 1s infinite alternate blinking;
  border-radius: 50%;
  box-shadow: 0px 0px 40px rgba(white, .64);

  @keyframes blinking {
    100% {
      box-shadow: 0px 0px 24px rgba(white, .48);
    }
  }
}
</style>
