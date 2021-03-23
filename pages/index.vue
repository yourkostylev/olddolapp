<template>
  <main role="main" class="container">
    <h1 class="header">Новое мобильное приложение!</h1>
    <div class="tagline">Ура! Приложение «Дилер онлайн» уже доступно в App Store и Google Play.</div>

    <label class="label label_red">cкачивайте</label>
    <br />
    <label class="label label_blue">регистрируйте<br />договоры</label>
    <br />
    <label class="label label_green">обслуживайте<br />абонентов</label>

    <a href="https://dol.beeline.ru/app" class="button">Скачать приложение</a>

    <div class="light light_1" />
    <div class="light light_2" />
    <div class="light light_3" />
    <div class="confetti confetti_1" />
    <div class="confetti confetti_2" />
    <div class="confetti confetti_3" />
    <div class="confetti confetti_4" />
    <div class="confetti confetti_5" />
    <div class="confetti confetti_back" />
  </main>
</template>

<script>
export default {
}
</script>

<style lang="scss">
$loading-time: .75s;

html,
body {
  background-color: #F5F4F2;
  color: black;
  overflow-x: hidden;
}

.container {
  margin: auto;
  max-width: 560px;
  padding: 72px 16px 40px;
  position: relative;
}

.header {
  font-size: 34px;
  font-weight: 900;
  letter-spacing: -1.6px;
  line-height: 41px;
  margin: 0;
  position: relative;
  z-index: 2;
}

.tagline {
  backdrop-filter: blur(2px);
  background-color: rgba(#FAF7F5, .4);
  border-radius: 16px;
  color: #2C2D2F;
  letter-spacing: -.5px;
  margin: 8px -8px 32px;
  padding: 16px 8px;
  position: relative;
  z-index: 7;
}

.label {
  @mixin fall-out($id, $deg) {
    @keyframes fall-out-#{$id} {
      10% {
        opacity: 1;
      }

      100% {
        opacity: 1;
        transform: translateY(0) rotate($deg) rotateY(0);
      }
    }
  }

  animation: .8s ease-out $loading-time forwards;
  border-radius: 16px;
  color: white;
  display: inline-block;
  font-size: 22px;
  left: 50%;
  letter-spacing: -.4px;
  line-height: 26px;
  opacity: 0;
  padding: 11px 12px 13px;
  pointer-events: none;
  position: relative;
  z-index: 2;

  &_red {
    animation-name: fall-out-red;
    background: #EF4F37;
    box-shadow: 0 24px 8px -12px rgba(196,65,46,.08);
    margin-left: -132px;
    margin-bottom: 6px;
    transform-origin: right center;
    transform: translateY(-24px) rotate(-4deg) rotateY(-32deg);

    @include fall-out('red', -8deg);
  }

  &_blue {
    animation-name: fall-out-blue;
    background: #5A65FF;
    box-shadow: 0 24px 8px -12px rgba(42,49,143,.08);
    margin-left: -39px;
    margin-bottom: 88px;
    transform-origin: left center;
    transform: translateY(-20px) rotate(8deg) rotateY(24deg);

    @include fall-out('blue', 12deg);
  }

  &_green {
    animation-name: fall-out-green;
    background: #61B170;
    box-shadow: 0 24px 8px -12px rgba(53,131,67,.08);
    margin-left: -149px;
    margin-bottom: 24px;
    transform-origin: left center;
    transform: translateY(-16px) rotate(-28deg) rotateY(32deg);

    @include fall-out('green', -24deg);
  }
}

.button {
  background-color: #FFC047;
  border-radius: 8px;
  cursor: pointer;
  display: block;
  font-size: 17px;
  letter-spacing: -.4px;
  padding: 14px;
  position: relative;
  text-align: center;
  z-index: 8;

  &,
  &:hover,
  &:focus {
    color: #2E2411;
    outline: none;
    text-decoration: none;
  }

  &:active {
    background-color: #CB9F4B;
  }
}

.light,
.confetti {
  background-size: contain;
  background-repeat: no-repeat;
  pointer-events: none;
  position: absolute;
  left: 50%;
}

.light {
  mix-blend-mode: screen;
  transform: none;
  z-index: 6;

  &_1 {
    $size: 352px;

    background-image: url('/images/light1.png');
    height: $size;
    margin-left: -176px;
    top: -3px;
    width: $size;
  }

  &_2,
  &_3 {
    $size: 120px;

    height: $size;
    width: $size;
  }

  &_2 {
    background-image: url('/images/light2.png');
    margin-left: -222px;
    top: 194px;
  }

  &_3 {
    background-image: url('/images/light3.png');
    margin-left: 90px;
    top: 9px;
  }
}

.confetti {
  animation: .5s wow $loading-time ease-out forwards;
  opacity: 0;
  position: absolute;
  transform-origin: top center;

  @keyframes wow {
    10% {
      opacity: 1;
    }

    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  &_1 {
    animation-delay: $loading-time;
    background-image: url('/images/confetti1.png');
    height: 127px;
    margin-left: -246px;
    top: -33px;
    transform: translateY(-12px) scale(.8);
    width: 152px;
    z-index: 4;
  }

  &_2,
  &_3,
  &_4,
  &_5 {
    z-index: 3;
  }

  &_2 {
    background-image: url('/images/confetti2.png');
    height: 84px;
    margin-left: -153px;
    top: 30px;
    transform: translateY(-48px) scale(.5);
    width: 90px;
  }

  &_3 {
    animation-delay: $loading-time + .25s;
    background-image: url('/images/confetti3.png');
    height: 63px;
    margin-left: -176px;
    top: 191px;
    transform: translateY(-32px) scale(.8);
    width: 106px;
  }

  &_4 {
    animation-duration: .7s;
    background-image: url('/images/confetti4.png');
    height: 90px;
    margin-left: -98px;
    top: 219px;
    transform: translateY(-24px) scale(.6);
    width: 104px;
  }

  &_5 {
    background-image: url('/images/confetti5.png');
    height: 120px;
    margin-left: 129px;
    top: 231px;
    transform: translateY(-24px) scale(.8);
    width: 137px;
  }

  &_back {
    background-image: url('/images/confetti_back.png');
    height: 596px;
    margin-left: -243px;
    opacity: 0;
    top: 0;
    transform: translateY(-160px) scale(.8);
    width: 569px;
  }
}
</style>
