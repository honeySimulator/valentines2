<template>
  <div class="story">
    <Story />
  </div>
</template>

<script>
// @ is an alias to /src
import Story from "../components/Story.vue";

export default {
  name: "StoryView",
  components: {
    Story,
  },
};
</script>
