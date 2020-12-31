<template>
  <div id="mozaic">
      <div class="container">
          <div 
            v-for="img in loop" 
            :key="img"
            class="tile"
          >
            <img
            v-if="loop < 5"
            :src="require(`@/assets/images/${amount-(img-1)}.jpeg`)" 
            >
            <img
            v-else
            :src="require(`@/assets/images/${((content*5)-img)+1}.jpeg`)" 
            >
          </div>
      </div>
         <slot></slot>
  </div>
</template>

<script>
export default {
  props:{
    content:Number,
    amount:Number,
    loop:Number,
  },
};
</script>

<style scoped>
.container{
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 1rem;
    margin: 1em 0 0 0;
}
.none{
  display: none;
}
.tile img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.tile:nth-child(1){
    grid-column: span 4;
    grid-row: span 2;
}

.tile:nth-child(2),
.tile:nth-child(3){
    grid-column: span 2;
}

.tile:nth-child(4),
.tile:nth-child(5){
    grid-column: span 3;
}
@media screen and (max-width: 650px){
    .container{
        display: block;
    }
    .tile{
        margin-bottom: 1rem;
    }
}

</style>