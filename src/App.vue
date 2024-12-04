<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
import ScrollToTop from './components/ScrollToTop.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <Navbar />
    <HeroSection />
    <ExperienceSection />
    <ProjectsSection />
    <ContactSection />
    <FooterSection />
    <ScrollToTop />
  </div>
</template>