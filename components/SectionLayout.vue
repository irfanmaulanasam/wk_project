<template>
  <section :id="name" :style="`background-color:${bg}`">
    <h1 :style="`background-color:${bg}`">
      {{title}}
    </h1>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </section>
</template>

<script>
export default {
  props:{
    name:String,
    title:String,
    bg:String
  }
}
</script>

<style scoped>
section{
  margin-top: 1em;
  margin-left: 0.5em;
  margin-right: 0.5em;
  margin-bottom: 0;
  padding-left: 0.5em;
  padding-right: 0.5em;
  border: rgba(10, 10, 10, 0.034) solid 2px;
  
}
h1{
  position: sticky;
  top: 70px;
  margin-bottom: 10px;
  margin-top: 80px;
  font-weight: 900;
  text-transform: capitalize;
  z-index: 5;
  width: auto;
}
.content{
  margin-bottom: 1em;
}
@media screen and(max-width: 1000px){
  section{
    margin-top: 1em;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 0;
    /* padding-left: 0.5em;
    padding-right: 0.5em; */
  } 
}
</style>