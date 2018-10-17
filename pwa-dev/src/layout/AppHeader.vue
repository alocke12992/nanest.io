<template>
  <div class="header">
    <router-link to="/" class="link">
      <div class="logo">
          NANEST
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.header {
  min-height: 44px;
  background: #2BD29E;
  display: flex;
  justify-content: center;
}

.logo {
  color: white;
  font-weight: 900;
  text-decoration: none;
  font-size: 1.2rem;
}

.link {
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
