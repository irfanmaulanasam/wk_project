<template>
  

<main class="gallery">
  <h1>Beberapa Hasil kerja kami.</h1>
  <ul class="gallery__list">
    <li v-for="i in 18" :key="i">
      <figure>
        <img :src="require(`@/assets/images/${i}.jpeg`)"
        alt="Juno's Latest Flyby of Jupiter Captures Two Massive Storms">
      </figure>
    </li>
  </ul>
</main>


</template>

<script>
export default {

}
</script>

<style scoped>
main.gallery {
  padding: 2rem;
}

.gallery > h1 {
  font-size: 3rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  margin-bottom: 1rem;
  color: #333333;
  font-weight: 100;
}

.gallery > .gallery__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-template-rows: repeat(6, 200px);
  grid-gap: 1rem;
  grid-auto-flow: dense;
}
.gallery > .gallery__list > li{
  list-style: none;
}
.gallery > .gallery__list > li:nth-child(4n) {
  grid-column: span 2;
  grid-row: span 2;
}

.gallery > .gallery__list > li:nth-child(8n) {
  grid-column: span 3;
  grid-row: span 3;
}

.gallery > .gallery__list > li > figure {
  height: 100%;
}

.gallery > .gallery__list > li > figure > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>