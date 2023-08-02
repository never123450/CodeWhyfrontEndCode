<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside width="210px">
        <nav-menu />
      </el-aside>
      <el-container>
        <el-header height="48px">
          <nav-header />
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts" name="main">
import NavMenu from '@/components/nav-menu/nav-menu.vue'
import useLoginStore from '@/store/login/login'

const loginStore = useLoginStore()
loginStore.loadLocalDataAction()
</script>

<style scoped lang="less">
.main {
  width: 100%;
  height: 100%;
}

.main-content {
  height: 100%;

  .el-aside {
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 200px;
    text-align: left;
    cursor: pointer;
    background-color: #001529;
    transition: width 0.3s linear;
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .el-main {
    color: #333;
    text-align: center;
    background-color: #f0f2f5;
  }
}
</style>
