<template>
  <div class="quiz-card">
    <h2 class="slide">{{ question }}</h2>
    <div class="choices">
      <button
        v-for="(choice, index) in answerOptions"
        :key="index"
        class="btn btn-outline-dark btn-lg btn-block m-2"
        @click="selectAnswer(choice)"
      >
        <p>{{ choice.answer }}</p>
      </button>
    </div>
    <p class="progress">
      Question {{ currentQuestionIndex + 1 }} of {{ totalQuestions }}
    </p>
    <h3 class="score">Score: {{ score }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    question: String,
    answerOptions: Array,
    currentQuestionIndex: Number,
    totalQuestions: Number,
  },
  methods: {
    selectAnswer(choice) {
      this.$emit("answer", choice);
    },
  },
};
</script>

<style>
#question {
  animation: slideFromTop 0.5s;
}

.slide {
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
