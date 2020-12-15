<template>
  <div class="spacer">
    <a 
      :href="`https://api.whatsapp.com/send?phone=${numbers}`" 
      class="buttons"
      target="_blank"
    >
    <p>
      hubungi kami sekarang
    </p>
    </a>
  </div>
</template>

<script>
export default {
  props:{
    numbers:{
      type:String,
      default: '+6285721888157'
    }
  }
}
</script>

<style scoped>
.spacer{
  display: flex;
  justify-content: center;
  margin-top: 1em;
}
a{
  text-decoration: none;
  font-weight: 900;
  text-transform: capitalize;
}
p{
  text-align: left;
}
.buttons {
  text-align: justify;
  border: none;
  color: white;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  background-color: #4CAF50;
}
@media screen and(max-width: 1000px){
  .button{
    padding: 6px 14px;
  }
}
</style>