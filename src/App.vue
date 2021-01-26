<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="layout" v-brick-layout>
      <div v-brick-item v-brick-width="200" v-for="(item, index) in items" :key="index">
        <div>{{item.title}}</div>
        <img :src="item.url">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

type Item = {
  title: string,
  url: string
}

const items: Array<Item> = [
  {
    title: "first",
    url: "https://via.placeholder.com/250x300"
  },
  {
    title: "second",
    url: "https://via.placeholder.com/250x200"

  },
  {
    title: "third",
    url: "https://via.placeholder.com/250x150"

  },
  {
    title: "forth",
    url: "https://via.placeholder.com/250x200"

  },
  {
    title: "fifth",
    url: "https://via.placeholder.com/250x300"

  }
]

export default defineComponent({
  name: 'App',
  data (){
    return {
      items
    }
  }
})
</script>

<style lang="css">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.layout {
  width: 600px;
  margin: 0 auto;
}
</style>
