
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('sayHelloPlugin', (msg) => {
      console.log(`Hello my ${msg}`);
    });
  });
  