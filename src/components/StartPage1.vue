<template>
  <p>Привет</p>

  <!--Bootstrap-->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Ваш Логотип</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Главная</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">О нас</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Контакты</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="page-content">
    <Card
      v-for="card in cards"
      :title="card.title"
      :copy="card.copy"
      :button="card.button"
      :image="card.image"
      :key="card.title"
    />
  </div>
</template>

<script>
import QuizPage from "./About.vue";

import questions from "../../public/questions.json";
import Card from "./Card.vue";

export default {
  name: "StartPage1.vue",
  components: {
    QuizPage,
    Card,
  },
  data() {
    return {
      questions: questions,
      cards: [
        {
          title: "Mountain View",
          copy: "Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains",
          button: "View Trips",
          image:
            "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        },
        {
          title: "To The Beach",
          copy: "Plan your next beach trip with these fabulous destinations",
          button: "View Trips",
          image:
            "https://images.unsplash.com/photo-1533903345306-15d1c30952de?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        },
        {
          title: "Desert Destinations",
          copy: "It's the desert you've always dreamed of",
          button: "Book Now",
          image:
            "https://images.unsplash.com/photo-1545243424-0ce743321e11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        },
        {
          title: "Explore The Galaxy",
          copy: "Seriously, straight up, just blast off into outer space today",
          button: "Book Now",
          image:
            "https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        },
      ],
    };
  },
};
</script>

<style scoped>
.page-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px; /* Расстояние между карточками */
}

.card {
  display: flex;

  width: 300px;
  height: 100%;
  position: relative;
  transition: 0.5s;
}

.card:hover::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
  transition: 0.5s;
}

.card:hover .card-body {
  opacity: 1;
  transform: translateY(0);
}

.card-body {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  opacity: 0;
  transform: translateY(100%);
  transition: 0.5s;
}
</style>
