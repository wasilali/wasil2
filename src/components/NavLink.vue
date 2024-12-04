<script setup>
import { smoothScroll } from '../utils/scroll'

const props = defineProps({
  href: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})

const handleClick = (e) => {
  if (props.href.startsWith('#')) {
    e.preventDefault()
    smoothScroll(props.href, 800)
  }
}
</script>

<template>
  <a :href="href" 
     @click="handleClick"
     class="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 
            px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
    {{ text }}
  </a>
</template> 