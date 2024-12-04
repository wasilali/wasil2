<script setup>
const contactMethods = [
  {
    name: 'Email',
    value: 'wasilsohail123456@gmail.com',
    icon: 'email',
    href: 'mailto:wasilsohail123456@gmail.com'
  },
  {
    name: 'Phone',
    value: '+92 3063965043',
    icon: 'phone',
    href: 'tel:+923063965043'
  },
  {
    name: 'Location',
    value: 'Pakistan',
    icon: 'location',
    href: '#'
  }
]
</script>

<template>
  <section id="contact" class="py-16 bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="section-title">Get In Touch</h2>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          I'm currently available for freelance work or full-time positions. 
          Feel free to reach out if you have a project in mind or just want to connect!
        </p>
      </div>

      <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="method in contactMethods" 
             :key="method.name"
             class="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center
                    transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div class="inline-flex items-center justify-center w-12 h-12 rounded-full 
                      bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 mb-4">
            <svg v-if="method.icon === 'email'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <svg v-else-if="method.icon === 'phone'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <svg v-else-if="method.icon === 'location'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ method.name }}</h3>
          <a :href="method.href" 
             class="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 
                    transition-colors duration-200">
            {{ method.value }}
          </a>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="mt-16 max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div class="p-8 md:p-12">
          <form class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="relative">
                <label for="name" 
                       class="absolute -top-2 left-2 inline-block px-1 bg-white dark:bg-gray-800 
                              text-sm font-medium text-gray-600 dark:text-gray-400">
                  Name
                </label>
                <input type="text" 
                       id="name" 
                       name="name" 
                       class="block w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 
                              bg-transparent
                              focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                              dark:text-white dark:focus:ring-indigo-400
                              transition-all duration-200"
                       placeholder="John Doe">
              </div>
              <div class="relative">
                <label for="email" 
                       class="absolute -top-2 left-2 inline-block px-1 bg-white dark:bg-gray-800 
                              text-sm font-medium text-gray-600 dark:text-gray-400">
                  Email
                </label>
                <input type="email" 
                       id="email" 
                       name="email" 
                       class="block w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 
                              bg-transparent
                              focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                              dark:text-white dark:focus:ring-indigo-400
                              transition-all duration-200"
                       placeholder="john@example.com">
              </div>
            </div>
            <div class="relative">
              <label for="subject" 
                     class="absolute -top-2 left-2 inline-block px-1 bg-white dark:bg-gray-800 
                            text-sm font-medium text-gray-600 dark:text-gray-400">
                Subject
              </label>
              <input type="text" 
                     id="subject" 
                     name="subject" 
                     class="block w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 
                            bg-transparent
                            focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                            dark:text-white dark:focus:ring-indigo-400
                            transition-all duration-200"
                     placeholder="What's this about?">
            </div>
            <div class="relative">
              <label for="message" 
                     class="absolute -top-2 left-2 inline-block px-1 bg-white dark:bg-gray-800 
                            text-sm font-medium text-gray-600 dark:text-gray-400">
                Message
              </label>
              <textarea id="message" 
                        name="message" 
                        rows="5" 
                        class="block w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 
                               bg-transparent
                               focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                               dark:text-white dark:focus:ring-indigo-400
                               transition-all duration-200 resize-none"
                        placeholder="Your message here..."></textarea>
            </div>
            <div class="flex justify-end">
              <button type="submit" 
                      class="inline-flex items-center px-6 py-3 border border-transparent 
                             text-base font-medium rounded-lg text-white
                             bg-gradient-to-r from-indigo-500 to-purple-600 
                             hover:from-indigo-600 hover:to-purple-700
                             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                             transform transition-all duration-200 hover:-translate-y-0.5
                             shadow-lg hover:shadow-xl">
                <span>Send Message</span>
                <svg class="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template> 