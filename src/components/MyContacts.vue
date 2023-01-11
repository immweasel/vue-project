<template>
  <div class="contacts">
    <h1 class="contacts__phone">Если у Вас возникли какие-то трудности, можете связаться с нами по телефону <span class="contacts__span-accent">+7 (925) 357 71 87</span></h1>
    <p class="contacts__form">Или оставить заявку по форме ниже и мы Вам перезвоним</p>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.contacts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.contacts__phone {
  font-size: medium;
  font-weight: normal;
}

.contacts__span-accent {
  font-size: 13px;
  font-weight: bold;
}

.contacts__form {
  font-size: medium;
  font-weight: normal;
}
</style>