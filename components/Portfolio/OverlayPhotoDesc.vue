<template>
  <div class="wrapper" @mouseover="hovered = true" @mouseleave="hovered= false">
    <transition name="fade" v-if="hovered">
      <div class="overlay">
        <h2>
          {{title || 'Judul tidak disertakan'}}
        </h2>
        <span>{{desc || 'keterangan tidak disertakan'}} </span>
      </div>
    </transition>
    <img
    :src="image" 
    >
  </div>
</template>

<script>
export default {
  props:{
    image:String,
    title:String,
    desc:String
  },
  data(){
    return{
      hovered:false
    }
  }
}
</script>

<style scoped>
.wrapper{
  position: relative;
  /* border: red solid 1px; */
  height: 100%;
  top: 0;
}
.wrapper:hover{
  top:-2px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.50);
}
.overlay{
  top: 5px;
  left: 5px;
  position: absolute;
  height: auto;
  width: auto;
  background-color: rgba(255, 255, 255, 0.650);
  padding: 1em 1em;
}
.overlay h2{
  text-transform: capitalize;
}

.wrapper img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>