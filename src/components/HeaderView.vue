<template>
  <div>
    <header class="header">
      <router-link to="/" class="header__link">
        <button class="header__button">Главная</button>
      </router-link>
      <router-link to="/review" class="header__link">
        <button class="header__button">Отзывы</button>
      </router-link>
      <router-link to="/contacts" class="header__link">
        <button class="header__button">Контакты</button>
      </router-link>
      <router-link to="/account" class="header__link">
        <button class="header__button">Личный кабинет</button>
      </router-link>
    </header>
  </div>
</template>

<script>
export default {
    
  }
</script>

<style scoped>
.header {
  height: 50px;
  background-color:#f2f2f2;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: relative;
}

.header__button {
  margin: 0;
  margin-top: 12px;
}

</style>
