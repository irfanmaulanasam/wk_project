<template>
  <SectionLayout 
    name="material"
    bg="rgba(128, 128, 128, 0.39)"
    title="material yang kami gunakan"
  >
    <div slot="content" class="band">
        <MaterialCard
          v-for="(data,i) in list"
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
      list: [
        {
          name: "Dickson",
          image:"https://www.dickson-constant.com/media//gene-cms/p/e/pergola_3.jpg",
          logo: require(`~/assets/product/Dickson.png`),
          description:"lorem ipsum we lah anu babari ditulis bari jeung lieur naon eusina",
          href:'https://www.dickson-constant.com/'
        },
        {
          name: "Serge Ferrari",
          image:"https://www.sergeferrari.com/sites/default/files/styles/homepage_layer_background/public/2019-11/Decoupe_visuel-site-matiere-voile_1.jpg?h=c5282e4e&itok=WRPgsxgt",
          logo: require(`~/assets/product/ferari.png`),
          description:"lorem ipsum we lah anu babari ditulis bari jeung lieur naon eusina",
          href:"https://www.sergeferrari.com/"
        },
        {
          name: "Recacrill Design",
          image:"https://recasensusa.com/wp-content/uploads/2017/01/awnings_0.jpg",
          logo: require(`~/assets/product/Recacesn.png`),
          description:"lorem ipsum we lah anu babari ditulis bari jeung lieur naon eusina",
          href:"https://recasensusa.com"
          },
        {
          name: "Sunbrella",
          image:"https://cdn.glenraven.net/sb2016/img/slider/sunbrella-homepage-shade-hero.jpg",
          logo: require(`~/assets/product/sunbrella.png`),
          description:"lorem ipsum we lah anu babari ditulis bari jeung lieur naon eusina",
          href:"https://global.sunbrella.com/"
        },
        {
          name: "Verseidag",
          image:"https://www.verseidag.de/Medien/Bilder/_Uploads/image-thumb__759__verseidag_640x480_auto_a7728137fab0d94af7052502bd7293c6/shutterstock_1332889100small.pjpeg",
          logo: require(`~/assets/product/Verseidag.png`),
          description:"lorem ipsum we lah anu babari ditulis bari jeung lieur naon eusina",
          href:"https://www.verseidag.de/en"
        },
      ],
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