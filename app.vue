<template>
  <nav>
    <NuxtLink to="/">home</NuxtLink>
    <NuxtLink to="/about">about</NuxtLink>
  </nav>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
@use "~/assets/css/style.scss";
</style>