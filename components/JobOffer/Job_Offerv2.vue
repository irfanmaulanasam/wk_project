<template>
  <div class="v2">
    <div 
    v-for="(data, i) in images "
    :key="i"
    class="content">

      <h2>{{data.name || 'Float Left'}}</h2>

      <p>
        In this example, the image will float to the left in the paragraph, and
        the text in the paragraph will wrap around the image.
      </p>

      <p>
        <img
          :src="require(`@/assets/job/${data.img}.${data.kind}`)"
          alt="Pineapple"
          style="width: 170px; height: 170px; margin-right: 15px"
        />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae
        scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec
        congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet.
        Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent
        convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis
        dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc
        venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida
        venenatis. Integer fringilla congue eros non fermentum. Sed dapibus
        pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.
      </p>
      <WhatsappButton/>
    </div>
  </div>
</template>
<style scoped>
img {
  height: 100px;
  width: 100px;
  float: left;
}
.content{
  display: inline;
  width: 80%;
  height: 100%;
  border: red solid 2px;
}
</style>
<script>
export default {
  data(){
    return {
      images: [
        {
          name: "kanopy kain",
          img: "parasol",
          kind: "png",
          reason:'kenapa kanopi kain',
          why:'awning adalah komponen tambahan untuk mempercantik atau menambah estetika sebuah bangunan',
          description:" entah itu rumah ataupun tempat bisnis. Namun fungsi utama dari Canopy Kain ini adalah memberikan perlindungan dari sinar matahari  dan air hujan untuk apapun yang berada dibawahnya. Di Indonesia, fungsi dari Canopy Kain ini sama seperti gongsol, namun yang membedakan tentunya dari bahan dan cara membuatnya. Canopy Kain juga bisa dipasang untuk garasi atau teras rumah dengan model dan desain yang lebih bebas dari pada Canopy Kain yang dipasang di jendela atau pintu bangunan. Selain itu pemakaian Canopy Kain atau awning kain ini juga sangat cocok dipasang di tempat-tempat bisnis, seperti distro, café, restoran, hotel, resort, butik, pertokoan dan lain-lain. Selain fungsi utamanya untuk menahan sinar matahari dan air hujan, Canopy Kain juga dapat menambah nilai estetika bangunan anda. Bentuk, model dan desain Canopy Kain bisa disesuaikan menurut selera anda supaya lebih serasi dengan bangunan, mulai dari minimalis, klasik hingga moderen. Warung Canopy menyediakan layanan jasa pembuatan dan pemasangan Canopy Kain untuk berbagai kebutuhan, baik itu pribadi ataupun bisnis, Braja Awning menggunakan bahan-bahan terbaik, teknisi berpengalaman dan tentunya dengan harga yang kompetitif. Berbagai pilihan jenis kualitas rangka dan bahan Canopy Kain bisa anda pilih sendiri sesuai selera. Cakupan layanan Braja Awning tidak hanya di wilayah Jakarta, Depok, Tanggerang, Bandung ataupun wilayah Jabodetabek melainkan seluruh Indonesia"
        },
        {
          name: "Tenda membrane",
          img: "store_banne_lambrequin",
          kind: "png",
          why:"kenapa harus tenda membran",
          reason:"Tenda Membrane atau biasa juga disebut canopy membrane adalah model dan trend terbaru di arsitektur tenda,",
          description:` Tenda membrane memiliki model dan desain yang futuristik yang merepresentasikan dunia arsitektur modern saat ini. Tenda Membrane dapat menambah suasana di sekitar lokasi pemasangan menjadi lebih modern dan eksotis. Desain Tenda Membrane sangat fleksibel dan dapat secara bebas disesuaikan dengan kebutuhan masing-masing pemesan, namun yang tentunya akan dibatasi oleh keadaan sekitar lokasi pemasangan. Tenda Membrane biasanya dipasang ditempat-tempat publik, seperti taman, lokasi wisata, resto, mall, hotel, plaza, perkantoran dan tentunya di tempat-tempat pribadi seperti area rumah, resort, villa dan lain-lain. Terdapat dua jenis model utama Tenda Membrane atau canopy membrane, yang pertama adalah Tenda membrane dengan struktur rangka besi dan Tenda membrane yang lebih banyak menggunakan tarikan seling/kawat yang biasa juga disebut dengan model Tenda Layar. Terdapat beberapa jenis bahan yang biasa digunakan untuk membuat Tenda Membrane atau canopy membrane, anda bisa berkonsultasi terlebih dahulu dengan teknisi Braja Awning untuk menetukannya. Teknisi Braja Awning telah berpengalaman cukup lama dalam pembuatan dan pemasangan jenis Tenda Membrane ataupun tenda layar.`
        },
        {
          name: "",
          img: "store_corbeille",
          kind: "png",
          why:"",
          reason:"",
          description:""
        },
        {
          name: "",
          img: "store_fixe",
          kind: "png",
          why:"",
          reason:"",
          description:""
        },
        {
          name: "",
          img: "store_projection",
          kind: "png",
          why:"",
          reason:"",
          description:""
        },
        {
          name: "",
          img: "store_veranda",
          kind: "png",
          why:"",
          reason:"",
          description:""
        },
        {
          name: "",
          img: "voile_d",
          kind: "png",
          why:"",
          reason:"",
          description:""
        },
      ],
    }
  }
}
</script>