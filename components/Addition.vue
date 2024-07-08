<script setup lang="ts">
import { useState } from 'nuxt/app';

const counter = useState('counter', () => Math.round(Math.random() * 1000))
</script>

<template>
  <div>
    Counter: {{ counter }}
    <button class="border-2 ml-2 p-2 " @click="counter++">
      +
    </button>
    <button class="border-2 ml-2 p-2 " @click="counter--">
      -
    </button>
  </div>
</template>
