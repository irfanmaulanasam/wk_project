  <template>
  <div id="job-offer">
    <div  v-for="(data, index) in images" :key="index">
      <div class="container" v-if="index % 2 == 0">
        <div class="row">
          <div class="column-66">
            <h1 class="xlarge-font"><b>{{data.name||'The App'}}</b></h1>
            <h1 class="large-font" style="color: MediumSeaGreen">
              <b>{{ data.reason||'Why buy it?'}}</b>
            </h1>
            <p>
              <span style="font-size: 36px">{{data.why ||'Take photos like a pro'}},</span>
               {{ data.description ||`You should buy this app because lorem ipsum consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.`}}
            </p>
            <WhatsappButton />
          </div>
          <div class="column-33">
            <img
              :src="require(`@/assets/job/${data.img}.${data.kind}`)"
              width="335"
              height="471"
            />
          </div>
        </div>
      </div>

      <!-- Clarity Section -->
      <div class="container" style="background-color: #f1f1f1" v-else>
        <div class="row">
          <div class="column-33">
            <img
              :src="require(`@/assets/job/${data.img}.${data.kind}`)"
              width="335"
              height="471"
            />
          </div>
          <div class="column-66">
            <h1 class="xlarge-font"><b>{{data.name||'Clarity'}}</b></h1>
            <h1 class="large-font" style="color: red"><b>{{ data.why||'Pixels, who?'}}</b></h1>
            <p>
              <span style="font-size: 24px">{{data.reason||'A revolution in resolution.'}}</span>
              {{data.description||`Sharp and clear photos with the world's best photo engine,
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquipex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.`}}
            </p>
            <button class="button" style="background-color: red">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

  <script>
export default {
  data() {
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
    };
  },
};
</script>

<style scoped>
#job-offer{
  background-color: rgba(187, 248, 248, 0.726);
}
.container {
  padding: 4em;
}
.row{
  display: flex;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}

.column-66 {
  float: left;
  width: 66.66666%;
  padding: 20px;
}

.column-33 {
  float: left;
  width: 33.33333%;
  padding: 20px;
}

.large-font {
  font-size: 48px;
}

.xlarge-font {
  font-size: 64px;
}

.button {
  border: none;
  color: white;
  margin-top: 0.2em;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  background-color: #4caf50;
}

img {
  display: block;
  height: auto;
  max-width: 100%;
}

@media screen and (max-width: 1000px) {
  .column-66,
  .column-33 {
    padding: 0.5em;
    width: 100%;
    text-align: center;
  }
  .container{
    padding: 1;
  }
  .row {
    flex-direction: column;
    margin: 0;
  }
  img {
    margin: auto;
  }
  .large-font {
    font-size: 24px;
  }

  .xlarge-font {
    font-size: 32px;
  }
  .medium-font {
    font-weight: bold;
    font-size: 18px;
  }
  .column-66{
    text-align: justify;
  }
}
</style>