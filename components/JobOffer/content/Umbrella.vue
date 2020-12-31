<template>
  <main class="magazine">
    <section class="text-center magazine-photo">
      <div class="magazine-photo__wrapper">
        <h2 class="text-lowercase magazine-photo__title">
          A Different <span class="text-uppercase">Perspective</span>
        </h2>
        <hr class="magazine-photo__line" />
        <p class="text-lowercase magazine-photo__desc">
          A codepen by <span class="text-uppercase">Raisa Yang</span>
        </p>
      </div>
    </section>
    <section class="magazine-content">
      <article class="magazine-article">
        <header class="text-center magazine-article__header">
          <h1 class="text-lowercase magazine-article__title">
            A <span class="text-uppercase">Digital</span> Philosophy
          </h1>
        </header>
        <div class="magazine-article__image">
          <img
            src="http://raiscake.me/files/fashion-img.jpg"
            width="200"
            height="300"
            alt="Woman looking over her shoulder"
          />
        </div>
        <div class="magazine-article__body">
          <h2 class="text-center text-uppercase magazine-article__body-title">
            Interview!
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            pellentesque nisi massa, sit amet blandit magna aliquam vel.
            Maecenas sit amet risus nec odio semper commodo nec id massa. Nam
            posuere lectus eu aliquet varius. Aenean vestibulum tellus non
            ornare pretium.
          </p>

          <p>
            <strong
              >Nullam nibh massa, commodo non pulvinar quis, lacinia quis
              lacus?</strong
            >
            Pellentesque sit amet quam consequat, dignissim urna vel, sodales
            quam. Donec maximus interdum porta. Quisque tincidunt commodo mi.
            Nunc id enim a odio dapibus malesuada vitae sed ipsum. Donec
            vestibulum non dolor ut suscipit. Nam ut ultricies ex. Etiam lacus
            odio, bibendum ac dictum ac, gravida id nibh. Pellentesque faucibus
            commodo sodales.
          </p>

          <p>
            <strong
              >Pellentesque eu maximus elit. Mauris suscipit sed nulla nec
              tincidunt?</strong
            >
            Praesent elementum viverra porttitor. Donec placerat at odio sit
            amet cursus. Mauris at sem ex. Fusce sed pharetra mauris, sed
            placerat eros. Pellentesque congue nibh vel laoreet vulputate. In
            sagittis ante in tincidunt efficitur.
          </p>

          <p></p>

          <p>
            <strong
              >Integer ac sodales ex. Curabitur cursus, odio ac gravida
              fermentum, ligula leo blandit urna, eu posuere sem ex luctus
              libero?</strong
            >
            Mauris tincidunt odio eu quam cursus, a lobortis lectus fermentum.
            Nullam purus justo, accumsan et lacus eget, porttitor viverra ante.
            Quisque bibendum eu leo a porttitor. Cras sit amet mauris vel tellus
            pharetra semper id quis lectus. Duis euismod ligula lectus, sit amet
            porttitor eros ornare eget. Fusce congue tristique rhoncus.
            Suspendisse enim risus, tincidunt sed dictum at, vulputate nec
            nulla. Donec iaculis porttitor auctor. Ut id sagittis urna. Morbi
            urna dolor, hendrerit dictum porta sit amet, ultrices at est. Duis
            commodo condimentum egestas.
          </p>

          <p>
            <strong
              >Mauris a molestie sapien. Aenean tincidunt, enim maximus vehicula
              dapibus, nisi tortor auctor justo, quis iaculis est quam ac
              diam?</strong
            >
            Nunc feugiat urna arcu, eu varius urna varius at. Nunc libero mi,
            posuere quis est et, pretium egestas metus. Duis mauris risus,
            auctor nec mattis at, tempor eu augue. Vivamus a felis enim. Integer
            at erat sit amet orci gravida congue in ac erat. Vestibulum bibendum
            consequat diam.
          </p>

          <p>
            <strong
              >Vivamus vulputate urna in egestas aliquet. Nam faucibus viverra
              erat, vel lobortis erat mollis sed.</strong
            >
            Donec vitae rutrum enim. Integer lacinia risus ut diam elementum,
            non hendrerit lectus sagittis. Aenean nec porta est. Aliquam eu
            sollicitudin ex. Pellentesque ornare malesuada erat in iaculis.
            Mauris vitae sollicitudin ante. Curabitur mauris neque, tincidunt
            sed faucibus id, mollis vitae purus. Cras eget consectetur lectus.
            Donec ac sem mattis, dictum nibh nec, pellentesque tortor. In non
            ullamcorper felis. Cras euismod porta ante sit amet congue. Aliquam
            varius fermentum imperdiet. Aenean ullamcorper tempor justo quis
            maximus. Suspendisse volutpat id est at fringilla.
          </p>
        </div>
      </article>
      <div class="magazine-credits">
        <p>
          <strong>Inspiration:</strong>
          <a
            href="http://www.touchey.com/post/15395830073/10-awesome-fashion-magazines-layouts"
            target="_blank"
            >touchey.com</a
          >
        </p>
        <p>
          <strong>Images used:</strong>
          <a
            href="https://www.pexels.com/photo/adult-attractive-beautiful-beauty-262226/"
            target="_blank"
            >1</a
          >
          and
          <a
            href="https://www.pexels.com/photo/adult-art-beautiful-black-and-white-292532/"
            >2</a
          >
        </p>
      </div>
      <div class="trapezoid"></div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
/* Variables */
/* Mixins */
/* General Styles */
main {
  font-family: "Droid Sans", "Arial", sans-serif;
  font-size: 14px;
  line-height: 2;
}

