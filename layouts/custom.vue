<template>
    <div class="DefaultLayout bg-blue-700 text-green-400">
      <p>custom layout</p>
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
  /* Example scoped styles if needed */
  .DefaultLayout {
    padding: 20px;
  }
  </style>
  