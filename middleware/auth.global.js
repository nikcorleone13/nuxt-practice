
export default defineNuxtRouteMiddleware((to,from) =>{
    console.log('hello middlware auth ')
    const isLogggedIn = false;
    if(isLogggedIn){
        // redirect to page we want to go
    }
    // return navigateTo('/')
})