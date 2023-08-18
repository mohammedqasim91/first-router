<template>
  <h1>Welcome</h1>

  <RouterLink :to="{ name: 'About' }">
  </RouterLink>

  <router-view></router-view>
</template>