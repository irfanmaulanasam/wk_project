<template>
  <div id="mozaic">
      <div class="container">
          <div 
            v-for="(data,i) in content" 
            :key="i"
            class="tile"
          >
          <overlay-photo-desc
            :image="require(`@/assets/images/${data.image}.jpeg`)"
          />
          </div>
      </div>
  </div>
</template>

<script>
import OverlayPhotoDesc from './OverlayPhotoDesc.vue';
export default {
  components: { OverlayPhotoDesc },
  props:{
    content:Array,
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
.tile{
  background-color: transparent;
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