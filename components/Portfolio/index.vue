<template>
<div id="portfolio">
    <p class="bold">Beberapa Hasil kerja kami.</p>
  <div class="gallery">
    <ul class="gallery__list">
      <li v-for="i in 18" :key="i">
        <figure>
          <img :src="require(`@/assets/images/${i}.jpeg`)">
        </figure>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.gallery {
  padding: 2em;
}
.bold{
  font-size: 32px;
  font-weight: 900;
}

.gallery > .gallery__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-template-rows: repeat(8, 200px);
  grid-gap: 0.2rem;
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
@media screen and (max-width: 1000px){
  .gallery{
    padding-top: 4em;
    background-color: rgba(237, 255, 71, 0.339);
  }
  .gallery > .gallery__list > li:nth-child(4n) {
  grid-column: span 1;
  grid-row: span 1;
}

.gallery > .gallery__list > li:nth-child(8n) {
  grid-column: span 2;
  grid-row: span 2;
}
}
</style>