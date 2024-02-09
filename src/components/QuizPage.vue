<template>
  <div class="container">
    <QuizCard
      :question="currentQuestion.question"
      :answerOptions="currentQuestion.answerOptions"
      :currentQuestionIndex="currentQuestionIndex"
      :totalQuestions="questions.length"
      @answer="handleAnswer"
      :key="currentQuestionIndex"
    />
  </div>
</template>

<script>
import questions from "../../public/questions.json";
import QuizCard from "./QuizCard.vue";

export default {
  components: {
    QuizCard,
  },
  data() {
    return {
      questions: questions,
      currentQuestionIndex: 0,
      score: 0,
    };
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    },
  },
  methods: {
    handleAnswer(choice) {
      if (choice.isCorrect) {
        this.score++;
      }
      this.currentQuestionIndex++;
      const questionEl = document.getElementById("question");
      questionEl.classList.remove("slide ");
      void questionEl.offsetWidth;
      questionEl.classList.add("slide ");
    },
  },
};
</script>

<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
@import url("https://fonts.googleapis.com/css?family=Cardo:400i|Rubik:400,700&display=swap");
@import url("https://fonts.googleapis.com/css?family=Roboto&subset=cyrillic");
:root {
  --d: 700ms;
  --e: cubic-bezier(0.19, 1, 0.22, 1);
  --font-sans: "Rubik", sans-serif;
  --font-serif: "Roboto", serif;
}

.container {
  display: flex;
  font-family: var(--font-serif);
}

#question {
  animation: slideFromTop 0.5s;
}

@keyframes slideFromTop {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
