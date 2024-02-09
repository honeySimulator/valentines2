<template>
  <h1 class="text-bg-secondary">Категория: история наших отношений</h1>
  <div>
    <div
      v-for="(question, index) in questions"
      :key="index"
      class="p-4 border my-4"
    >
      <h3 class="h3">{{ question.question }}</h3>
      <img
        v-if="question.imagePath"
        :src="question.imagePath"
        alt="Question Image"
        class="my-4 img-fluid"
      />
      <div class="container">
        <div class="row">
          <div class="col">
            <button
              v-for="(option, optionIndex) in question.answerOptions"
              :key="optionIndex"
              class="btn btn-outline-dark btn-lg btn-block m-2"
            >
              {{ option.answer }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <h1 class="text-bg-secondary">Категория: насколько хорошо ты меня знаешь?</h1>
  <div>
    <div
      v-for="(question, index) in questions1"
      :key="index"
      class="p-4 border my-4"
    >
      <h3 class="h3">{{ question.question }}</h3>
      <img
        v-if="question.imagePath"
        :src="question.imagePath"
        alt="Question Image"
        class="my-4 img-fluid"
      />
      <div class="container">
        <div class="row">
          <div class="col">
            <button
              v-for="(option, optionIndex) in question.answerOptions"
              :key="optionIndex"
              class="btn btn-outline-dark btn-lg btn-block m-2"
            >
              {{ option.answer }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <h1 class="text-bg-secondary">
    Категория: угадай откуда это фото и когда оно было сделано
  </h1>
  <div>
    <div
      v-for="(question, index) in questions2"
      :key="index"
      class="p-4 border my-4"
    >
      <h3 class="h3">{{ question.question }}</h3>
      <img
        v-if="question.imagePath"
        :src="question.imagePath"
        alt="Question Image"
        class="my-4 img-fluid"
      />
      <div class="container">
        <div class="row">
          <div class="col">
            <button
              v-for="(option, optionIndex) in question.answerOptions"
              :key="optionIndex"
              class="btn btn-outline-dark btn-lg btn-block m-2"
            >
              {{ option.answer }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <h1 class="text-bg-secondary">Категория: история наших отношений</h1>
  <div>
    <div
      v-for="(question, index) in questions3"
      :key="index"
      class="p-4 border my-4"
    >
      <h3 class="h3">{{ question.question }}</h3>
      <img
        v-if="question.imagePath"
        :src="question.imagePath"
        alt="Question Image"
        class="my-4 img-fluid"
      />
      <div class="container">
        <div class="row">
          <div class="col">
            <button
              v-for="(option, optionIndex) in question.answerOptions"
              :key="optionIndex"
              class="btn btn-outline-dark btn-lg btn-block m-2"
            >
              {{ option.answer }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import QuizQuestion from './QuizQuestion.vue';
// import ProgressBar from './ProgressBar.vue';
import questions from "../../public/questions.json";
import questions1 from "../../public/questions1.json";
import questions2 from "../../public/questions2.json";
import questions3 from "../../public/questions3.json";

export default {
  name: "About.vue",
  data() {
    return {
      questions: questions,
      questions1: questions1,
      questions2: questions2,
      questions3: questions3,
    };
  },
  components: {
  },
  methods: {
    submitQuiz() {
      // Логика подсчёта результатов и перехода на главную страницу
    },
  },
};
</script>

<style scoped></style>
