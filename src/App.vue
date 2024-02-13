<template>
  <div id="app" class="app">
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/quiz">Quiz</router-link> |
    <router-link to="/story">Story</router-link>
    <router-link to="/test">Story</router-link>
  </nav>
  <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

:root {
  --body-font: "Rubik", sans-serif;
  --background-color: #000; /* Цвет фона */
  --text-color: #fff; /* Цвет текста */
}

body {
  font-family: var(--body-font);
  background-color: var(--background-color);
  color: var(--text-color);
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
