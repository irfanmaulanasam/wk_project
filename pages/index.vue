<template>
  <div>
    <Navigation />
    <div class="main">
      <AboutUs/>
      <Portfolio/>
      <Services/>
      <Material/>
      <JobOffer/>
      <Maps/> 
      <Footer/>
    </div>
      <Scroll />
  </div>
</template>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  /* word-spacing: 1px; */
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  /* box-sizing: border-box; */
  background-image: url("https://static.vecteezy.com/system/resources/previews/000/576/820/non_2x/dot-pattern-background-vector.jpg");
} 
.main{
  top: 5em;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>