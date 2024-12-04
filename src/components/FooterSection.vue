<script setup>
const currentYear = new Date().getFullYear()

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/wasilali', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/muhammadwasil', icon: 'linkedin' },
  { name: 'Twitter', url: '#', icon: 'twitter' },
  { name: 'Email', url: 'mailto:wasilsohail123456@gmail.com', icon: 'email' }
]

const sections = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' }
]
</script>

<template>
  <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Brand Section -->
        <div class="space-y-4">
          <h3 class="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            Muhammad Wasil
          </h3>
          <p class="text-gray-600 dark:text-gray-400">
            Full Stack Developer specializing in modern web technologies and scalable applications.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li v-for="section in sections" :key="section.name">
              <a :href="section.href" 
                 class="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 
                        transition-colors duration-200">
                {{ section.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Social Links -->
        <div>
          <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect</h4>
          <div class="flex space-x-4">
            <a v-for="social in socialLinks" 
               :key="social.name"
               :href="social.url"
               target="_blank"
               class="p-2 rounded-full bg-gray-100 dark:bg-gray-800 
                      hover:bg-indigo-100 dark:hover:bg-indigo-900/30 
                      text-gray-600 dark:text-gray-400 
                      hover:text-indigo-600 dark:hover:text-indigo-400
                      transition-colors duration-200">
              <span v-if="social.icon === 'github'" class="w-5 h-5 block">
                <svg class="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"></path>
                </svg>
              </span>
              <span v-else-if="social.icon === 'linkedin'" class="w-5 h-5 block">
                <svg class="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </span>
              <span v-else-if="social.icon === 'twitter'" class="w-5 h-5 block">
                <svg class="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </span>
              <span v-else-if="social.icon === 'email'" class="w-5 h-5 block">
                <svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
        <p class="text-center text-gray-500 dark:text-gray-400">
          © {{ currentYear }} Muhammad Wasil. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template> 