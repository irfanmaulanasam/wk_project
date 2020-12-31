<template>
  <div>
    <a :href="link" target="_blank" class="card">
      <div
        class="thumb"
        :style="
          `background-image: url(${image});`
        "
      ></div>
      <article>
        <h1>{{ title }}</h1>
        <p>
          {{ description }}
        </p>
          <img :src="logo" :alt="title">
        <span>
        </span>
      </article>
        <div class="link">
          <span>pelajari lebih lanjut</span>
        </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    logo:String,
    title: String,
    link: String,
    description: String,
  },
};
</script>

<style scoped>
/* card */

.card {
  min-height: 100%;
  background: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: #444;
  position: relative;
  top: 0;
  transition: all 0.1s ease-in;
}

.card:hover {
  top: -2px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
}

.card article {
  padding: 20px ;
  display: flex;

  flex: 1;
  justify-content: space-between;
  flex-direction: column;
}
.card .thumb {
  padding-bottom: 60%;
  background-size: cover;
  background-position: center center;
}

.card p {
  flex: 1; /* make p grow to fill available space*/
  line-height: 1.2;
}
article img{
  width: 35%;
}
/* typography */
h1 {
  font-size: 20px;
  margin: 0;
  color: #333;
}

.card span {
  font-size: 16px;
  font-weight: bold;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 2em 0 1.5em 0;
}
.link {
  text-decoration: none;
  padding: 0.5em 0.2em;
  margin: 0;
  background-color: grey;
  position: absolute;
  width: 98%;
  bottom: 0;
}
.link span{
  font-size: 12px;
  color: aliceblue;
}
.link:after{
  content: ' >>';
  color: aliceblue;
  font-weight: 700;
}
</style>