<template>
  <div id="about-us">
    <div class="row">
      <div class="column-66">
        <h1 class="xlarge-font"><b>Warung Canopy</b></h1>
        <h1 class="large-font" style="color: MediumSeaGreen">
          <b>Siapa kami ini?</b>
        </h1>
        <p>
          <span class="medium-font">Kami adalah tenaga profesional.</span>
          kenapa anda harus memilih kami sebagai rekanan untuk pemasangan kanopi
          karena WK merupakan badan usaha pengrajin dibidang konstruksi,
          khususnya Canopy, Awning, Tenda Membrane. Dll Layanan kami bersifat
          terstruktur, dari tahapan komunikasi, pengukuran permodelan kontruksi
          dan bentuk, serta pengerjaan kami lakukan secara langsung, tanpa
          adanya pelimpahan urusan pengerjaan ataupun sub ke pihak lain.
          Sehingga kami dapat memberikan garansi yang utuh, harga bersaing dan
          pelayanan prima.
        </p>
        <WhatsappButton />
      </div>
      <div class="column-33">
        <img
          src="https://images.pexels.com/photos/2962009/pexels-photo-2962009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          width="335"
          height="471"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#about-us{
  margin: 2em;
  background: rgba(124, 247, 130, 0.322);
}
.row {
  margin: 1em;
  background-color: springgreen;
  padding: 2.5em;
  display: flex;

}
.row:after {
  content: "";
  display: table;
  clear: both;
}

.column-66 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 66.66666%;
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
.medium-font {
  font-size: 32px;
}
img {
  display: block;
  height: auto;
  max-width: 100%;
}

@media screen and (max-width: 1000px) {
  .column-66,
  .column-33 {
    width: 100%;
    text-align: center;
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