<template>
  <section class="sea" @scroll="handleScroll">
    <div class="container">
      <div class="content">
        <h1 class="scrollnimate" :data-magic-number="4 - scrollMagicNumber">
          Сколько пленок мы отсняли вместе?
        </h1>
        <p class="scrollnimate" :data-magic-number="4 - scrollMagicNumber">
          This p tag will scroll too, however the image is static
        </p>
        <Parallaxy
          debug
          :speed="200"
          :animation="(delta) => `transform: scale(${1 + delta / -100});`"
          class="absolute top-[50%] left-[40%] lg:left-[25%] z-10"
        >
          <img
            src="../assets/img.png"
            title="Glitter"
            class="img float-left scrollnimate"
            :data-magic-number="0 - scrollMagicNumber"
          />
        </Parallaxy>
      </div>
    </div>
    <div class="container pad">
      <div class="content">
        <h1 class="scrollnimate" :data-magic-number="-8 - scrollMagicNumber">
          REVERSE
        </h1>
        <p class="scrollnimate" :data-magic-number="-8 - scrollMagicNumber">
          These are using negative numbers reversing the flow, thus they move
          up.
          <a href="http://clione.ru/work/jellyfish/"
            >http://clione.ru/work/jellyfish/</a
          >
        </p>
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/276620/Jellyfish-cover.jpg"
          title="Glitter"
          class="img float-left scrollnimate"
          :data-magic-number="-2 - scrollMagicNumber"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Parallaxy from "@lucien144/vue3-parallaxy";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Parallaxy,
  },
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      scrollMagicNumber: 0,
    };
  },
  methods: {
    handleScroll() {
      this.scrollMagicNumber = window.scrollY / 4; // Adjust the division factor for different scroll speed
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin: 0;
  padding: 0;
  display: block;
  height: 100vh;
  display: flex;
  align-items: center;
}
.container.pad {
  margin-top: 100px;
}
.container .content {
  width: 98%;
  margin: auto;
  max-width: 500px;
  text-align: center;
  text-align: right;
  font-size: 18px;
  font-weight: 100;
  font-family: "Avenir", serif;
  h1,
  p {
    top: 100px;
    position: relative;
    z-index: 2;
  }
  p {
    max-width: 200px;
    float: right;
  }
}
.img.float-left {
  float: left;
  max-width: 350px;
}
.sea {
  position: relative;
  display: block;
  padding: 0;
  min-height: 4000px;
  background: #111;
  color: #fff;
}
a,
a:visited {
  color: steelblue;
}
.parallax-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img {
  max-width: 350px;
}
</style>
