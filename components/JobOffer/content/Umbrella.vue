<template>
  <div class="article">
    <div
      class="wrapper"
      :style="`background: url(${content.image[0]}) no-repeat center center fixed;`"
    >
      <div class="wrapperText">
        <h1>
          <mark> {{ content.title }}</mark>
        </h1>
        <p id="author">
          <mark>by DNMA</mark>
        </p>
      </div>
    </div>
    <!--The Text is generated with hipsum.co :) Check it out! -->
    <div class="articleText">
      <h4 class="introduction">
        {{ content.hypotesis }}
      </h4>
      <div class="container" v-for="(data, i) in content.desc" :key="i">
        <div v-if="i % 2 == 0">
          <img class="container_left_image" :src="content.image[i + 1]" />
          <div class="container__text">
            <p>{{ data }}</p>
          </div>
        </div>
        <div v-else>
          <img class="container_right_image" :src="content.image[i + 1]" />
          <div class="container__text">
            <p>{{ data }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: Object,
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,700);
* {
  /* I know I could write "margin: 0; padding: 0;". But that's not performant. */
  font-family: "Open Sans";
  line-height: 170%;
  color: #444;
}
h2 {
  margin-top: 20px;
}
mark {
  background-color: white;
  padding: 0px 3px;
}
.container {
  padding: 0 1em;
  max-width: 600px;
}
.container_left_image {
  height: 150px;
  padding: 0 0.5em;
  float: left;
  object-fit: cover;
}
.container_right_image {
  height: 150px;
  padding: 0 0.5em;
  float: right;
  object-fit: cover;
}

.container__text {
  display: inline;
  text-justify: distribute-all-lines;
  text-align: justify;
}
.wrapper {
  padding: 100px;
  margin: 0 0 50px 0;
  text-align: left;
  height: 40vh;
  background-size: cover;
  transition: all 0.4s ease;
}

.articleText {
  margin: 0 10% 30px 20%;
  width: 60%;
  max-width: 800px;
  padding-left: 30px;
  border-left: 1px solid #cccccc;
  transition: all 0.4s ease;
}
.introduction {
  margin-bottom: 20px;
}

@media only screen and (max-width: 1000px) {
  /* For tablets: */
  .articleText {
    margin: 0 10% 30px 10%;
    width: 80%;
    max-width: 800px;
    padding-left: 0px;
    border: 0;
  }
}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .articleText {
    margin: 0 5% 30px 5%;
    width: 90%;
  }
  .wrapper {
    padding: 5%;
  }
}
</style>