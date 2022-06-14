<template>
  <coco-menu theme="light">
    <template v-slot:left>
      <div class="logoLink" url="/" @click="$router.push('/')">
        <img
          draggable="false"
          class="logo"
          src="https://tianyuhao.cn/images/coco-ui/coco-ui-logo.svg"
          alt="logo"
        />
        <span class="name">Coco UI</span>
      </div>
    </template>
    <template v-slot:right>
      <coco-icon icon="coco-ui-menu" @click="drawer = true" />
      <div class="menu-list">
        <coco-menu-item
          v-for="(list, index) in layoutList"
          :style="highLightStyle(list.url)"
          :key="index"
          :route="list.url"
        >
          {{ list.title }}
        </coco-menu-item>
      </div>
    </template>
  </coco-menu>

  <div id="content">
    <router-view />
  </div>

  <coco-drawer v-model="drawer" direction="right" size="200px">
    <Sidebar phone />
  </coco-drawer>
</template>

<script setup>
  import Sidebar from '@/components/Sidebar.vue'
  import { useRoute } from 'vue-router'
  import { ref, watch } from 'vue'
  const { highLightStyle, drawer, layoutList } = layoutOptions()
  function layoutOptions() {
    const layoutList = [
      { title: '首页', url: '/' },
      { title: '组件', url: '/component' },
      { title: '关于', url: '/about' }
    ]
    const route = useRoute()
    const highLightStyle = (url) => {
      const path = route.path
      if (path === '/') return { color: url === path ? '#3a6ff4' : '#000' }
      const res = path.match(/\/[a-zA-Z]+/gi)[0]
      return { color: url === res ? '#3a6ff4' : '#000' }
    }
    const drawer = ref(false)
    watch(
      () => route.path,
      () => {
        drawer.value = false
      }
    )
    return { highLightStyle, drawer, layoutList }
  }
</script>

<style scoped>
  .coco-menu {
    position: fixed;
    top: 0px;
    right: 0px;
    left: 0px;
    z-index: 20;
    display: flex;
  }
  .coco-menu .logoLink {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .coco-menu .logoLink .logo {
    height: 36px;
    width: 36px;
  }
  .coco-menu .logoLink .name {
    font-size: 20px;
    color: #6c63ff;
    font-weight: 600;
    margin-left: 10px;
  }
  #content {
    margin-top: 120px;
  }
  @media screen and (min-width: 700px) {
    .coco-ui-menu {
      display: none;
    }
    .menu-list {
      display: flex;
    }
  }
  @media screen and (max-width: 700px) {
    .coco-ui-menu {
      display: block;
    }
    .menu-list {
      display: none;
    }
  }
</style>

<style>
  .coco-drawer {
    overflow-x: hidden !important;
    overflow-y: auto !important;
  }
</style>
