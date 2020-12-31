<template>
  <SectionLayout
    title="beberapa hasil karya kami"
    name="portfolio"
    bg="rgba(219, 216, 216, 0.521)"
  >
    <div v-for="i in muchLoop" :key="i" slot="content">
      <Grid :content="i" :amount="amount" :loop="checkLoop(i)"> </Grid>
    </div>
  </SectionLayout>
</template>
<script>
export default {
  data() {
    return {
      amount: 18,
    };
  },
  methods: {
    checkLoop(i) {
      return i * 5 > this.amount ? this.amount - (i - 1) * 5 : 5;
    },
  },
  computed: {
    muchLoop() {
      return Math.round(this.amount / 5);
    },
  },
};
</script>
<style scoped>
/* #portfolio {
  margin: 0.5rem 0.5rem;
  background-color: rgba(219, 216, 216, 0.521);
  padding: 0.4rem;
} @media screen and (max-width: 1000px) {
  #portfolio {
    margin: 0.2rem 0.2rem;
    padding: 0.2rem;
  }
} */
</style>