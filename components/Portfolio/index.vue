<template>
  <SectionLayout
    title="beberapa hasil karya kami"
    name="portfolio"
    bg="rgba(219, 216, 216, 0.521)"
  >
    <div v-for="i in muchLoop" :key="i" slot="content">
      <Grid :amount="imageList.length" :content="getLoopData(i,checkLoop(i))" :loop="checkLoop(i)"/>
    </div>
  </SectionLayout>
</template>
<script>
export default {
  data() {
    return {
      amount: 18,
      muchLoop:null,
      imageList:require('@/assets/content/portfolio.json'),
    };
  },
  methods: {
    checkLoop(i) {
      let current = i * 5 > this.amount ? this.amount - (i - 1) * 5 : 5;
      return current
    },
    getLoopData(i,current){
      let data = []
      let start = 0
      let finish = null
      if (current == 5 && i == 1) {
          finish = current
      } else if (i>1 && current == 5) {
        start = current *(i-1)
        finish = current * i
      } else if (current < 5){
        start = this.amount - current
        finish = this.amount
      } 
      for (let index = start; index < finish; index++) {
        data.push(this.imageList[index])
      }
      return data
    },
  },
  mounted() {
    this.muchLoop = Math.round(this.amount / 5);
  },
};
</script>
<style scoped>
</style>