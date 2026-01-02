export default defineNuxtRouteMiddleware((to, from) => {
  // Simulated authentication state (change to true to test logged in state)
  const isAuthenticated = useState('isAuthenticated', () => false)

  // Protect dashboard routes
  if (to.path.startsWith('/dashboard') && !isAuthenticated.value) {
    return navigateTo('/')
  }
})
