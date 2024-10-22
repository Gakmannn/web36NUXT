<template>
  <nav>
    <NuxtLink to="/">home</NuxtLink>
    <NuxtLink to="/about">about</NuxtLink>
    <NuxtLink to="/books">books</NuxtLink>
    <NuxtLink to="/lk">lk</NuxtLink>
    <NuxtLink to="/login">login</NuxtLink>
  </nav>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

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