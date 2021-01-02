<template>
  <label id="thumbnail">
    <input
      type="radio"
      :value="label"
      :name="name"
      v-model="radioButtonValue"
    />
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <div class="title">
      <p>
        <slot name="title"></slot>
      </p>
    </div>
  </label>
</template>

<script>
export default {
  props: ['name', 'label', 'value'],
  computed: {
    radioButtonValue: {
      get: function () {
        return this.value;
      },
      set: function () {
        // Communicate the change to parent component so that selectedValue can be updated
        this.$emit("change", this.label);
      },
    },
  },
};
</script>

<style scoped>
#thumbnail {
  display: flex;
  flex-direction: row;
  top: 0;
  height: 50px;
  position: relative;
  -webkit-transition: 200ms ease-in-out;
  transition: 200ms ease-in-out;
  background-color: white;
}
#thumbnail:hover {
  top: -2px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
}
#thumbnail input{
  display: none;
}
.icon {
  height: 50px;
  width: 50px;
  background: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: seagreen;
}
.icon svg{
  height: 80%;
  width: 80%;
}

.title {
  height: 100%;
  width: 70%;
  display: flex;
  justify-content: flex-start;
  margin-left: 1em;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 14pt;
  color: seagreen;
  font-weight: 700;
  text-transform: capitalize;
  cursor: pointer;
}
@media only screen and (min-width: 500px) {
  #thumbnail{
    height: 80px;
  }
  .icon {
    height: 80px;
    width: 80px;
  }
  .icon svg{
  height: 90%;
  width: 90%;
}
}

@media only screen and (min-width: 850px) {
  #thumbnail{
    height: 100px;
  }
  .icon {
    height: 100px;
    width: 100px;
  }
  .icon svg{
    height: 90%;
    width: 90%;
  }
}
</style>