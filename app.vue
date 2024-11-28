<template>
  <NuxtLoadingIndicator></NuxtLoadingIndicator>
  <!-- <img src="/img/logo.jfif" alt=""/> -->
  <!-- <NuxtImg sizes="100vw sm:50vw md:400px" src="/img/zakat.jpg" :placeholder="[50, 25, 75, 5]" alt="" /> -->
  <nav>
    <NuxtLink to="/">home</NuxtLink>
    <NuxtLink to="/about">about</NuxtLink>
    <NuxtLink to="/books">books</NuxtLink>
    <NuxtLink to="/lk">lk</NuxtLink>
    <NuxtLink to="/login">login</NuxtLink>
    <NuxtLink to="/fetch">fetch</NuxtLink>
    <NuxtLink to="/authors">Авторы</NuxtLink>
    <NuxtLink to="/upload">Загрузка</NuxtLink>
    <NuxtLink to="/posts">Посты</NuxtLink>
  </nav>
  <div>
    <!-- <NuxtLayout> -->
    <NuxtPage />
    <!-- </NuxtLayout> -->
  </div>

</template>

<script setup lang="ts">
</script>

<style lang="scss">
@use "~/assets/css/style.scss";
a {
  display: inline-block;
  padding: 5px;
  margin: 5px;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>