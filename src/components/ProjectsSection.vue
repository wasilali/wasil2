<script setup>
const projects = [
  {
    title: 'Full stack Scoop Application',
    description: 'A collaborative project in which users can create groups, channels, chat like slack',
    link: 'https://scoop-chat.vercel.app',
    github: 'https://github.com/wasilali/schoolproject',
    image: 'https://res.cloudinary.com/dj7nomqfd/image/upload/v1647117869/chat_app_preview.jpg',
    tags: [
      { name: 'React.js', icon: '/skills/react.svg' },
      { name: 'Node.js', icon: '/skills/nodejs.svg' },
      { name: 'MongoDB', icon: '/skills/mongodb.svg' },
      { name: 'Socket.io', icon: '/skills/socketio.svg' },
      { name: 'Redux', icon: '/skills/redux.svg' },
      { name: 'Express.js', icon: '/skills/express.svg' },
      { name: 'Tailwind CSS', icon: '/skills/tailwind.svg' }
    ]
  },
  {
    title: 'Full stack Qubio mobile and web application',
    description: 'Introducing the Qubio: your ultimate platform to inform, engage, and inspire through a dynamic blend of video, images, audio, links, and more. Share your creations effortlessly using QR codes, anytime, anywhere',
    link: 'https://qubio.vercel.app',
    github: 'https://github.com/wasilali/qubio',
    image: 'https://res.cloudinary.com/dj7nomqfd/image/upload/v1647117870/qubio_preview.jpg',
    tags: [
      { name: 'Next.js', icon: '/skills/nextjs.svg' },
      { name: 'Node.js', icon: '/skills/nodejs.svg' },
      { name: 'PostgreSQL', icon: '/skills/postgresql.svg' },
      { name: 'Prisma', icon: '/skills/prisma.svg' },
      { name: 'tRPC', icon: '/skills/trpc.svg' },
      { name: 'TypeScript', icon: '/skills/typescript.svg' },
      { name: 'AWS S3', icon: '/skills/aws.svg' }
    ]
  },
  {
    title: 'Build MVP website to generate AI pictures with REST API',
    description: 'A AI Image Generation App is a web application that generates images using astria.ai',
    link: 'https://ai-image-gen.vercel.app',
    github: 'https://github.com/wasilali/ai-image-generator',
    image: 'https://res.cloudinary.com/dj7nomqfd/image/upload/v1647117871/ai_gen_preview.jpg',
    tags: [
      { name: 'React.js', icon: '/skills/react.svg' },
      { name: 'Node.js', icon: '/skills/nodejs.svg' },
      { name: 'Express.js', icon: '/skills/express.svg' },
      { name: 'MongoDB', icon: '/skills/mongodb.svg' },
      { name: 'REST API', icon: '/skills/api.svg' },
      { name: 'Astria.ai', icon: '/skills/ai.svg' }
    ]
  },
  {
    title: 'Full Stack Pups Inspections web application',
    description: 'The PUPS Inspection Management System streamlines inspections across departments, ensuring compliance, safety, and IT standards while providing real-time insights for improved efficiency and care',
    link: '#',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'RTK Query', 'Material UI'],
    image: '/projects/pups.jpg'
  },
  {
    title: 'Full stack POS for restaurant',
    description: 'A specialized Point of Sale (POS) system designed exclusively for restaurants, streamlining order management, table service, inventory tracking, and seamless payment processing.',
    link: '#',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Redux', 'Socket.io', 'Stripe', 'Material UI'],
    image: '/projects/pos.jpg'
  },
  {
    title: 'MERN stack e-commerce web site',
    description: 'An operational E-commerce platform built on React.js, MongoDB, Node.js, and Express.js, featuring seamless payment processing functionality.',
    link: '#',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Redux', 'Stripe', 'Cloudinary', 'Tailwind CSS'],
    image: '/projects/ecommerce.jpg'
  }
]
</script>

<template>
  <section id="projects" class="py-12 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="section-title text-center">Featured Projects</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(project, index) in projects" 
             :key="index"
             class="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl 
                    transform transition-all duration-300 hover:-translate-y-2">
          <!-- Project Image with Overlay -->
          <div class="relative h-56 overflow-hidden">
            <img :src="project.image" 
                 :alt="project.title"
                 class="w-full h-full object-cover transform transition-transform duration-500 
                        group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-all duration-300
                        flex items-end justify-between p-4">
              <div class="flex space-x-4">
                <a :href="project.github" 
                   target="_blank"
                   class="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 
                          transition-colors duration-200">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"></path>
                  </svg>
                </a>
                <a :href="project.link" 
                   target="_blank"
                   class="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 
                          transition-colors duration-200">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 
                       group-hover:text-indigo-600 dark:group-hover:text-indigo-400 
                       transition-colors duration-200">
              {{ project.title }}
            </h3>
            
            <!-- Technologies Used -->
            <div class="flex flex-wrap gap-2 mb-4">
              <div v-for="tech in project.tags" 
                   :key="tech.name"
                   class="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-full 
                         bg-indigo-50 dark:bg-indigo-900/30
                         border border-indigo-100 dark:border-indigo-800
                         group/tech cursor-default">
                <img :src="tech.icon" 
                     :alt="tech.name"
                     class="w-4 h-4 object-contain" />
                <span class="text-xs font-medium text-indigo-700 dark:text-indigo-300">
                  {{ tech.name }}
                </span>
              </div>
            </div>

            <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
              {{ project.description }}
            </p>

            <!-- Project Links -->
            <div class="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-700">
              <a :href="project.github" 
                 target="_blank"
                 class="inline-flex items-center text-gray-600 dark:text-gray-400 
                        hover:text-indigo-600 dark:hover:text-indigo-400 
                        transition-colors duration-200">
                <span class="text-sm font-medium">Source Code</span>
                <svg class="w-4 h-4 ml-1.5 transition-transform duration-200 
                          group-hover:translate-x-1" 
                     fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"></path>
                </svg>
              </a>
              <a :href="project.link" 
                 target="_blank"
                 class="inline-flex items-center px-3 py-1.5 rounded-lg
                        text-sm font-medium text-indigo-600 dark:text-indigo-400 
                        bg-indigo-50 dark:bg-indigo-900/30
                        hover:bg-indigo-100 dark:hover:bg-indigo-900/50 
                        transition-colors duration-200">
                <span>Live Demo</span>
                <svg class="w-4 h-4 ml-1.5 transition-transform duration-200 
                          group-hover:translate-x-1" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template> 