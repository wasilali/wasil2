<script setup>
const personalInfo = {
  name: 'Muhammad Wasil',
  title: 'Full Stack, Next.js Developer',
  description: 'A motivated full stack developer who loves working with a team, has a genuine passion for the field of computer science, and a love for coding—self-motivated, organized, and a fast learner. Proficient in Node.js, Express.js, and databases, I am always thrilled by challenging work requiring fast learning and finding good solutions.',
  contact: {
    email: 'wasilsohail123456@gmail.com',
    phone: '+92 3063965043',
    location: 'Pakistan',
    github: 'github.com/wasilali',
    linkedin: 'linkedin.com/in/muhammadwasil'
  }
}

const skills = [
  {
    name: 'Frontend',
    technologies: [
      {
        name: 'React.js',
        image: '/skills/react.svg',
        level: '95%'
      },
      {
        name: 'Next.js',
        image: '/skills/nextjs.svg',
        level: '90%'
      },
      {
        name: 'Vue.js',
        image: '/skills/vue.svg',
        level: '85%'
      },
      {
        name: 'TypeScript',
        image: '/skills/typescript.svg',
        level: '88%'
      }
    ]
  },
  {
    name: 'Backend',
    technologies: [
      {
        name: 'Node.js',
        image: '/skills/nodejs.svg',
        level: '92%'
      },
      {
        name: 'Express.js',
        image: '/skills/express.svg',
        level: '90%'
      },
      {
        name: 'MongoDB',
        image: '/skills/mongodb.svg',
        level: '85%'
      },
      {
        name: 'PostgreSQL',
        image: '/skills/postgresql.svg',
        level: '80%'
      }
    ]
  }
]

const contactIcons = {
  email: '✉️',
  phone: '📱',
  location: '📍',
  github: '💻',
  linkedin: '🔗'
}
</script>

<template>
  <div class="relative bg-white dark:bg-gray-900 pt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div class="relative w-full py-16 lg:py-32">
        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
          <!-- Text Content -->
          <div class="sm:text-center lg:text-left lg:col-span-7 animate-slide-left">
            <div class="space-y-4 mb-8">
              <span class="inline-block px-4 py-2 rounded-full text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/50">
                Available for hire
              </span>
            </div>
            
            <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span class="block">Hi, I'm</span>
              <span class="block bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                {{ personalInfo.name }}
              </span>
              <span class="block text-2xl mt-2 text-gray-500 dark:text-gray-400">{{ personalInfo.title }}</span>
            </h1>
            
            <p class="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              {{ personalInfo.description }}
            </p>
            
            <!-- Contact Information -->
            <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a v-for="(value, key) in personalInfo.contact" 
                 :key="key"
                 :href="key === 'email' ? `mailto:${value}` : 
                        key === 'phone' ? `tel:${value}` : 
                        key === 'github' ? `https://${value}` :
                        key === 'linkedin' ? `https://${value}` : '#'"
                 class="flex items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800 
                        hover:bg-indigo-50 dark:hover:bg-indigo-900/30 
                        group transition-all duration-300 transform hover:-translate-y-1">
                <span class="w-10 h-10 flex items-center justify-center rounded-full 
                           bg-indigo-100 dark:bg-indigo-900/50 group-hover:bg-indigo-200 
                           dark:group-hover:bg-indigo-800 transition-colors duration-200">
                  <span class="text-xl">{{ contactIcons[key] }}</span>
                </span>
                <span class="ml-3 text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 
                           dark:group-hover:text-indigo-400">{{ value }}</span>
              </a>
            </div>

            <div class="mt-8 flex flex-wrap gap-4">
              <a href="#projects" class="btn-primary">
                <span>View Projects</span>
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#contact" class="btn-secondary">
                <span>Contact Me</span>
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
          
          <!-- Skills Section -->
          <div class="mt-12 lg:mt-0 lg:col-span-5 animate-slide-right">
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-8">
                Technical Skills
              </h3>
              
              <div class="space-y-8">
                <div v-for="category in skills" :key="category.name" class="space-y-4">
                  <h4 class="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                    {{ category.name }}
                  </h4>
                  <div class="space-y-4">
                    <div v-for="tech in category.technologies" 
                         :key="tech.name"
                         class="group">
                      <div class="flex items-center justify-between mb-2">
                        <div class="flex items-center space-x-3">
                          <img :src="tech.image" 
                               :alt="tech.name"
                               class="w-6 h-6 object-contain" />
                          <span class="text-gray-700 dark:text-gray-300">{{ tech.name }}</span>
                        </div>
                        <span class="text-sm text-gray-500 dark:text-gray-400">{{ tech.level }}</span>
                      </div>
                      <div class="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div class="h-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300 group-hover:from-purple-600 group-hover:to-indigo-500"
                             :style="{ width: tech.level }"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 