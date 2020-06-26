<template>
  <div class="about">
    <ResizeObserver @resize="resize">
      <h1>This is an about page</h1>
    </ResizeObserver>
    <h2 v-resize="resize">
      This is an about page
    </h2>
  </div>
</template>

<script>
export default {
  methods:{
    resize(offset){
      console.log(offset)
    }
  }
}
</script>