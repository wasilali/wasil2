<script setup>
import { ref } from 'vue'
import { useDarkMode } from '../composables/useDarkMode'

const isMenuOpen = ref(false)
const { isDark, toggleDarkMode } = useDarkMode()

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' }
]
</script>

<template>
  <nav class="fixed w-full top-0 z-50 bg-white dark:bg-gray-900 shadow-lg transition-colors duration-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <div class="flex-shrink-0">
          <span class="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </span>
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NavLink v-for="item in navItems" 
                  :key="item.name" 
                  :href="item.href"
                  :text="item.name" />
          
          <!-- Dark Mode Toggle -->
          <button @click="toggleDarkMode" 
                  class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">
            <svg v-if="isDark" class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg v-else class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center space-x-4">
          <button @click="toggleDarkMode" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            <svg v-if="isDark" class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg v-else class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
          <button @click="isMenuOpen = !isMenuOpen" 
                  class="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-show="isMenuOpen" 
         class="md:hidden absolute w-full bg-white dark:bg-gray-900 shadow-lg transition-all duration-200">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a v-for="item in navItems"
           :key="item.name"
           :href="item.href"
           @click="isMenuOpen = false"
           class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 
                  hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">
          {{ item.name }}
        </a>
      </div>
    </div>
  </nav>
</template> 