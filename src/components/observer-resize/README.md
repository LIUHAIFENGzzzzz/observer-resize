### observer-resize

监听元素宽高变化事件

### 安装

```js
npm i observer-resize --save;

import ObserverResize from '@/components/observer-resize';
Vue.use(ObserverResize);
```

### 示例

```vue
<template>
  <observer-resize @resize="resize">
    <h3>啊啊啊啊啊啊啊啊啊啊啊啊</h3>
  </observer-resize>

	<!-- 指令 -->
  <h3 v-resize="resize">啊啊啊啊啊啊啊啊啊啊啊啊</h3>
</template>

<script>
export default {
  methods: {
    resize(size) { // size = {width , height}
      console.log(size);
    },
  },
};
</script>
```

