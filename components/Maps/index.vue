<template>
  <div id="maps">
    <div class="col">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.044303909859!2d106.81952751460554!3d-6.2578944954703735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3d4ce87dc95%3A0x21b8ad822a428087!2sJl.%20Kemang%20Utara%20No.51%2C%20RT.1%2FRW.4%2C%20Bangka%2C%20Kec.%20Mampang%20Prpt.%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012730!5e0!3m2!1sid!2sid!4v1607952366271!5m2!1sid!2sid"
      width="600"
      height="450"
      frameborder="0"
      style="border:0;"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0">
      </iframe>
      <div class="address">

      Our Office
      jl. kemang utara no.51,
      Jakarta Selatan, 12730
      <button class="button" style="background-color: red">
                    Read More
                  </button>
                </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#maps{
  padding: 1em;
}
.col{
  display: flex;
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
</style>