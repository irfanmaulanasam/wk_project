<template>
  <SectionLayout 
    name="material"
    bg="rgba(128, 128, 128, 0.39)"
    title="material yang kami gunakan"
  >
    <div slot="content" class="band">
        <MaterialCard
          v-for="(data,i) in product"
          :key="i"
          :image="data.image"
          :logo="data.logo"
          :title="data.name"
          :link="data.href"
          :description="data.description"
        />
    </div>
  </SectionLayout>
</template>

<script>
export default {
  data(){
    return{
      product: require('@/assets/content/product.json'),
    }
  }
}
</script>

<style scoped>

.band {
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;
  
}

@media only screen and (min-width: 500px) {
  .band {
    grid-template-columns: repeat(2, 1fr);
  }  
}

@media only screen and (min-width: 850px) {
  .band {
    grid-template-columns: repeat(4, 1fr);
  }
}

</style>