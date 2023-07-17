<template>
  <div class="app">
    <div>
      <button @click="isShow = !isShow">切换</button>
    </div>

    <!-- mode属性掌握 -->
    <transition name="xu" mode="out-in" appear="">
      <component :is=" isShow ? 'home': 'about'"></component>
    </transition>
  </div>
</template>

<script>
import Home from './pages/Home.vue'
import About from './pages/About.vue'
export default {
  components: {
    Home,
    About
  }
}
</script>

<script setup>
import { ref } from 'vue';

const isShow = ref(true)

</script>

<style scoped>

h2 {
  display: inline-block;
}

/* transition */
.xu-enter-from,
.xu-leave-to {
  opacity: 0;
}

.xu-enter-to,
.xu-leave-from {
  opacity: 1;
}


.xu-enter-active {
  animation: xuAnim 2s ease;
  transition: opacity 2s ease;
}

.xu-leave-active {
  animation: xuAnim 2s ease reverse;
  transition: opacity 2s ease;
}


@keyframes xuAnim {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}

</style>
