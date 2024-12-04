import { ref, onMounted, watch } from 'vue'

export function useDarkMode() {
  const isDark = ref(false)

  onMounted(() => {
    isDark.value = localStorage.getItem('darkMode') === 'true' ||
      (!localStorage.getItem('darkMode') && 
       window.matchMedia('(prefers-color-scheme: dark)').matches)
    applyDarkMode()
  })

  const toggleDarkMode = () => {
    isDark.value = !isDark.value
    localStorage.setItem('darkMode', isDark.value.toString())
    applyDarkMode()
  }

  const applyDarkMode = () => {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return {
    isDark,
    toggleDarkMode
  }
} 