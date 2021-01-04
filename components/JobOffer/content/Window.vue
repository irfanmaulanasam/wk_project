<template>
  <div class="window">
    <!-- https://codepen.io/brianhaferkamp/pen/ZZvLoy-->
    <div class="two-thirds-image-left-one-third-text-right">
      <div class="image">
        <img :src="content.image[0]"  :alt="content.image[0]"/>
      </div>
      <div class="text">
        <h1 class="title">{{content.title}}</h1>
        <h2 class="lead">
          {{content.hypotesis}}
        </h2>
        <p v-for="data in content.desc" :key="data">
          {{data}}
        </p>
      </div>
    </div>
    <!-- original code -->
    <div class="sample">
      <div class="image">
        <img :src="content.image[1]" alt="content.image[1]">
      </div>
      <div class="image">
        <img :src="content.image[2]" alt="content.image[2]">
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
    content:Object
  },
  methods:{
    cutParaghrap(text){
      return text.match(/.{1,145}(\s|$)/g)[0]
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Merriweather:400,400i,700");
.window {
  font-family: Merriweather, serif;
}

img {
  width: 100%;
  display: block;
}

p {
  line-height: 1.3;
}
@media (min-width: 1170px) {
  p {
    font-size: 1.2rem;
  }
}

.two-thirds-image-left-one-third-text-right {
  position: relative;
}
@media (min-width: 700px) {
  .two-thirds-image-left-one-third-text-right {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 1rem;
  }
}
@media (min-width: 1170px) {
  .two-thirds-image-left-one-third-text-right {
    grid-column-gap: 2rem;
  }
}
@media (min-width: 700px) {
  .two-thirds-image-left-one-third-text-right .image {
    grid-column: 1/8;
    height: 100%;
  }
  .two-thirds-image-left-one-third-text-right .image img {
    height: 100vh;
    -o-object-fit: cover;
       object-fit: cover;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
  }
}
@media (min-width: 1170px) {
  .two-thirds-image-left-one-third-text-right .image {
    grid-column: 1/9;
  }
}
.two-thirds-image-left-one-third-text-right .text {
  padding: 1rem;
}
@media (min-width: 700px) {
  .two-thirds-image-left-one-third-text-right .text {
    grid-column: 8/span all;
  }
}
@media (min-width: 1170px) {
  .two-thirds-image-left-one-third-text-right .text {
    grid-column: 9/span all;
  }
}
.two-thirds-image-left-one-third-text-right .text .title {
  font-size: 3rem;
  margin: 2rem 0;
}
@media (min-width: 700px) {
  .two-thirds-image-left-one-third-text-right .text .title {
    font-size: 4rem;
  }
}
.two-thirds-image-left-one-third-text-right .text .lead {
  font-style: italic;
  font-weight: 400;
  font-size: 1.2rem;
  margin: 1rem 0 3rem;
  line-height: 1.5;
}
@media (min-width: 700px) {
  .two-thirds-image-left-one-third-text-right .text .lead {
    font-size: 1.4rem;
  }
}

.sample{
  margin-top: 1em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  display: flex;
  width: 100%;
  flex-direction: column;
}
.sample .image{
  height: 450px;
}
.sample .image>img{
  height: 100%;
  object-fit: contain;
}
@media screen and(min-width: 850px){
  .sample{
    flex-direction: row;
    justify-content: space-around;
  }
}
</style>