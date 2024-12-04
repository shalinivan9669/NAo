// middleware/auth.ts
import { defineNuxtRouteMiddleware, navigateTo } from '#app';
import { useStore } from 'vuex';

export default defineNuxtRouteMiddleware((to, from) => {
  // Исключаем маршруты, начинающиеся с /uploads/
  if (to.path.startsWith('/uploads/')) {
    return;
  }

  const store = useStore();

  console.log('Middleware: Checking authentication');
  console.log('isAuthenticated:', store.getters.isAuthenticated);
  console.log('isAdmin:', store.getters.isAdmin);

  if (!store.getters.isAuthenticated) {
    console.log('Middleware: User not authenticated, redirecting to /login');
    return navigateTo('/login');
  }

  if (to.meta.requiresAdmin && !store.getters.isAdmin) {
    console.log('Middleware: User is not admin, redirecting to /');
    return navigateTo('/');
  }
});