a {
  color: #000;
}
a:hover,
a:focus {
  color: #cf8699;
}

.text-center {
  text-align: center;
}

.text-lowercase {
  text-transform: lowercase;
}

.text-uppercase {
  text-transform: uppercase;
}

/* Magazine Styles */
html,
body {
  height: 100%;
}

.magazine {
  height: 100%;
}
@media screen and (min-width: 1240px) {
  .magazine {
    display: flex;
    min-height: 100%;
    height: auto;
    flex-direction: row-reverse;
  }
}

/* Magazine Photo */
.magazine-photo {
  display: flex;
  align-items: center;
  min-height: 500px;
  height: 100%;
  background: #000 url("http://raiscake.me/files/fashion-bg.jpg") no-repeat
    center center;
  background-size: cover;
}
@media screen and (min-width: 1240px) {
  .magazine-photo {
    width: 50%;
    min-height: none;
    height: auto;
  }
}

.magazine-photo__wrapper {
  width: 100%;
}

.magazine-photo__title {
  margin: 5em 0 0.25em;
  font-family: "Playfair Display", "Times New Roman", serif;
  font-size: 2em;
  font-style: italic;
  font-weight: 400;
  line-height: 1.35;
}
@media screen and (min-width: 620px) {
  .magazine-photo__title {
    font-size: 3em;
  }
}
@media screen and (min-width: 768px) {
  .magazine-photo__title {
    font-size: 3.43em;
  }
}
.magazine-photo__title span {
  display: block;
  font-size: 1.25em;
  font-style: normal;
  letter-spacing: 0.06em;
}
@media screen and (min-width: 415px) {
  .magazine-photo__title span {
    font-size: 1.75em;
  }
}

.magazine-photo__line {
  width: 50%;
  border: 0;
  border-bottom: 2px solid black;
  opacity: 0.25;
}

.magazine-photo__desc {
  margin: 1.5em 0 0;
  color: #666;
  letter-spacing: 0.14em;
}

/* Magazine Content */
.magazine-content {
  position: relative;
  overflow: hidden;
}
@media screen and (min-width: 1240px) {
  .magazine-content {
    width: 50%;
  }
}

.magazine-article__image {
  position: absolute;
  bottom: 2em;
  left: 0;
}

.magazine-article__title {
  margin: 8em 0 3em;
  font-family: "Playfair Display", "Times New Roman", serif;
  font-size: 1.43em;
  font-style: italic;
  font-weight: normal;
  letter-spacing: 0.1em;
}
@media screen and (min-width: 620px) {
  .magazine-article__title {
    margin-top: 4em;
  }
}
.magazine-article__title span {
  display: block;
  max-width: 330px;
  margin: 0 auto;
  color: #fff;
  font-family: "Oswald", "Droid Sans", "Arial", sans-serif;
  font-size: 3em;
  font-style: normal;
  letter-spacing: 0.13em;
  line-height: 1.35;
  background: #000;
}
@media screen and (min-width: 415px) {
  .magazine-article__title span {
    font-size: 4em;
  }
}

.magazine-article__body {
  position: relative;
  z-index: 1;
  width: 90%;
  margin: 0 auto 20em;
}
@media screen and (min-width: 415px) {
  .magazine-article__body {
    width: 80%;
  }
}
@media screen and (min-width: 620px) {
  .magazine-article__body {
    -moz-column-count: 2;
    column-count: 2;
    -moz-column-gap: 1em;
    column-gap: 1em;
    padding-left: 5em;
  }
}
@media screen and (min-width: 1500px) {
  .magazine-article__body {
    width: 70%;
    margin-bottom: 10em;
    padding-left: 10em;
  }
}
.magazine-article__body p {
  margin: 0;
  padding: 0.5em 0.8em;
  background: #fff;
}
.magazine-article__body p strong {
  display: block;
}
.magazine-article__body p:first-of-type {
  padding: 0.5em 0.8em;
  color: #fff;
  background: #000;
  text-decoration: underline;
}
@media screen and (min-width: 620px) {
  .magazine-article__body p:first-of-type {
    margin-top: -8em;
  }
}

.magazine-article__body-title {
  width: 150px;
  height: 150px;
  line-height: 150px;
  -moz-column-span: all;
  column-span: all;
  margin: 0 auto 2em;
  color: #fff;
  font-family: "Oswald", "Droid Sans", "Arial", sans-serif;
  font-weight: 400;
  letter-spacing: 0.14em;
  background: #cf8699;
  border-radius: 50%;
  shape-outside: circle();
  transform: rotate(10deg);
}
@media screen and (min-width: 415px) {
  .magazine-article__body-title {
    float: right;
    margin: 0.5em;
  }
}
@media screen and (min-width: 620px) {
  .magazine-article__body-title {
    float: none;
    margin: 0 -1em 2em auto;
  }
}
@media screen and (min-width: 1700px) {
  .magazine-article__body-title {
    margin-right: -2em;
  }
}

.trapezoid {
  position: absolute;
  bottom: 14em;
  left: 5em;
  z-index: 0;
  border-bottom: 950px solid #000;
  border-left: 300px solid transparent;
  border-right: 100px solid transparent;
  height: 0;
  width: 400px;
  transform: rotate(-40deg);
}

/* Credits */
.magazine-credits {
  position: absolute;
  top: 2em;
  left: 0;
  padding: 0.5em 0.8em;
  color: #fff;
  font-size: 0.86em;
  background: #000;
}
.magazine-credits a {
  color: #fff;
}
.magazine-credits p {
  padding: 0;
  line-height: 1.35;
}
</style>