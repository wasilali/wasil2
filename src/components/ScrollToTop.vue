<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { smoothScroll } from '../utils/scroll'

const isVisible = ref(false)
const scrollThreshold = 500
let lastScrollY = 0
let ticking = false

const checkScroll = () => {
  lastScrollY = window.scrollY

  if (!ticking) {
    window.requestAnimationFrame(() => {
      isVisible.value = lastScrollY > scrollThreshold
      ticking = false
    })
    ticking = true
  }
}

const scrollToTop = () => {
  smoothScroll('body', 800) // Smoother animation duration
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="translate-y-12 opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-12 opacity-0"
  >
    <button v-show="isVisible"
            @click="scrollToTop"
            class="fixed bottom-8 right-8 p-3 rounded-full 
                   bg-gradient-to-r from-indigo-500 to-purple-600
                   text-white shadow-lg 
                   hover:from-indigo-600 hover:to-purple-700
                   transform hover:-translate-y-1 
                   transition-all duration-300
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                   dark:focus:ring-offset-gray-900
                   z-50">
      <svg class="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  </Transition>
</template> 