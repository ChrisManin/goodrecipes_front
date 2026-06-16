<script setup lang="ts">
const { drupalFetch } = useDrupalFetch()

const { data: homepage, status, error } = await useAsyncData('homepage', () =>
  drupalFetch('/api/homepage?_format=json')
)
</script>

<template>
  <main>
    <h1>GoodRecipes</h1>

    <div v-if="status === 'pending'">Chargement…</div>
    <div v-else-if="error">Erreur : {{ error.message }}</div>
    <pre v-else>{{ homepage }}</pre>
  </main>
</template>
