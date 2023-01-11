<template>
  <div class="app">
    <form @submit.prevent>
      <h2>Оставить отзыв</h2>
      <input v-bind:value="title" @input="title = $event.target.value" class="input" type="text" placeholder="Имя">
      <input v-bind:value="body" @input="body = $event.target.value" class="input" type="text" placeholder="Отзыв">
      <button class="btn" @click="createPost">Создать</button>
    </form>
      <div class="post" v-for="post in posts" :key="post.index">
        <div><strong>Имя: </strong>{{ post.title }}</div>
        <div><strong>Описание: </strong>{{ post.body }}</div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {id: 1, title: 'Катя', body: 'Спасибо большое за Ваш сервис! Намного упрощает способ бронирования'},
        {id: 2, title: 'Катя', body: 'Спасибо большое за Ваш сервис! Намного упрощает способ бронирования'},
        {id: 3, title: 'Катя', body: 'Спасибо большое за Ваш сервис! Намного упрощает способ бронирования'},
        {id: 4, title: 'Катя', body: 'Спасибо большое за Ваш сервис! Намного упрощает способ бронирования'},
      ],
      title: '',
      body: ''
    }
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      }
      this.posts.push(newPost);
      this.title = '';
      this.body = '';
    },
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}

.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}

form {
  display: flex;
  flex-direction: column;
}

.btn {
  margin-top: 15px;
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
}

.input {
  width: 100%;
  border: 1px sollid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>