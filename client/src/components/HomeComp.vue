<template>
  <div class="Home">
    <HeaderComp></HeaderComp>
    <Home1Comp></Home1Comp>
    <Home2Comp></Home2Comp>
    <Home3Comp></Home3Comp>
  </div>
</template>

<script>
import HeaderComp from "./HeaderComp.vue";
import Home1Comp from "./Home/Home1Comp.vue";
import Home2Comp from "./Home/Home2Comp.vue";
import Home3Comp from "./Home/Home3Comp.vue";

export default {
  name: "HomeComp",
  components: { HeaderComp, Home1Comp, Home2Comp, Home3Comp },
};
</script>

<style>
.Home {
  background-color: rgb(249, 249, 249);
}
</style>
