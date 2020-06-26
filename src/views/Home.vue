<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

      <h3>啊啊啊啊啊啊啊啊啊啊啊啊</h3>
    <observer-resize @resize="resize">
      <h3>啊啊啊啊啊啊啊啊啊啊啊啊</h3>
    </observer-resize>

    <HelloWorld   />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  methods: {
    resize(size) {
      console.log(size);
    },
  },
};
</script>
