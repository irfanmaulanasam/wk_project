<template>
  <div id="wrapper">
    <h1>
      {{ content.title }}
    </h1>
    <div class="bumper">
      <div class="subhead">
        <p>
          {{ content.hypotesis}}
        </p>
      </div>
      <div class="image1">
        <img :src="content.image[0]" :alt="content.title" />
        <sub>image source : {{ content.image[0] }}</sub>
      </div>
    </div>

    <div class="bodytext bodytext-de">
      <p v-for="data in content.desc" :key="data">
        {{ data }}
      </p>

    </div>
    <div class="image2">
      <img :src="content.image[1]" :alt="content.image[1]">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: Object,
  },
  methods: {
    cutParaghrap(text) {
      return `${text.match(/.{1,145}(\s|$)/g)[0]}`;
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 6em;
  line-height: 1;
  letter-spacing: -0.025em;
  word-spacing: -8px;
  text-indent: -8px;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

p {
  line-height: 1.5em;
}

/* IMAGE STYLES */
img {
  width: 100%;
  max-height: 100%;
  object-fit: contain;
}

/* SUB-HEAD STYLES */
.subhead {
  margin-top: 2rem;
}

.subhead p {
  font-weight: 700;
}
.image1 > a {
  text-decoration: none;
  color: gray;
}

/* DESKTOP STYLES - MEDIA QUERIES (1270px) */
@supports (display: grid) {
  @media (min-width: 1024px) {
    /* GLOBAL STYLES */
    body {
      font-size: 80%;
      max-width: 98%;
      padding: 0;
    }

    #wrapper {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: auto;
      grid-column-gap: 24px;
    }

    h1 {
      margin-bottom: 0;
      grid-column: 2 /5;
      grid-row: 1 / 2;
    }

    p {
      font-weight: 700;
    }

    /* IMAGE STYLES */
    .image1 > img {
      grid-column: 1 / 4;
      grid-row: 3 / 4;
      /* border: red solid 1px; */
    }
    .image1>sub{
      margin-top: 0.2em;
      /* border: red solid 1px; */
      font-size: 10px;
    }

    .bumper {
      grid-column: 2 /4;
      grid-row: 2 / 3;
      position: relative;
    }
    .image1 {
      width: 100%;
      height: 100%;
    }
    .subhead {
      position: absolute;
      width: 50%;
      background-color: rgba(255, 255, 255, 0.671);
    }

    /* BODYTEXT STYLES */
    .bodytext-de,
    .bodytext-en,
    .bodytext-fr {
      margin-top: 1rem;
    }

    .bodytext-de {
      grid-column: 2 / 4;
      grid-row: 4 / 5;
    }

    .image2>img{
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  /* DESKTOP STYLES - MEDIA QUERIES (1280px) */

  @media (min-width: 1280px) {
    /* GLOBAL STYLES */
    body {
      font-size: 100%;
    }
  }
}
</style>