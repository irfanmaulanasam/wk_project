<template>
  <label :id="changeSize('thumbnail')">
    <input
      type="radio"
      :value="label"
      :name="name"
      v-model="radioButtonValue"
    />
    <div :class="changeSize('icon')" >
      <slot name="icon"></slot>
    </div>
    <div class="title" :class="{'isActive': value ===label}">
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
        this.$emit("change", this.label);
      },
    },
  },
  data () {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
    }
  },

  mounted () {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },

  methods: {
    onScroll () {
      if (window.pageYOffset < 0) {
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < 535) {
        return
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    },
    changeSize(className){
      if(className=='icon' && this.showNavbar){
        return 'icon'
      } else if(className=='icon' && !this.showNavbar){
        return 'smallericon'
      } else if(className=='thumbnail' && this.showNavbar){
        return 'thumbnail'
      } else if(className=='thumbnail' && !this.showNavbar){
        return 'smallerthumbnail'
      }
    }
  }
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
#smallerthumbnail input{
  display: none;
}
.icon {
  height: 100%;
  width: 50px;
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
  font-weight: 500;
  text-transform: capitalize;
  cursor: pointer;
}
.isActive{
  font-weight: 900;
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
  #smallerthumbnail{
    background-color: white;
    display: flex;
    flex-direction: row;
    height: 50px;
  }

  .icon {
    height: 100%;
    width: 100px;
  }
  .smallericon {
    height: 100%;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: seagreen;
  }
  .icon svg{
    height: 90%;
    width: 90%;
  }
  .smallericon svg{
    height: 80%;
    width: 80%;
  }
}
</style>