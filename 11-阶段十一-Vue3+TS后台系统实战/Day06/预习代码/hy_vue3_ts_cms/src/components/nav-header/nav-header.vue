<template>
  <div class="nav-header">
    <div class="menu-icon">
      <el-icon size="28px"><Fold /></el-icon>
    </div>
    <div class="content">
      <span>面包屑</span>
      <header-info />
    </div>
  </div>
</template>

<script setup lang="ts" name="nav-header">
import HeaderInfo from './c-cpns/header-info.vue'
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  align-items: center;
  flex: 1;
  height: 100%;

  .menu-icon {
    display: flex;
    align-items: center;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 18px;
  }
}
</style>
