<template>
  <div id="navigation">
    <div 
      class="navbar"
      :class="{ colored: visible }"
    >
      <nuxt-link to="#about-us" class="bar-menu">About Us</nuxt-link>
      <nuxt-link to="#portfolio" class="bar-menu">Portfolio</nuxt-link>
      <nuxt-link to="#job-offer" class="bar-menu">job-offer</nuxt-link>
      <div id="logo">
        <img :src="require(`@/assets/logo.jpeg`)" />
      </div>
      <nuxt-link to="#material" class="bar-menu">material</nuxt-link>
      <nuxt-link to="#services" class="bar-menu">Services</nuxt-link>
      <nuxt-link to="#maps" class="bar-menu">Contact</nuxt-link>
      <div class="sidenav-button" @click="sidenavActive = !sidenavActive">
        <svg
          v-if="!sidenavActive"
          width="48px"
          height="48px"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M41,14H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,14Z" />
          <path d="M41,26H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,26Z" />
          <path d="M41,38H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,38Z" />
        </svg>
        <svg
          v-else
          width="40px"
          height="40px"
          viewBox="0 0 460.775 460.775"
          style="enable-background: new 0 0 460.775 460.775"
          xml:space="preserve"
        >
          <path
            d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
            c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
            c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
            c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
            l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
            c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"
          />
        </svg>
      </div>
    </div>
    <Menu :isPanelOpen="sidenavActive">
      <div class="sidenav">
        <nuxt-link to="#about-us"  @click="sidenavActive = !sidenavActive">About Us</nuxt-link>
        <nuxt-link to="#job-offer"  @click="sidenavActive = !sidenavActive">Job-offer</nuxt-link>
        <nuxt-link to="#material"  @click="sidenavActive = !sidenavActive">Material Support</nuxt-link>
        <nuxt-link to="#services"  @click="sidenavActive = !sidenavActive">Services</nuxt-link>
        <nuxt-link to="#portfolio"  @click="sidenavActive = !sidenavActive">Portfolio</nuxt-link>
        <nuxt-link to="#maps"  @click="sidenavActive = !sidenavActive">Contact Us</nuxt-link>
      </div>
    </Menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      sidenavActive: false,
    };
  },
  methods: {
    scrollListener: function (e) {
      this.visible = window.scrollY > 50;
    },
  },
  mounted: function () {
    window.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy: function () {
    window.removeEventListener("scroll", this.scrollListener);
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 1em;
  padding: 1em;
  margin-top: 0.5em;
  background: rgba(23, 230, 106, 0.671);
  font-weight: 900;
  position: fixed;
  z-index: 2;
}

a {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.8);
  margin: 0 40px;
}

#logo {
  position: relative;
  width: 4em;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#logo > img {
  position: absolute;
  height: 4em;
  width: 4em;
  background: rgb(58, 55, 55);
  display: flex;
  justify-content: center;
  align-items: center;
  color: aliceblue;
  text-transform: uppercase;
  font-size: larger;
  font-weight: 900;
  border: aliceblue 0.2em solid;
}
.colored {
  background: rgb(1, 59, 16);
  /* width: 80%; */
}
.colored > a {
  color: white;
}
.sidenav {
  display: none;
}
.sidenav-button {
  display: none;
}
@media screen and (max-width: 1000px) {
  .navbar {
    width: 90%;
    justify-content: space-between;
  }
  .colored{
    width: 90%;
    background: none;
  }
  .bar-menu {
    display: none;
  }
  .sidenav-button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5em;
    width: 2.5em;
  }
  .sidenav{
    display: contents;
    color: white;
    font-size: small;
  }
  .sidenav>a{
    text-decoration: none;
    color: white;
    text-align: justify;
    font-weight: bold;
  }
  .sidenav-button > svg {
    height: 1.8em;
  }
}
</style>