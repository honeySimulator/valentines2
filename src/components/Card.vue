<template>
  <div class="card">
    <img :src="image" class="card-img-top" alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ copy }}</p>
      <button class="btn btn-primary">{{ button }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    copy: String,
    button: String,
    image: String,
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

.card-text {
  color: white;
}

.btn-primary {
  background-color: black;
  color: white;
  border-radius: 0;
}
.card {
  width: 300px;
  position: relative;
  transition: 0.3s;
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

.card-title {
  font-weight: bold;
  color: white;
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  transition: 0.5s;
}

.card-text,
.btn-primary {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  opacity: 0;
  transform: translateY(100%);
  transition: 0.5s;
}

.card:hover .card-text,
.card:hover .btn-primary {
  opacity: 1;
}
</style>
