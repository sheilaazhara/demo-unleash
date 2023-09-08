<template>
  <div class="container mx-auto py-10 text-center">
    <h1 class="text-2xl font-bold">Demo Unlesh</h1>
    <nav class="text-blue-500 mt-4">
      <NuxtLink to="/" class="mr-3">Home</NuxtLink>
      <!-- variant -->
      <NuxtLink v-if="variant.name === 'A'" to="/FiturA" class="mr-3">Fitur A</NuxtLink>
      <NuxtLink v-else-if="variant.name === 'B'" to="/FiturB" class="mr-3">Fitur B</NuxtLink>
      <!-- switch on off feature -->
      <!-- <NuxtLink v-if="toggle" to="/FiturB" class="mr-3">Fitur B</NuxtLink> -->
    </nav>
  </div>
</template>

<script>

export default {
  name:'UnleashComponent',
  data() {
    return {
      toggle: this.$unleash.isEnabled('NEW-FEATURE'),
      variant: this.$unleash.getVariant('NEW-FEATURE')
    }
  }
}
</script>

