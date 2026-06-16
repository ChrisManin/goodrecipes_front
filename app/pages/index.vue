<script setup lang="ts">
const { drupalFetch } = useDrupalFetch()

const { data: homepage, status, error } = await useAsyncData('homepage', () =>
  drupalFetch('/api/homepage?_format=json')
)
</script>

<template>
  <main class="min-h-screen bg-gray-50 p-8">
    <h1 class="text-4xl font-bold text-fuchsia-600 mb-6">GoodRecipes</h1>

    <div v-if="status === 'pending'" class="text-gray-500">Chargement…</div>
    <div v-else-if="error" class="bg-red-100 text-red-700 p-4 rounded-lg">Erreur : {{ error.message }}</div>
    <pre v-else class="bg-white shadow p-4 rounded-lg text-sm">{{ homepage }}</pre>
  </main>
</template>
