<template>
  <div class="user">
    <!-- 1.搜索区域 -->
    <page-search @query-click="handleQueryClick" @reset-click="handleResetClick" />

    <!-- 2.展示区域 -->
    <page-content ref="contentRef" />
  </div>
</template>

<script setup lang="ts" name="user">
import PageSearch from './c-cpns/page-search.vue'
import PageContent from './c-cpns/page-content.vue'
import { ref } from 'vue'

const contentRef = ref<InstanceType<typeof PageContent>>()
function handleQueryClick(searchInfo: any) {
  contentRef.value?.fetchUserListData(searchInfo)
}
function handleResetClick() {
  contentRef.value?.handleResetClick()
}
</script>

<style lang="less" scoped></style>
