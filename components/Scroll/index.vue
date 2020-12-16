<template>
  <ScrollTopComponent>
    <a class="btn">
      <Arrow />
    </a>
  </ScrollTopComponent>
</template>

<script>
</script>

<style>
.btn {
  border-radius: 15%;
  padding-left: 10px;
  height: 2em;
  width: 3em;
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* rotate: -90deg; */
   transform:rotate(-90deg);
    -ms-transform:rotate(-90deg); /* IE 9 */
    -moz-transform:rotate(-90deg); /* Firefox */
    -webkit-transform:rotate(-90deg); /* Safari and Chrome */
    -o-transform:rotate(-90deg); /* Opera */
}
</style>

