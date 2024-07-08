  <script setup>
  import { useNuxtApp } from '#app';

  const response = await $fetch('/api/hello');
  console.log("response"+ response)
//   const {sayHelloUtils } = useUtils();
  const { $sayHelloPlugin } = useNuxtApp();
  $sayHelloPlugin('world');
//   sayHelloUtils();
  </script>
<template>
	<div class="min-h-screen">
	  <Alert />
	  <h1>Home (/)</h1>
	  <Addition />
	  <Color />
	  <ContentDoc />
	</div>
  </template>
  
  
  <style lang="scss">
  </style>
  