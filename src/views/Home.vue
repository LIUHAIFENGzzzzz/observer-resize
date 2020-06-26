<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" /><br>
    <digit-roll v-model="num"></digit-roll><br>
    <!-- <digit-roll v-model="num"></digit-roll><br> -->
    <!-- <digit-roll v-model="num"></digit-roll> -->
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <observer-resize>123</observer-resize>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data(){
    return {
      num:123
    }
  },
  mounted(){
    setInterval(()=>{
      this.num += Math.random()*100
    },2000)
  }
};
</script>
