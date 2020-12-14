<template>
  <div id="default">
    <Navigation/>
    <div class="container">
     <Nuxt />
    <scroll/>
    </div>
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-image: url('https://static.vecteezy.com/system/resources/previews/000/576/820/non_2x/dot-pattern-background-vector.jpg');
}
#default{
  width: 80%;
  background: rgba(255, 255, 255, 0.781);
  margin: auto;
  border: rgba(255, 255, 255, 0.473) solid 0.2em;
}
.container{
  margin-top: 5.3em;
  padding-left: 0.5em;
  padding-right: 0.5em;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
