<script setup>
const experiences = [
  {
    title: 'Mern Stack Backend Developer',
    company: 'Stackup Solutions Lahore',
    period: '04/2022 - 07/2023',
    achievements: [
      'Developed and maintained scalable web applications using the MERN (MongoDB, Express.js, React, Node.js) stack',
      'Designed and developed RESTful APIs using Node.js and Express.js, facilitating seamless communication between the front-end and back-end components of the application',
      'Played a key role in the development and enhancement of user interfaces, implementing responsive designs and interactive features to improve user engagement and satisfaction'
    ]
  },
  {
    title: 'Mern Stack, Next.js Developer',
    company: 'Sofrix Solutions',
    period: '09/2023 - Present',
    achievements: [
      'Crafted visually stunning user interfaces using Next.js ensuring cross-browser compatibility and mobile responsiveness for optimal user experience',
      'Implemented RESTful APIs for seamless communication between the front-end and back-end components',
      'Elevated user engagement by integrating dynamic frontend interfaces with powerful backend functionalities, resulting in a 25% increase in user retention and satisfaction'
    ]
  }
]
</script>

<template>
  <section id="experience" class="py-12 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white mb-12">
        Work Experience
      </h2>
      
      <div class="space-y-12">
        <div v-for="(exp, index) in experiences" 
             :key="index"
             class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 transition-transform hover:-translate-y-1">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ exp.title }}</h3>
              <p class="text-indigo-600 dark:text-indigo-400">{{ exp.company }}</p>
            </div>
            <span class="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">{{ exp.period }}</span>
          </div>
          
          <ul class="space-y-4 mt-4">
            <li v-for="(achievement, i) in exp.achievements" 
                :key="i"
                class="flex items-start">
              <svg class="w-6 h-6 text-indigo-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-gray-600 dark:text-gray-300">{{ achievement }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template> 