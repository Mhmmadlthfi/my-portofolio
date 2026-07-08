<template>
  <section id="experience" class="py-20 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      
      <!-- Experience -->
      <div>
        <h3 class="font-display text-4xl font-bold mb-8">Experience</h3>
        <div class="space-y-8">
          
          <div 
            v-for="(exp, index) in experiences" 
            :key="index" 
            class="border-l-2 border-neon/50 pl-6 relative"
          >
            <div class="absolute w-4 h-4 rounded-full bg-neon left-[-9px] top-1"></div>
            
            <span class="text-neon text-sm font-semibold tracking-wider uppercase mb-1 block">
              {{ exp.period }}
            </span>
            <h4 class="text-2xl font-bold font-display mb-1">{{ exp.role }}</h4>
            <p class="text-white/60 font-medium mb-4">{{ exp.company }}</p>
            
            <div>
              <ul class="text-zinc-400 text-sm leading-relaxed list-disc list-outside ml-4 space-y-2">
                <li>{{ exp.tasks[0] }}</li>
                
                <template v-if="exp.isExpanded">
                  <li v-for="(task, tIndex) in exp.tasks.slice(1)" :key="'task-' + tIndex" class="animate-[fadeIn_0.3s_ease-in-out]">
                    {{ task }}
                  </li>
                </template>
              </ul>
              
              <button 
                @click="exp.isExpanded = !exp.isExpanded"
                class="mt-3 text-neon/80 hover:text-neon text-sm font-medium flex items-center gap-1.5 transition-colors"
              >
                <span>{{ exp.isExpanded ? 'Show Less' : 'Read More' }}</span>
                <svg 
                  class="w-4 h-4 transition-transform duration-300" 
                  :class="exp.isExpanded ? 'rotate-180' : ''"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
            
          </div>

        </div>
      </div>

      <!-- Education -->
      <div>
        <h3 class="font-display text-4xl font-bold mb-8">Education</h3>
        <div class="space-y-8">
          
          <div 
            v-for="(edu, index) in educations" 
            :key="index" 
            class="border-l-2 border-white/20 pl-6 relative"
          >
            <div class="absolute w-3 h-3 rounded-full bg-white/50 left-[-7px] top-1"></div>
            
            <span class="text-white/50 text-sm font-semibold tracking-wider mb-1 block">
              {{ edu.period }}
            </span>
            <h4 class="text-xl font-bold font-display mb-1">{{ edu.institution }}</h4>
            <p class="text-zinc-400 text-sm">{{ edu.degree }}</p>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Experience data
const experiences = ref([
  {
    period: 'August 2025 - Present',
    role: 'IT Programmer Officer',
    company: 'Trusmi Group • Cirebon',
    isExpanded: false,
    tasks: [
      'Maintained, optimized, and developed new features for internal web applications (utilizing CodeIgniter3) to ensure system stability and operational efficiency.',
      'Built and managed RESTful APIs to facilitate seamless data synchronization and integration across multiple platforms.',
      'Engineered an integrated Business-to-Business (B2B) tracking module, delivering real-time progress reporting to streamline crossdivisional communication and eliminate manual updates.',
      'Designed workflow automations using n8n, including the deployment of Agentic AI to generate and distribute highly personalized corporate communications (e.g., customized birthday messages based on role and tenure).',
      'Integrated third-party Payment Gateways into a customer self-ordering platform to automate and secure digital transaction processing.',
      'Upgraded the existing Point of Sales (POS) system by developing and integrating new business logic, such as a comprehensive customer referral program.'
    ]
  }
]);

// Education data
const educations = ref([
  {
    period: '2020 - 2024',
    institution: 'Universitas Teknologi Yogyakarta',
    degree: 'Bachelor of Information Systems (GPA: 3.53)'
  },
  {
    period: '2017 - 2020',
    institution: 'SMA Negeri 1 Rajagaluh',
    degree: 'IPA'
  }
]);
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>