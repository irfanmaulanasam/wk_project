<template>
<div class="navigation">
  <nav :class="{'colored':visible}">
    <a href="">Home</a>
    <a href="">Artwork</a>
    <div id="logo">
      <span>wk</span>
    </div>
    <a href="">Responses</a>
    <a href="">Contact</a>
  </nav>
</div>
</template>

<script>
export default {
  data(){
    return{
      visible: false,
    }
  },
  methods:{
    scrollListener: function (e) {
      this.visible = window.scrollY > 50
    }
  },
  mounted: function () {
    window.addEventListener('scroll', this.scrollListener)
  },
  beforeDestroy: function () {
    window.removeEventListener('scroll', this.scrollListener)
  }
}
</script>

<style>
nav{
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3%;
  width: 80%;
  height: 3em;
  padding: 1em;
  margin-top: 1em;
  background: rgba(23, 230, 106, 0.671);
  font-weight: 900;
  position: fixed;
  z-index: 2;
}

a{
  text-decoration: none;
  color: rgba(0,0,0,0.8);
  margin: 0 40px;
}

#logo{
  position: relative;
  width: 4em;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#logo>span{
  position: absolute;
  height: 4em;
  width: 4em;
  border-radius: 50%;
  background: rgb(58, 55, 55);
  display: flex;
  justify-content: center;
  align-items: center;
  color: aliceblue;
  text-transform: uppercase;
  font-size: larger;
  font-weight: 900;
  border: aliceblue 0.2em solid;
}
.colored{
  background: rgb(1, 59, 16);
  width: 80%;
}
.colored>a{
  color: white;
}
</style>