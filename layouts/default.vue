<template>
    <div class="DefaultLayout bg-slate-700 text-green-400 min-h-screen">
      <p>default layout</p>
      <slot />
    </div>
  </template>
  
  <script>
  export default {
    setup() {
      return {};
    },
  };
  </script>
  
  <style scoped>
  .DefaultLayout {
    padding: 20px;
    min-height: 100vh; /* Fallback style */
  }
  </style>
  