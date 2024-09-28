<template>
  <router-view></router-view>
</template>

<script></script>

<style>
/*@font-face {
  font-family: iran;
  src: url(./assets/font/Vazir-Medium.ttf);
}*/

@font-face {
  font-family: Vazir;
  font-style: normal;
  font-weight: normal;
  src: url("./assets/fonts/Vazir.eot");
  src: url("./assets/fonts/Vazir.eot?#iefix") format("embedded-opentype"),
    url("./assets/fonts/Vazir.woff2") format("woff2"),
    url("./assets/fonts/Vazir.woff") format("woff"),
    url("./assets/fonts/Vazir.ttf") format("truetype");
}
@font-face {
  font-family: Vazir;
  font-style: normal;
  font-weight: bold;
  src: url("./assets/fonts/Vazir-Bold.eot");
  src: url("./assets/fonts/Vazir-Bold.eot?#iefix") format("embedded-opentype"),
    url("./assets/fonts/Vazir-Bold.woff2") format("woff2"),
    url("./assets/fonts/Vazir-Bold.woff") format("woff"),
    url("./assets/fonts/Vazir-Bold.ttf") format("truetype");
}

* {
  direction: rtl;
  box-sizing: border-box;
  font-family: "Vazir", Arial, sans-serif;
  font-weight: normal;
}

body {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}
</style>
