<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="@/assets/img/logo.svg" alt="logo" />
      <span class="title">弘源管理系统</span>
    </div>
    <el-menu
      default-active="1-2"
      text-color="#b7bdc3"
      active-text-color="#fff"
      background-color="#001529"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 1.系统总览 -->
        <el-sub-menu :index="item.id + ''">
          <template #title>
            <!-- <el-icon><Monitor /></el-icon> -->
            <el-icon><component :is="item.icon.split('el-icon-')[1]"></component></el-icon>
            <span>{{ item.name }}</span>
          </template>
          <template v-for="subitem in item.children" :key="subitem.id">
            <el-menu-item :index="subitem.id + ''">{{ subitem.name }}</el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts" name="nav-menu">
import useLoginStore from '@/store/login/login'

// 1.获取菜单数据
const loginStore = useLoginStore()
const userMenus = loginStore.userMenus
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;
}

.logo {
  display: flex;
  height: 28px;
  padding: 12px 10px 8px 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  .img {
    height: 100%;
    margin: 0 10px;
  }

  .title {
    font-size: 16px;
    font-weight: 700;
    color: white;
  }
}

.el-sub-menu {
  .el-menu-item {
    padding-left: 50px !important;
    background-color: #0c2135;
  }

  .el-menu-item:hover {
    color: #fff;
  }

  .el-menu-item.is-active {
    background-color: #0a60bd;
  }
}
</style>
